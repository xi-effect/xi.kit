import { styled } from '@mui/material/styles';
import { IconProps } from './types';

export const Icon = styled('span')<IconProps & any>(({ sizes, color = 'gray' }) => ({
  borderRadius: '50%',
  border: '1px solid',
  borderColor: color === 'primary' ? 'var(--xi-gray-40)' : `var(--xi-${color}-100)`,
  backgroundColor: 'var(--xi-gray-0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  'input:hover ~ &': {
    backgroundColor: 'var(--xi-gray-5)',
  },
  'input:disabled ~ &': {
    background: 'var(--xi-gray-10)',
    borderColor: 'var(--xi-gray-10)',
  },
  ...sizes.icon,
}));

export const CheckedIcon = styled(Icon)<IconProps & any>(({ sizes, color }) => ({
  backgroundColor: `var(--xi-${color}-100)`,
  borderColor: `var(--xi-${color}-100)`,
  '&:before': {
    content: '""',
    borderRadius: '50%',
    backgroundColor: 'var(--xi-gray-0)',
    ...sizes.checkedIcon,
  },
  'input:hover ~ &': {
    backgroundColor: `var(--xi-${color}-100)`,
  },
  'input:disabled ~ &:before': {
    background: 'var(--xi-gray-40)',
  },
}));
