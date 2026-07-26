import { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  type SelectTriggerProps,
} from '@xipkg/select';
import { Folder } from '@xipkg/icons';
import { Label } from '@xipkg/label';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Отключает селект',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Select>;

const defaultTriggerProps: SelectTriggerProps = {
  size: 'm',
  error: false,
  warning: false,
};

const accessOptions = [
  { value: 'shared', label: 'Совместная работа' },
  { value: 'tutor', label: 'Только репетитор' },
  { value: 'draft', label: 'Черновик' },
] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="flex w-56 flex-col gap-2">
      <Label className="text-text-primary text-sm leading-none">Тип доступа к материалу</Label>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Выберите тип доступа" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {accessOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="w-56">
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Select a fruit or a vegetable" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="w-56">
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps} before={<Folder className="fill-icon-primary size-4" />}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Small: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="w-56">
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps} size="s">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const SmallSelectWithIcon: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="w-56">
      <Select {...args}>
        <SelectTrigger
          {...defaultTriggerProps}
          size="s"
          before={<Folder className="h-4 w-[19px]" />}
        >
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Error: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="flex w-56 flex-col gap-2">
      <Label className="text-text-primary text-sm leading-none">Тип доступа к материалу</Label>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps} error={true}>
          <SelectValue placeholder="Выберите тип доступа" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {accessOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span className="text-status-error-text text-xs">Выберите тип доступа</span>
    </div>
  ),
};

export const Warning: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="w-56">
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps} warning={true}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Filled: Story = {
  args: {
    disabled: false,
    defaultValue: 'shared',
  },
  render: (args) => (
    <div className="flex w-56 flex-col gap-2">
      <Label className="text-text-primary text-sm leading-none">Тип доступа</Label>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Выберите тип доступа" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {accessOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Required: Story = {
  args: {
    disabled: false,
    defaultValue: 'shared',
  },
  render: (args) => (
    <div className="flex w-80 flex-col gap-2">
      <div className="inline-flex items-start gap-0.5">
        <Label className="text-text-primary text-sm leading-none">Тип доступа к материалу</Label>
        <span className="text-text-primary text-sm">*</span>
      </div>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Выберите тип доступа" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {accessOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span className="text-text-muted text-xs">Вспомогательный текст</span>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'shared',
  },
  render: (args) => (
    <div className="flex w-56 flex-col gap-2">
      <Label className="text-text-disabled text-sm leading-none">Тип доступа</Label>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Выберите тип доступа" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {accessOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const LongValue: Story = {
  args: {
    disabled: false,
    defaultValue: 'long',
  },
  render: (args) => (
    <div className="flex w-56 flex-col gap-2">
      <Label className="text-text-primary text-sm leading-none">Тип доступа</Label>
      <Select {...args}>
        <SelectTrigger {...defaultTriggerProps}>
          <SelectValue placeholder="Выберите" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="long">
              Длинное значение которое не помещается полностью в поле
            </SelectItem>
            <SelectItem value="shared">Совместная работа</SelectItem>
            <SelectItem value="tutor">Только репетитор</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
