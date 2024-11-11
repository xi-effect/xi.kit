const plugins = [];

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'tailwind',
    '@xipkg/modal',
    '@xipkg/tailwind',
    '@xipkg/typescript',
    '@xipkg/icons',
    '@xipkg/link',
    '@xipkg/input', 
    '@xipkg/label', 
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
    '@xipkg/calendar',
    '@xipkg/utils',
    '@xipkg/popover',
    '@xipkg/scrollarea',
    '@xipkg/contextmenu',
    '@xipkg/tooltip',
    '@xipkg/sheet',
    '@xipkg/inputsmart'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auth.xieffect.ru',
      },
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
