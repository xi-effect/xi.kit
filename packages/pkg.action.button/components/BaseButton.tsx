import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { Close, Plus } from '@xipkg/icons';
import { ComponentPropsWithoutRef } from 'react';

type BaseButtonPropsT = {
  isOpen?: boolean;
  onClick?: () => void;
} & ComponentPropsWithoutRef<typeof Button>;

export const BaseButton = ({ isOpen, onClick, className, ...rest }: BaseButtonPropsT) => (
  <Button
    {...rest}
    size="m"
    onClick={onClick}
    className={cn(`fixed right-4 bottom-4 rounded-xl px-3`, className)}
  >
    {isOpen ? <Close className="fill-gray-0" /> : <Plus className="fill-gray-0" />}
  </Button>
);
