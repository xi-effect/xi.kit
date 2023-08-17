/* names created according to: component name + prop + style (S) */
/* styles according to types */
export const containerTypes = {
  default: { bgcolor: 'var(--xi-gray-5)' },
  warning: {
    bgcolor: 'var(--xi-gray-5)',
  },
  error: { bgcolor: 'var(--xi-gray-5)' },
  disabled: { bgcolor: 'var(--xi-gray-10)' },
};
export const checkboxTypes = {
  default: { color: 'var(--xi-gray-40)' },
  warning: {
    color: 'var(--xi-orange-80)',
  },
  error: { color: 'var(--xi-red-80)' },
  disabled: { color: 'var(--xi-gray-10)' },
};
export const checkedCheckboxTypes = {
  default: { bgcolor: 'var(--xi-brand-80)' },
  warning: {
    bgcolor: 'var(--xi-orange-80)',
  },
  error: { bgcolor: 'var(--xi-red-80)' },
  disabled: { bgcolor: 'var(--xi-gray-10)' },
};
export const checkedIconTypes = {
  default: { color: 'var(--xi-gray-0)' },
  warning: {
    color: 'var(--xi-gray-0)',
  },
  error: { color: 'var(--xi-gray-0)' },
  disabled: { color: 'var(--xi-gray-40)' },
};
export const defaultIconTypes = {
  default: { borderColor: 'var(--xi-brand-80)', bgcolor: 'var(--xi-gray-0)' },
  warning: {
    borderColor: 'var(--xi-orange-80)',
    bgcolor: 'var(--xi-gray-0)',
  },
  error: { borderColor: 'var(--xi-red-80)', bgcolor: 'var(--xi-gray-0)' },
  disabled: { borderColor: 'var(--xi-gray-10)', bgcolor: 'var(--xi-gray-10)', color: 'var(--xi-gray-10)' },
};

/* styles according to sizes */
export const containerSizes = {
  s: {
    gap: '4px',
    borderRadius: '6px',
  },
  m: {
    gap: '6px',
    borderRadius: '8px',
  },
  l: {
    gap: '8px',
    borderRadius: '8px',
  },
};
export const checboxSizes = {
  s: {
    borderRadius: '4px',
    width: '16px',
    height: '16px',
  },
  m: {
    borderRadius: '6px',
    width: '20px',
    height: '20px',
  },
  l: {
    borderRadius: '6px',
    width: '24px',
    height: '24px',
  },
};
export const checkedIconSizes = {
  s: {
    fontSize: '12px',
  },
  m: {
    fontSize: '16px',
  },
  l: {
    fontSize: '20px',
  },
};
export const labelSizes = {
  s: {
    fontSize: '12px',
  },
  m: {
    fontSize: '14px',
  },
  l: {
    fontSize: '16px',
  },
};
