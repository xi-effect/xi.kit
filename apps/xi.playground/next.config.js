// Не поддавайтесь соблазну использовать здесь import
const path = require('path');

const plugins = [];

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    '@xipkg/tailwind',
    '@xipkg/config.typescript',
    'pkg.signin.form',
  ],
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'localhost:3000',
      'localhost:5000',
      'xieffect.ru:5000',
      'xieffect.ru',
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
