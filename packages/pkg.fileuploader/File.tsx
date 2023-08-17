import { FC, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Icons from './Icons';
import { containerStyle, textVariants } from './styles/fileStyle';
import { FileProps } from './types';

export const File: FC<FileProps> = ({
  size = 'medium',
  isDeleteIcon = true,
  isPending,
  isSucceeded,
  isError,
  children,
  onClick,
  onDeleteClick,
  onAbortRequestClick,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const isAbortIcon = onAbortRequestClick && isPending && (isHover || isFocus);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: isFocus ? 'var(--xi-gray-5)' : 'var(--xi-gray-0)',
        transition: 'all 0.1s ease-in',
        ...containerStyle[size],
        '&:hover': {
          backgroundColor: 'var(--xi-gray-5)',

          '& .MuiTypography-root': { color: isError ? 'var(--xi-red-80)' : 'var(--xi-gray-10)' },

          '& .MuiSvgIcon-root': { color: 'var(--xi-gray-80)' },

          '& .MuiCircularProgress-root': { color: 'var(--xi-gray-80)' },
        },
        ...props,
      }}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
        setIsHover(false);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        setIsFocus(false);
      }}
    >
      <Typography
        variant={textVariants[size]}
        sx={{
          wordBreak: 'break-all',
          transition: 'all 0.1s ease-in',
          color: isError ? 'var(--xi-red-80)' : 'var(--xi-gray-90)',
          fontWeight: 400,
          cursor: onClick ? 'pointer' : 'default',
          paddingRight: '10px',
        }}
        onClick={onClick}
      >
        {children}
      </Typography>

      <Icons
        size={size}
        color={isFocus ? 'var(--xi-gray-80)' : 'var(--xi-gray-40)'}
        isDeleteIcon={isDeleteIcon && !isPending && !isSucceeded}
        isLoadingIcon={!isAbortIcon && isPending}
        isSucceededIcon={isSucceeded}
        isAbortIcon={isAbortIcon}
        onDeleteClick={onDeleteClick}
        onAbortRequestClick={onAbortRequestClick}
      />
    </Stack>
  );
};
