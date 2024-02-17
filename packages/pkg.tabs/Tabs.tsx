'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@xipkg/utils';

type TriggerSize = {
  left: number;
  width: number;
};

const Root = ({
  onValueChange,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const shadowRef = React.useRef<HTMLElement | null | undefined>(null);
  const sizes = React.useRef<Record<string, TriggerSize>>({});

  React.useEffect(() => {
    const list = ref.current?.querySelector('[role=tablist]');
    shadowRef.current = ref.current?.querySelector('#shadow');
    if (!list || !shadowRef.current) return;
    sizes.current = [...list.children].slice(1).reduce<Record<string, TriggerSize>>((acc, el) => {
      const value = el.getAttribute('id')?.split('-').pop();
      if (value) {
        acc[value] = {
          left: (el as HTMLElement).offsetLeft,
          width: (el as HTMLElement).clientWidth,
        };
      }
      return acc;
    }, {});
    handleValueChange(list.children[1].getAttribute('id')?.split('-').pop() || '');
  }, [ref.current]);

  const handleValueChange = (value: string) => {
    const triggerSizes = sizes.current[value];
    if (!triggerSizes || !shadowRef.current) return;
    shadowRef.current.setAttribute(
      'style',
      `left: ${triggerSizes.left}px; width: ${triggerSizes.width}px; display: block;`,
    );
    onValueChange?.(value);
  };

  return <TabsPrimitive.Root onValueChange={handleValueChange} ref={ref} {...props} />;
};

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  React.useEffect(() => {}, []);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn('flex relative border-b-2 border-gray-10 items-center', className)}
      {...props}
    >
      <div
        id="shadow"
        className="absolute duration-300 rounded-md hidden transition-[left,width] h-0.5 -bottom-0.5 bg-brand-80"
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
