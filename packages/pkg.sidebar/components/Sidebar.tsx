import React from 'react';
import { useSidebar } from '../context/SidebarContext';

import { cn } from '@xipkg/utils';

type SidebarPropsT = React.ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
  /**
   * Независимая цветовая схема сайдбара.
   * Нужна для тёмного chrome при светлой странице: все semantic-токены
   * и вложенные компоненты (@xipkg/button и т.д.) резолвятся в dark.
   */
  theme?: 'light' | 'dark';
  style?: React.CSSProperties;
};

export const Sidebar = ({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  theme,
  className,
  children,
  style,
  ref,
  ...props
}: SidebarPropsT) => {
  const { state } = useSidebar();

  const surfaceClassName = cn(
    'bg-background-surface text-text-primary flex h-full w-full flex-col',
    variant === 'floating' && 'rounded-lg shadow',
  );

  if (collapsible === 'none') {
    return (
      <div
        className={cn('bg-background-surface text-text-primary flex h-full w-(--sidebar-width) flex-col', className)}
        data-theme={theme}
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        className={cn(
          'fixed inset-y-0 z-10 flex h-full w-(--sidebar-width) px-4 pb-4 transition-[left,right,width] duration-200 ease-linear',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
          className,
        )}
        style={style}
        {...props}
      >
        <div data-sidebar="sidebar" data-theme={theme} className={surfaceClassName}>
          {children}
        </div>
      </div>
    </div>
  );
};
