import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@xipkg/utils';
import * as React from 'react';

const Root = TabsPrimitive.Root;

interface ListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  classNameShadow?: string;
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.List>>;
}

const List = ({ className, classNameShadow = '', children, onClick, ...props }: ListProps) => {
  const shadowRef = React.useRef<HTMLDivElement | null>(null);
  const shadowKey = React.useId();

  React.useEffect(() => {
    if (!shadowRef.current) return;

    const activeButton = Array.from(shadowRef.current.parentNode?.children ?? []).find(
      (element) => element.getAttribute('data-state') === 'active',
    );

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
};

interface TriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Trigger>>;
}

const Trigger = ({ className, ...props }: TriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      'text-gray-80 flex grow cursor-pointer items-center justify-center bg-transparent pb-1 text-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-100 data-[state=active]:hover:cursor-default',
      className,
    )}
    {...props}
  />
);

interface ContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Content>>;
}

const Content = ({ className, ...props }: ContentProps) => (
  <TabsPrimitive.Content
    className={cn(
      'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
      className,
    )}
    {...props}
  />
);

export { Content, List, Root, Trigger };
