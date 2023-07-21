import { ReactNode } from 'react';

export type BadgeProps = {
  children: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
};

export const Badge = ({ children, iconBefore, iconAfter }: BadgeProps) => {
  return (
    <div>
      {iconBefore}
      <span>{children}</span>
      {iconAfter}
    </div>
  );
};
