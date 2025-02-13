import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

declare const Root: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const List: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    classNameShadow?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Tabs_Content: typeof Content;
declare const Tabs_List: typeof List;
declare const Tabs_Root: typeof Root;
declare const Tabs_Trigger: typeof Trigger;
declare namespace Tabs {
  export { Tabs_Content as Content, Tabs_List as List, Tabs_Root as Root, Tabs_Trigger as Trigger };
}

export { Tabs };
