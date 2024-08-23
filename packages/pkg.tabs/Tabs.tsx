'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@xipkg/utils';
import * as React from 'react';

const Root = TabsPrimitive.Root;

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { classNameShadow?: string }
>(({ className, classNameShadow = '', children, onClick, ...props }, ref) => {
  const shadowRef = React.useRef<HTMLDivElement | null>(null);
	const shadowKey = React.useId();

  React.useEffect(() => {
    if (!shadowRef.current) return;

    const activeButton = Array.from(shadowRef.current.parentNode?.children ?? []).find(element => element.getAttribute('data-state') === 'active');

    const { offsetLeft, clientWidth } = activeButton as HTMLElement;
    shadowRef.current.setAttribute('style', `left: ${offsetLeft}px; width: ${clientWidth}px`);
  }, []);

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLButtonElement).type !== 'button') return;
    if (!shadowRef.current) return;

    shadowRef.current.setAttribute(
      'style',
      `left: ${(event.target as HTMLElement).offsetLeft}px; width: ${
        (event.target as HTMLElement).clientWidth
      }px`,
    );
    onClick?.(event);
  };

  return (
    <TabsPrimitive.List
      ref={ref}
      onClick={handleOnClick}
      className={cn('border-gray-10 relative flex items-center border-b-2', className)}
      {...props}
    >
      <div
				key={shadowKey}
        ref={shadowRef}
        id="shadow"
        className={`bg-brand-80 absolute -bottom-0.5 h-0.5 rounded-md transition-[left,width] duration-300 ${classNameShadow}`}
      ></div>
      {children}
    </TabsPrimitive.List>
  );
});
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'text-gray-80 flex grow cursor-pointer items-center justify-center whitespace-nowrap bg-transparent pb-1 text-center disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-100 data-[state=active]:hover:cursor-default',
      className,
    )}
    {...props}
  />
));
Trigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = TabsPrimitive.Content.displayName;

export { Content, List, Root, Trigger };
