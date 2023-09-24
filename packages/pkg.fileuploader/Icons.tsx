import { FC } from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import { Check, Close } from '@xipkg/icons';
import { iconSizesStyle } from './styles/fileStyle';
import { IconsProps } from './types';

const Icons: FC<IconsProps> = ({
  size,
  color,
  isDeleteIcon,
  isLoadingIcon,
  isSucceededIcon,
  isAbortIcon,
  onDeleteClick,
  onAbortRequestClick,
}) => (
  <>
    {isDeleteIcon && (
      <IconButton disableRipple sx={{ p: 0 }} onClick={onDeleteClick}>
        <Close />
      </IconButton>
    )}

    {isAbortIcon && (
      <IconButton disableRipple sx={{ p: 0 }} onClick={onAbortRequestClick}>
        <Close />
      </IconButton>
    )}

    {isLoadingIcon && (
      <CircularProgress
        size={iconSizesStyle[size].width}
        sx={{
          minWidth: iconSizesStyle[size].width,
          marginLeft: 'auto',
          transition: 'all 0.1s ease-in',
          color,
        }}
      />
    )}

    {isSucceededIcon && <Check />}
  </>
);

export default Icons;
