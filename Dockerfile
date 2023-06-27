FROM node:16-alpine AS base

FROM base AS pruner
ARG APP_NAME

# Install system-level components
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g turbo npm@9.1.2

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Prune everything but xi.front
RUN turbo prune --scope=${APP_NAME} --docker

FROM base
ARG APP_NAME

# Install system-level components
RUN apk add --no-cache libc6-compat openssh-client git
RUN apk update
RUN npm install -g npm@9.1.2

# Set working directory
WORKDIR /app

# Install all dependencies
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
RUN npm install

# Build the project
COPY --from=pruner /app/out/full/ .
COPY turbo.json turbo.json
RUN npm run build --filter=${APP_NAME}...
