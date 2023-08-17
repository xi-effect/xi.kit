import { Button, Menu, ClickAwayListener } from '@mui/material';
import React, { useState, FC } from 'react';
import { v4 } from 'uuid';
import { dropdownSizes, menuStyles } from './styles';
import { DropdownProps } from './types';

export const Dropdown: FC<DropdownProps> = ({
  Element,
  size = 'l',
  menuProps,
  menuSx,
  buttonSx,
  children,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpened = Boolean(anchorEl);

  const onOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpened) setAnchorEl(null);
    if (!isOpened) setAnchorEl(e.currentTarget);
  };
  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const dropdownId = v4();

  return (
    <>
      <ClickAwayListener onClickAway={onCloseMenu}>
        <Button
          aria-controls={dropdownId}
          onClick={onOpenMenu}
          variant="text"
          disableRipple
          sx={{
            ...dropdownSizes[size],
            color: 'var(--xi-gray-80)',
            textTransform: 'none',
            transition: '0.3s',
            disaply: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '5px',
            border: '1px solid',
            borderColor: 'var(--xi-gray-0)',
            '&:hover': { color: 'var(--xi-gray-10)0', bgcolor: 'unset' },
            '&:focus-visible': {
              bgcolor: 'unset',
              border: '1px solid',
              borderColor: 'var(--xi-gray-10)0',
            },
            ...buttonSx,
          }}
          {...props}
        >
          <Element isOpened={isOpened} size={size} />
        </Button>
      </ClickAwayListener>
      <Menu
        id={dropdownId}
        open={isOpened}
        onClick={onCloseMenu}
        anchorEl={anchorEl}
        PopoverClasses={{
          root: 'Dropdown-root',
        }}
        sx={{
          ...menuStyles,
          ...menuSx,
        }}
        {...menuProps}
      >
        {children}
      </Menu>
    </>
  );
};
