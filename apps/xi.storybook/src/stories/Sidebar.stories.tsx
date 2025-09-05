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
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
} from '@xipkg/sidebar';

import { Home, Calendar, Group, TelegramFilled, Payments, Materials, FAQ } from '@xipkg/icons';
import { useMediaQuery } from '@xipkg/utils';

const items = [
  {
    title: 'Главная',
    url: '#',
    icon: Home,
  },
  {
    title: 'Календарь',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Ученики',
    url: '#',
    icon: Group,
  },
  {
    title: 'Материалы',
    url: '#',
    icon: Materials,
  },
  {
    title: 'Оплаты',
    url: '#',
    icon: Payments,
  },
];

const footerMenu = [
  {
    title: 'Поддержка',
    url: '#',
    icon: TelegramFilled,
  },
  {
    title: 'FAQ',
    url: '#',
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
    className: 'w-full md:w-[350px] absolute',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

function CustomTrigger() {
  return (
    <div className="flex items-center gap-4 pt-4">
      <SidebarTrigger />
      <img src="/logo.svg" className="h-4" />
    </div>
  );
}

const ContentArea = () => {
  return (
    <div className="flex min-h-0 flex-1 overflow-auto bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-2xl font-bold">Область контента</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-medium">Раздел A</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Это пример области контента, которая находится рядом с сайдбаром. Здесь может быть
              размещена основная информация вашего приложения, например, статистика, графики или
              таблицы данных.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-medium">Раздел Б</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Используйте сайдбар для быстрой навигации между различными разделами приложения.
              Дизайн может быть адаптирован к вашим потребностям.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm md:col-span-2 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-medium">Раздел В</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Сайдбар может быть скрыт на мобильных устройствах для экономии места и показан при
              необходимости. В режиме для настольных компьютеров он может быть свернут до значков
              для более компактного вида.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DefaultTemplate = (args: React.ComponentProps<typeof Sidebar>) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <SidebarProvider>
      <Sidebar collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
        <SidebarContent>
          <CustomTrigger />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.title === 'Главная'}>
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
      <SidebarInset className="bg-gray-50 dark:bg-gray-900">
        <ContentArea />
      </SidebarInset>
    </SidebarProvider>
  );
};

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {},
};

const HeaderTemplate = (args: React.ComponentProps<typeof Sidebar>) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="flex w-full items-center gap-4 border-b p-4">
        <CustomTrigger />
        <div className="flex-1">Верхняя панель</div>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="w-full flex-shrink-0 md:w-[350px]">
          <SidebarProvider className="h-full">
            <div className="relative h-full">
              <Sidebar variant="inset" collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={item.title === 'Главная'}>
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
              <SidebarInset className="bg-gray-50 dark:bg-gray-900">
                <ContentArea />
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export const WithHeader: Story = {
  render: (args) => <HeaderTemplate {...args} />,
  args: {},
};

const InsetTemplate = (args: React.ComponentProps<typeof Sidebar>) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <div className="flex h-dvh w-full">
      <div className="w-full flex-shrink-0 md:w-[350px]">
        <SidebarProvider className="h-full">
          <CustomTrigger />
          <div className="relative h-full">
            <Sidebar variant="inset" collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={item.title === 'Главная'}>
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
            <SidebarInset className="bg-gray-50 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto max-w-4xl">
                  <h1 className="mb-6 text-2xl font-bold">Вложенный контент</h1>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Раздел A</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        При использовании варианта "inset", контент отображается внутри сайдбара как
                        вложенная панель. Это создает эффект "приложения в приложении".
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Раздел Б</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        SidebarInset добавляет скругленные углы и тень для создания эффекта
                        наложения. Это особенно полезно для дизайнов с многоуровневой навигацией.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export const WithInset: Story = {
  render: (args) => <InsetTemplate {...args} />,
  args: {},
};

const CompactInsetTemplate = (args: React.ComponentProps<typeof Sidebar>) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <div className="flex h-dvh w-full">
      <div className="w-full flex-shrink-0 md:w-[350px]">
        <SidebarProvider className="h-full" defaultOpen={false}>
          <div className="relative h-full">
            <Sidebar variant="inset" collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={item.title === 'Календарь'}>
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
            <SidebarInset className="bg-gray-50 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto max-w-4xl">
                  <h1 className="mb-6 text-2xl font-bold">Компактный режим + Inset</h1>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Особенности компактного режима</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        В этом примере сайдбар запускается в компактном режиме (collapsed) вместе с
                        SidebarInset. Обратите внимание, как инсет адаптируется к изменению размера
                        сайдбара.
                      </p>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Попробуйте нажать на иконку меню, чтобы раскрыть сайдбар и увидеть, как
                        SidebarInset анимированно адаптируется к новому размеру.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Полезные сценарии</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Этот вариант особенно полезен для интерфейсов с ограниченным пространством,
                        где требуется максимальная площадь для основного контента, но при этом
                        сохраняется удобный доступ к навигации.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export const CompactWithInset: Story = {
  render: (args) => <CompactInsetTemplate {...args} />,
  args: {},
};

const HeaderInsetTemplate = (args: React.ComponentProps<typeof Sidebar>) => {
  const isMobile = useMediaQuery('(max-width: 960px)');

  return (
    <div className="flex h-dvh w-full">
      <div className="w-full flex-shrink-0 md:w-[350px]">
        <SidebarProvider className="h-full">
          <div className="relative h-full">
            <Sidebar variant="inset" collapsible={isMobile ? 'offcanvas' : 'icon'} {...args}>
              <SidebarHeader className="flex items-center gap-4 p-4">
                <img src="/logo.svg" className="h-5" />
                <span className="text-lg font-medium">XI.Effect</span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={item.title === 'Ученики'}>
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
            <SidebarInset className="bg-gray-50 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto max-w-4xl">
                  <h1 className="mb-6 text-2xl font-bold">Sidebar с заголовком и Inset</h1>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Комбинация с заголовком</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Этот пример демонстрирует использование SidebarHeader вместе с SidebarInset.
                        Заголовок содержит логотип и название приложения, что делает интерфейс более
                        узнаваемым.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                      <h2 className="mb-4 text-lg font-medium">Организация элементов</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Использование SidebarHeader, SidebarContent и SidebarFooter позволяет
                        логически разделить элементы управления: идентификация приложения, основная
                        навигация и служебные функции.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export const HeaderWithInset: Story = {
  render: (args) => <HeaderInsetTemplate {...args} />,
  args: {},
};
