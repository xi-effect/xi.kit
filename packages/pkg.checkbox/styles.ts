/* names created according to: component name + prop + style (S) */
/* styles according to types */
export const containerTypes = {
  default: { bgcolor: 'gray.5' },
  warning: {
    bgcolor: 'gray.5',
  },
  error: { bgcolor: 'gray.5' },
  disabled: { bgcolor: 'gray.10' },
};
export const checkboxTypes = {
  default: { color: 'gray.40' },
  warning: {
    color: 'kungur.80',
  },
  error: { color: 'moscow.80' },
  disabled: { color: 'gray.10' },
};
export const checkedCheckboxTypes = {
  default: { bgcolor: 'brand.80' },
  warning: {
    bgcolor: 'kungur.80',
  },
  error: { bgcolor: 'moscow.80' },
  disabled: { bgcolor: 'gray.10' },
};
export const checkedIconTypes = {
  default: { color: 'gray.0' },
  warning: {
    color: 'gray.0',
  },
  error: { color: 'gray.0' },
  disabled: { color: 'gray.40' },
};
export const defaultIconTypes = {
  default: { borderColor: 'brand.80', bgcolor: 'gray.0' },
  warning: {
    borderColor: 'kungur.80',
    bgcolor: 'gray.0',
  },
  error: { borderColor: 'moscow.80', bgcolor: 'gray.0' },
  disabled: { borderColor: 'gray.10', bgcolor: 'gray.10', color: 'gray.10' },
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
