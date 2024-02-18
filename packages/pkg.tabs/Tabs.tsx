'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@xipkg/utils';

const Root = ({
  onValueChange,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const shadowRef = React.useRef<HTMLElement | null | undefined>(null);
  const initButtonRef = React.useRef<HTMLElement | null | undefined>(null);

  React.useEffect(() => {
    shadowRef.current = ref.current?.querySelector('#shadow');
    initButtonRef.current = ref.current?.querySelector("button[data-state='active'][role='tab']");

    if (!shadowRef.current || !initButtonRef.current) return;
    shadowRef.current.setAttribute(
      'style',
      `left: ${initButtonRef.current.offsetLeft}px; width: ${initButtonRef.current.clientWidth}px`,
    );
  }, []);

  const handleOnClick = (event: any) => {
    if (!shadowRef.current) return;

    shadowRef.current.setAttribute(
      'style',
      `left: ${event.target.offsetLeft}px; width: ${event.target.clientWidth}px`,
    );

    onClick?.(event);
  };

  return <TabsPrimitive.Root onClick={handleOnClick} ref={ref} {...props} />;
};

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn('flex relative border-b-2 border-gray-10 items-center', className)}
      {...props}
    >
      <div
        id="shadow"
        className="absolute duration-300 rounded-md transition-[left,width] h-0.5 -bottom-0.5 bg-brand-80"
      ></div>
      {children}
    </TabsPrimitive.List>
  );
});
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { index: number }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex text-center bg-transparent data-[state=active]:hover:cursor-default grow items-center justify-center whitespace-nowrap pb-1 disabled:pointer-events-none disabled:opacity-50 text-gray-80 data-[state=active]:text-gray-100',
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
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = TabsPrimitive.Content.displayName;

export { Root, List, Trigger, Content };
