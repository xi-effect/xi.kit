import { Button, ButtonProps } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { Close, Plus } from '@xipkg/icons';
import { ComponentPropsWithoutRef } from 'react';

type BaseButtonPropsT = {
  isOpen?: boolean;
  buttonProps?: ButtonProps;
  onClick?: () => void;
} & ComponentPropsWithoutRef<'button'>;

export const BaseButton = ({ isOpen, buttonProps, onClick, ...rest }: BaseButtonPropsT) => (
  <Button
    {...rest}
    {...buttonProps}
    size="m"
    onClick={onClick}
    className={cn(`fixed right-4 bottom-4 rounded-xl px-3`, buttonProps?.className)}
  >
    {isOpen ? <Close className="fill-gray-0" /> : <Plus className="fill-gray-0" />}
  </Button>
);
