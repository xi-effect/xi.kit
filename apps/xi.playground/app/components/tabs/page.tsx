'use client';

import { Tabs } from '@xipkg/tabs';

interface TabsDemoProps {}

const TabsDemo = (props: TabsDemoProps) => {
  return (
    <div className="w-[500PX]">
      <Tabs.Root onValueChange={console.log} defaultValue="Tab 1">
        <Tabs.List>
          {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el) => (
            <Tabs.Trigger value={el}>{el}</Tabs.Trigger>
          ))}
        </Tabs.List>
        {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el) => (
          <Tabs.Content value={el}>
            {<div className="grid w-full h-full bg-brand-40 place-content-center">{el}</div>}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default TabsDemo;
