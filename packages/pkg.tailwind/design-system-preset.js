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
    // fontSize: {
    //   h1: ['3.5rem', { lineHeight: '4rem', fontWeight: '500' }],
    //   h2: ['3rem', { lineHeight: '3.5rem', fontWeight: '500' }],
    //   h3: ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }],
    //   h4: ['2.25rem', { lineHeight: '2.75rem', fontWeight: '500' }],
    //   h5: ['2rem', { lineHeight: '2.5rem', fontWeight: '500' }],
    //   h6: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '500' }],
    //   xl: ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
    //   l: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
    //   m: ['1rem', { lineHeight: '1.375rem', fontWeight: '500' }],
    //   s: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
    //   xs: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
    //   xxs: ['0.625rem', { lineHeight: '0.875rem', fontWeight: '500' }],
    // },
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
    extend: {
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
  },
};
