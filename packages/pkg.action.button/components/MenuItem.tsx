import { DropdownMenuItem } from '@xipkg/dropdown';

type MenuItemPropsT = React.ComponentProps<typeof DropdownMenuItem>;

export const MenuItem = (props: MenuItemPropsT) => (
  <DropdownMenuItem className="rounded-lg" {...props} />
);

MenuItem.displayName = DropdownMenuItem.displayName;
