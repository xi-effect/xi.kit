'use client';

import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode, useCallback, useId, useState } from 'react';

export interface SwitcherAnimateTab {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface SwitcherAnimateProps {
  tabs: SwitcherAnimateTab[];
  activeTab?: string;
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'line';
  layoutId?: string;
  orientation?: 'horizontal' | 'vertical';
  /** Класс корневого контейнера (tablist) */
  className?: string;
  /** Класс кнопки вкладки (применяется к каждой вкладке) */
  tabClassName?: string;
  /** Класс анимированного индикатора */
  indicatorClassName?: string;
}

const SPRING = {
  type: 'spring' as const,
  duration: 0.25,
  bounce: 0.05,
};

export function SwitcherAnimate({
  tabs,
  activeTab: controlledActiveTab,
  defaultTab,
  onChange,
  variant = 'default',
  layoutId: customLayoutId,
  orientation = 'horizontal',
  className,
  tabClassName,
  indicatorClassName,
}: SwitcherAnimateProps) {
  const shouldReduceMotion = useReducedMotion();
  const generatedId = useId();
  const layoutId = customLayoutId ?? `switcher-animate-${generatedId}`;

  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab ?? tabs[0]?.id ?? '',
  );

  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const handleTabChange = useCallback(
    (tabId: string) => {
      if (!isControlled) {
        setInternalActiveTab(tabId);
      }
      onChange?.(tabId);
    },
    [isControlled, onChange],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, currentIndex: number) => {
      let newIndex = currentIndex;

      if (orientation === 'horizontal') {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          newIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          event.preventDefault();
          newIndex = 0;
        } else if (event.key === 'End') {
          event.preventDefault();
          newIndex = tabs.length - 1;
        } else {
          return;
        }
      } else {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          newIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          event.preventDefault();
          newIndex = 0;
        } else if (event.key === 'End') {
          event.preventDefault();
          newIndex = tabs.length - 1;
        } else {
          return;
        }
      }

      const newTab = tabs[newIndex];
      if (newTab) {
        handleTabChange(newTab.id);
        const tabElement = document.getElementById(
          `${layoutId}-tab-${newTab.id}`,
        );
        tabElement?.focus();
      }
    },
    [tabs, handleTabChange, layoutId, orientation],
  );

  const baseContainerStyles = cn(
    'group/switcher-animate relative inline-flex w-fit items-center justify-center',
    orientation === 'horizontal' && 'h-10 flex-row gap-0',
    orientation === 'vertical' && 'h-fit flex-col gap-1',
    variant === 'default' &&
      'rounded-xl bg-gray-0 p-[3px] data-slot:switcher-animate',
    variant === 'line' && 'gap-1 rounded-none bg-transparent',
  );

  const getTabStyles = (isActive: boolean) =>
    cn(
      'relative z-10 inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border-none border-transparent px-4 py-1 text-[16px] font-medium whitespace-nowrap transition-colors',
      'bg-transparent text-gray-90',
      'hover:text-gray-80 data-[state=active]:text-gray-0 data-[state=active]:hover:text-gray-10',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-80/50 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      orientation === 'vertical' && 'w-full justify-start',
      variant === 'default' && isActive && 'text-gray-0',
      variant === 'line' &&
        (isActive ? 'bg-transparent text-gray-100' : 'text-gray-80'),
    );

  const getIndicatorStyles = () =>
    cn(
      'absolute',
      variant === 'default' &&
        'inset-0 rounded-[10px] border border-transparent bg-brand-80',
      variant === 'line' &&
        orientation === 'horizontal' &&
        'right-0 left-0 -bottom-[5px] h-0.5 bg-gray-100',
      variant === 'line' &&
        orientation === 'vertical' &&
        'inset-y-0 -right-1 top-0 bottom-0 w-0.5 bg-gray-100',
    );

  return (
    <div
      aria-label="Tabs"
      className={cn(baseContainerStyles, className)}
      data-orientation={orientation}
      data-variant={variant}
      role="tablist"
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            aria-selected={isActive}
            data-state={isActive ? 'active' : 'inactive'}
            className={cn(getTabStyles(isActive), tabClassName)}
            id={`${layoutId}-tab-${tab.id}`}
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            type="button"
          >
            {isActive && (
              <motion.span
                className={cn(getIndicatorStyles(), indicatorClassName)}
                layout
                layoutId={layoutId}
                style={{ originY: '0px' }}
                transition={
                  shouldReduceMotion ? { duration: 0 } : SPRING
                }
              />
            )}
            {tab.icon && <span className="relative z-10">{tab.icon}</span>}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
