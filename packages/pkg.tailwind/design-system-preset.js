const colors = {
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
    90: 'var(--xi-brand-90)',
    80: 'var(--xi-brand-80)',
    60: 'var(--xi-brand-60)',
    40: 'var(--xi-brand-40)',
    20: 'var(--xi-brand-20)',
    10: 'var(--xi-brand-10)',
    0: 'var(--xi-brand-0)',
    '100-a20': 'var(--xi-brand-100-a20)',
    '100-a30': 'var(--xi-brand-100-a30)',
  },
  red: {
    100: 'var(--xi-red-100)',
    80: 'var(--xi-red-80)',
    60: 'var(--xi-red-60)',
    40: 'var(--xi-red-40)',
    20: 'var(--xi-red-20)',
    0: 'var(--xi-red-0)',
    '100-a20': 'var(--xi-red-100-a20)',
  },
  green: {
    100: 'var(--xi-green-100)',
    80: 'var(--xi-green-80)',
    60: 'var(--xi-green-60)',
    40: 'var(--xi-green-40)',
    20: 'var(--xi-green-20)',
    0: 'var(--xi-green-0)',
    '100-a20': 'var(--xi-green-100-a20)',
  },
  orange: {
    100: 'var(--xi-orange-100)',
    80: 'var(--xi-orange-80)',
    60: 'var(--xi-orange-60)',
    40: 'var(--xi-orange-40)',
    20: 'var(--xi-orange-20)',
    0: 'var(--xi-orange-0)',
    '100-a20': 'var(--xi-orange-100-a20)',
  },
  yellow: {
    100: 'var(--xi-yellow-100)',
    60: 'var(--xi-yellow-60)',
    40: 'var(--xi-yellow-40)',
    20: 'var(--xi-yellow-20)',
    '100-a20': 'var(--xi-yellow-100-a20)',
  },
  violet: {
    100: 'var(--xi-violet-100)',
    60: 'var(--xi-violet-60)',
    40: 'var(--xi-violet-40)',
    20: 'var(--xi-violet-20)',
    '100-a20': 'var(--xi-violet-100-a20)',
  },
  pink: {
    100: 'var(--xi-pink-100)',
    60: 'var(--xi-pink-60)',
    40: 'var(--xi-pink-40)',
    20: 'var(--xi-pink-20)',
    '100-a20': 'var(--xi-pink-100-a20)',
  },
  cyan: {
    100: 'var(--xi-cyan-100)',
    60: 'var(--xi-cyan-60)',
    40: 'var(--xi-cyan-40)',
    20: 'var(--xi-cyan-20)',
    '100-a20': 'var(--xi-cyan-100-a20)',
  },
  background: {
    page: 'var(--xi-background-page)',
    surface: 'var(--xi-background-surface)',
    subtle: 'var(--xi-background-subtle)',
    elevated: 'var(--xi-background-elevated)',
    canvas: 'var(--xi-background-canvas)',
    overlay: 'var(--xi-background-overlay)',
    DEFAULT: 'var(--xi-background-page)',
  },
  text: {
    primary: 'var(--xi-text-primary)',
    secondary: 'var(--xi-text-secondary)',
    muted: 'var(--xi-text-muted)',
    disabled: 'var(--xi-text-disabled)',
    'on-accent': 'var(--xi-text-on-accent)',
    link: 'var(--xi-text-link)',
    danger: 'var(--xi-text-danger)',
  },
  icon: {
    primary: 'var(--xi-icon-primary)',
    secondary: 'var(--xi-icon-secondary)',
    disabled: 'var(--xi-icon-disabled)',
    brand: 'var(--xi-icon-brand)',
    danger: 'var(--xi-icon-danger)',
  },
  border: {
    default: 'var(--xi-border-default)',
    control: 'var(--xi-border-control)',
    strong: 'var(--xi-border-strong)',
    focus: 'var(--xi-border-focus)',
    selected: 'var(--xi-border-selected)',
    error: 'var(--xi-border-error)',
  },
  action: {
    primary: {
      background: {
        default: 'var(--xi-action-primary-background-default)',
        hover: 'var(--xi-action-primary-background-hover)',
        pressed: 'var(--xi-action-primary-background-pressed)',
        disabled: 'var(--xi-action-primary-background-disabled)',
      },
      text: {
        DEFAULT: 'var(--xi-action-primary-text)',
        disabled: 'var(--xi-action-primary-text-disabled)',
      },
    },
    secondary: {
      background: {
        default: 'var(--xi-action-secondary-background-default)',
        hover: 'var(--xi-action-secondary-background-hover)',
        pressed: 'var(--xi-action-secondary-background-pressed)',
      },
      text: 'var(--xi-action-secondary-text)',
      border: 'var(--xi-action-secondary-border)',
    },
  },
  selection: {
    background: 'var(--xi-selection-background)',
    border: 'var(--xi-selection-border)',
    icon: 'var(--xi-selection-icon)',
  },
  status: {
    error: {
      background: 'var(--xi-status-error-background)',
      accent: 'var(--xi-status-error-accent)',
      text: 'var(--xi-status-error-text)',
    },
    success: {
      background: 'var(--xi-status-success-background)',
      accent: 'var(--xi-status-success-accent)',
      text: 'var(--xi-status-success-text)',
    },
    warning: {
      background: 'var(--xi-status-warning-background)',
      accent: 'var(--xi-status-warning-accent)',
      text: 'var(--xi-status-warning-text)',
    },
    info: {
      background: 'var(--xi-status-info-background)',
      accent: 'var(--xi-status-info-accent)',
      text: 'var(--xi-status-info-text)',
    },
  },
  tag: {
    orange: {
      background: 'var(--xi-tag-orange-background)',
      border: 'var(--xi-tag-orange-border)',
      accent: 'var(--xi-tag-orange-accent)',
    },
    violet: {
      background: 'var(--xi-tag-violet-background)',
      border: 'var(--xi-tag-violet-border)',
      accent: 'var(--xi-tag-violet-accent)',
    },
    pink: {
      background: 'var(--xi-tag-pink-background)',
      border: 'var(--xi-tag-pink-border)',
      accent: 'var(--xi-tag-pink-accent)',
    },
    cyan: {
      background: 'var(--xi-tag-cyan-background)',
      border: 'var(--xi-tag-cyan-border)',
      accent: 'var(--xi-tag-cyan-accent)',
    },
    text: 'var(--xi-tag-text)',
  },
  bkgd: {
    main: 'var(--xi-bkgd-main)',
    block: 'var(--xi-bkgd-block)',
  },
};

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
    colors,
    extend: {
      fontSize: {
        h1: ['56px', '64px'],
        h2: ['48px', '56px'],
        h3: ['40px', '48px'],
        h4: ['36px', '44px'],
        h5: ['32px', '40px'],
        h6: ['28px', '36px'],
        'xl-base': ['24px', '32px'],
        'l-base': ['20px', '28px'],
        'm-base': ['16px', '20px'],
        's-base': ['14px', '20px'],
        'xs-base': ['12px', '16px'],
        'xxs-base': ['10px', '14px'],
      },
      colors,
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
};
