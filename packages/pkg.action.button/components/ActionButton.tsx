import { ReactNode } from 'react';
import { ButtonProps } from '@xipkg/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@xipkg/dropdown';
import { useState } from 'react';

import { BaseButton } from './BaseButton';

type ActionButtonPropsT = {
  buttonProps?: ButtonProps;
  children?: (components: { DropdownMenuItem: typeof DropdownMenuItem }) => ReactNode;
  onClick?: () => void;
};

export const ActionButton = ({ children, buttonProps, onClick }: ActionButtonPropsT) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSingle = !children;

  if (isSingle) {
    return <BaseButton buttonProps={buttonProps} onClick={onClick} />;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <BaseButton isOpen={isOpen} buttonProps={buttonProps} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" sideOffset={8} align="end" className="w-[250px]">
        {children({ DropdownMenuItem })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
