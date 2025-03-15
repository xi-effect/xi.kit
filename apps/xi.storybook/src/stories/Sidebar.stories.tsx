import type { Meta, StoryObj } from '@storybook/react';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@xipkg/sidebar';

import {
  Home,
  Calendar,
  Group,
  TelegramFilled,
  Burger,
  Close,
  Payments,
  Materials,
  FAQ,
} from '@xipkg/icons';
import { useMediaQuery } from '@xipkg/utils';

const items = [
  {
    title: 'Главная',
    url: '/active',
    icon: Home,
  },
  {
    title: 'Календарь',
    url: '*',
    icon: Calendar,
  },
  {
    title: 'Ученики',
    url: '*',
    icon: Group,
  },
  {
    title: 'Материалы',
    url: '*',
    icon: Materials,
  },
  {
    title: 'Оплаты',
    url: '*',
    icon: Payments,
  },
];

const footerMenu = [
  {
    title: 'Поддержка',
    url: '*',
    icon: TelegramFilled,
  },
  {
    title: 'FAQ',
    url: '*',
    icon: FAQ,
  },
];

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Дополнительные классы для стилизации',
    },
  },
  args: {
    className: 'w-full md:w-[350px] absolute px-4 pb-4',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div className="flex items-center gap-4 p-4">
      <button className="bg-transparent p-2" onClick={toggleSidebar}>
        {open ? <Close /> : <Burger />}
      </button>
      <img src="/logo.svg" className="h-4" />
    </div>
  );
}

const Template: Story['render'] = (args) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <SidebarProvider className="h-dvh w-full flex-col md:w-[350px]">
      <CustomTrigger />
      <div className="relative h-full">
        <Sidebar collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.url === '/active'}>
                        <a href={item.url}>
                          <item.icon className="h-6 w-6" />
                          <span className="text-base">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              {footerMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton variant="ghost" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {},
};

export const CustomStyles: Story = {
  render: Template,
  args: {
    className: 'absolute',
  },
};
