module.exports = {
  corePlugins: {
    preflight: false,
  },
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-inter)'],
    },
  },
  theme: {
    screens: {
      // => @media (min-width: 480px) { ... }
      xs: '480px',

      // => @media (min-width: 720px) { ... }
      sm: '720px',

      // => @media (min-width: 960px) { ... }
      md: '960px',

      // => @media (min-width: 1200px) { ... }
      lg: '1200px',

      // => @media (min-width: 1440px) { ... }
      xl: '1440px',

      // => @media (min-width: 1680px) { ... }
      '2xl': '1680px',

      // => @media (min-width: 1920px) { ... }
      '3xl': '1920px',
    },
    fontSize: {
      h1: ['56px', { lineHeight: '64px', fontWeight: '500' }],
      h2: ['48px', { lineHeight: '56px', fontWeight: '500' }],
      h3: ['40px', { lineHeight: '48px', fontWeight: '500' }],
      h4: ['36px', { lineHeight: '44px', fontWeight: '500' }],
      h5: ['32px', { lineHeight: '40px', fontWeight: '500' }],
      h6: ['28px', { lineHeight: '36px', fontWeight: '500' }],
      xl: ['24px', { lineHeight: '32px', fontWeight: '500' }],
      l: ['20px', { lineHeight: '28px', fontWeight: '500' }],
      m: ['16px', { lineHeight: '22px', fontWeight: '500' }],
      s: ['14px', { lineHeight: '20px', fontWeight: '500' }],
      xs: ['12px', { lineHeight: '16px', fontWeight: '500' }],
      xxs: ['10px', { lineHeight: '14px', fontWeight: '500' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: {
        100: 'var(--xi-gray-100)',
        90: 'var(--xi-gray-90)',
        80: 'var(--xi-gray-80)',
        70: 'var(--xi-gray-70)',
        60: 'var(--xi-gray-60)',
        50: 'var(--xi-gray-50)',
        40: 'var(--xi-gray-40)',
        30: 'var(--xi-gray-30)',
        20: 'var(--xi-gray-20)',
        10: 'var(--xi-gray-10)',
        5: 'var(--xi-gray-5)',
        0: 'var(--xi-gray-0)',
      },
      brand: {
        100: 'var(--xi-brand-100)',
        80: 'var(--xi-brand-80)',
        60: 'var(--xi-brand-60)',
        40: 'var(--xi-brand-40)',
        20: 'var(--xi-brand-20)',
        0: 'var(--xi-brand-0)',
      },
      bkgd: {
        main: 'var(--xi-bkgd-main)',
        block: 'var(--xi-bkgd-block)',
      },
      red: {
        100: 'var(--xi-red-100)',
        80: 'var(--xi-red-80)',
        60: 'var(--xi-red-60)',
        40: 'var(--xi-red-40)',
        20: 'var(--xi-red-20)',
        0: 'var(--xi-red-0)',
      },
      green: {
        100: 'var(--xi-green-100)',
        80: 'var(--xi-green-80)',
        60: 'var(--xi-green-60)',
        40: 'var(--xi-green-40)',
        20: 'var(--xi-green-20)',
        0: 'var(--xi-green-0)',
      },
      orange: {
        100: 'var(--xi-orange-100)',
        80: 'var(--xi-orange-80)',
        60: 'var(--xi-orange-60)',
        40: 'var(--xi-orange-40)',
        20: 'var(--xi-orange-20)',
        0: 'var(--xi-orange-0)',
      },
      yellow: {
        100: 'var(--xi-yellow-100)',
        60: 'var(--xi-yellow-60)',
        40: 'var(--xi-yellow-40)',
        20: 'var(--xi-yellow-20)',
      },
      violet: {
        100: 'var(--xi-violet-100)',
        60: 'var(--xi-violet-60)',
        40: 'var(--xi-violet-40)',
        20: 'var(--xi-violet-20)',
      },
      pink: {
        100: 'var(--xi-pink-100)',
        60: 'var(--xi-pink-60)',
        40: 'var(--xi-pink-40)',
        20: 'var(--xi-pink-20)',
      },
      cyan: {
        100: 'var(--xi-cyan-100)',
        60: 'var(--xi-cyan-60)',
        40: 'var(--xi-cyan-40)',
        20: 'var(--xi-cyan-20)',
      },
    },
  },
};
