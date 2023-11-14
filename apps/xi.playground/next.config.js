const plugins = [];

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'tailwind',
    '@xipkg/modal',
    '@xipkg/mui',
    '@xipkg/tailwind',
    '@xipkg/typescript',
    '@xipkg/icons',
    '@xipkg/link',
    '@xipkg/input', 
    '@xipkg/passwordinput', 
    '@xipkg/badge',
    '@xipkg/breadcrumbs',
    '@xipkg/button',
    '@xipkg/checkbox',
    '@xipkg/dropdown',
    '@xipkg/file',
    '@xipkg/fileuploader',
    '@xipkg/radio',
    '@xipkg/select',
    '@xipkg/switcher',
    '@xipkg/toggle',
    '@xipkg/avatar',
    '@xipkg/userprofile',
  ],
  images: {
    domains: [
      'cdn.discordapp.com',
      'localhost:3000',
      'localhost:5000',
      'xieffect.ru:5000',
      'xieffect.ru',
    ],
  },
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
