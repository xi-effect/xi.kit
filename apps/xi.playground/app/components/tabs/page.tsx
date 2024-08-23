'use client';

import { Tabs } from '@xipkg/tabs';

interface TabsDemoProps { }

const TabsDemo = (props: TabsDemoProps) => {
  return (
    <div className="flex flex-col w-[500px] gap-4">
      <Tabs.Root onValueChange={console.log} defaultValue="Tab 2222222">
        <Tabs.List>
          {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
            <Tabs.Trigger key={index} value={el}>
              {el}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
          <Tabs.Content key={index} value={el}>
            {<div className="grid w-full h-full bg-brand-40 place-content-center">{el}</div>}
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <Tabs.Root onValueChange={console.log} defaultValue="Tab 1">
        <Tabs.List className="border-0 gap-8" classNameShadow='h-[4px] rounded-b-none rounded-t-[2px]'>
          {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
            <Tabs.Trigger key={index} value={el}>
              {el}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
          <Tabs.Content key={index} value={el}>
            {<div className="grid w-full h-full bg-brand-40 place-content-center">{el}</div>}
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <Tabs.Root onValueChange={console.log} defaultValue="Tab 2222222">
        <Tabs.List className="border-0 gap-8" classNameShadow='h-[4px] rounded-b-none rounded-t-[2px]'>
          {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
            <Tabs.Trigger key={index} value={el}>
              {el}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {['Tab 1', 'Tab 2222222', 'Tab 33333333333'].map((el, index) => (
          <Tabs.Content key={index} value={el}>
            {<div className="grid w-full h-full bg-brand-40 place-content-center">{el}</div>}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default TabsDemo;
