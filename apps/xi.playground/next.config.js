// Не поддавайтесь соблазну использовать здесь import
const path = require('path');

const plugins = [];

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    '@xipkg/theme',
    '@xipkg/theme.types',
    '@xipkg/components.badge',
    '@xipkg/components.loading',
    '@xipkg/components.file',
    '@xipkg/icons',
    '@xipkg/inputs.radio',
    '@xipkg/inputs.toggle',
    '@xipkg/inputs.switcher',
    '@xipkg/hooks',
  ],
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'localhost:3000',
      'localhost:5000',
      'xieffect.ru:5000',
      'xieffect.ru',
      'avatar.vercel.sh',
    ],
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
