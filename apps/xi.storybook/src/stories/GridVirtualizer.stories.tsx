import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GridVirtualizer } from '@xipkg/gridvirtualizer';

type TMaterialItem = {
  id: number;
  title: string;
  color: string;
};

const generateItems = (count: number): TMaterialItem[] => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#DDA0DD',
    '#FF8C94',
    '#88D8A8',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    color: colors[index % colors.length],
  }));
};

const items = generateItems(100);

const meta = {
  title: 'Components/GridVirtualizer',
  component: GridVirtualizer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Массив данных',
    },
    defaultRowHeight: {
      control: 'number',
      description: 'Высота строки',
      defaultValue: 100,
    },
    minItemWidth: {
      control: 'number',
      description: 'Ширина компонента, который рендерится',
      defaultValue: 0,
    },
    gap: {
      control: 'number',
      defaultValue: 0,
    },
    maxColumns: {
      control: 'number',
      description: 'Количество колонок в сетке',
      defaultValue: 1,
    },
    isSingleColumn: {
      control: 'boolean',
      description: 'Grid-сетка в одну колонку для мобильных версий',
      defaultValue: false,
    },
    overscan: {
      control: 'number',
      description:
        'Количество дополнительных строк, которые виртуализатор рендерит за пределами видимой области (сверху и снизу)',
      defaultValue: 5,
    },
  },
} satisfies Meta<typeof GridVirtualizer>;

export default meta;
type Story = StoryObj<typeof meta>;

type TCard = {
  label: string;
};

const Card = ({ label }: TCard) => (
  <div className="hover:border-brand-80 border-gray-20 bg-gray-0 w-full cursor-pointer rounded-md border p-2 transition-all duration-200">
    <span>{label}</span>
  </div>
);

const DefaultGridVirtualizer = (args: React.ComponentProps<typeof GridVirtualizer>) => {
  console.log('args', args);
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={parentRef}
      className="bg-gray-10 h-[200px] w-[400px] flex-1 overflow-auto"
      style={{
        scrollbarWidth: 'none' /* Firefox */,
        msOverflowStyle: 'none' /* IE/Edge */,
      }}
    >
      <GridVirtualizer
        {...args}
        parentRef={parentRef}
        items={items}
        renderItem={(item) => <Card key={item.id} label={item.title} />}
      />
    </div>
  );
};

export const Default: Story = {
  render: DefaultGridVirtualizer,
  args: {
    defaultRowHeight: 30,
    minItemWidth: 100,
    gap: 0,
    maxColumns: 4,
    isSingleColumn: false,
    overscan: 5,
  } as React.ComponentProps<typeof GridVirtualizer>,
};

export const SingleColumn: Story = {
  render: DefaultGridVirtualizer,
  args: {
    defaultRowHeight: 30,
    minItemWidth: 100,
    gap: 0,
    maxColumns: 4,
    isSingleColumn: true,
    overscan: 5,
  } as React.ComponentProps<typeof GridVirtualizer>,
};

export const TwoColumnsGap: Story = {
  render: DefaultGridVirtualizer,
  args: {
    defaultRowHeight: 30,
    minItemWidth: 100,
    gap: 5,
    maxColumns: 3,
    isSingleColumn: false,
    overscan: 5,
  } as React.ComponentProps<typeof GridVirtualizer>,
};
