import { ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@xipkg/dropdown';
import { useState } from 'react';

import { BaseButton } from './BaseButton';
import { MenuItem } from './MenuItem';

type ActionButtonPropsT = {
  classname?: string;
  children?: (components: { MenuItem: typeof DropdownMenuItem }) => ReactNode;
  onClick?: () => void;
  dropdownMenuProps?: React.ComponentProps<typeof DropdownMenu>;
  dropdownContentProps?: React.ComponentProps<typeof DropdownMenuContent>;
  dropdownTriggerProps?: React.ComponentProps<typeof DropdownMenuTrigger>;
};

export const ActionButton = ({
  children,
  classname,
  onClick,
  dropdownContentProps,
  dropdownMenuProps,
  dropdownTriggerProps,
}: ActionButtonPropsT) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSingle = !children;

  if (isSingle) {
    return <BaseButton className={classname} onClick={onClick} />;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} {...dropdownMenuProps}>
      <DropdownMenuTrigger asChild {...dropdownTriggerProps}>
        <BaseButton isOpen={isOpen} className={classname} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        sideOffset={8}
        align="end"
        className="w-[250px] rounded-xl"
        {...dropdownContentProps}
      >
        {children({ MenuItem })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
