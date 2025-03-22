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
  type SelectTriggerProps
} from '@xipkg/select';
import { Folder } from '@xipkg/icons';

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

const defaultTriggerProps:SelectTriggerProps = {
  size: "m",
  error: false,
  warning: false,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger {...defaultTriggerProps}>
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
  ),
};

export const WithGroups: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
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
  ),
};

export const WithIcon: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger 
        {...{...defaultTriggerProps, before: <Folder /> }}
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
  ),
};

export const Small: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger {...{...defaultTriggerProps, size: "s"}}>
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
  ),
};

export const SmallSelectWithIcon: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger 
        {...{
          ...defaultTriggerProps, 
          size: 's', 
          before: <Folder className='w-[19px] h-[16px]' /> 
        }}
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
  ),
};

export const Error: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger {...{...defaultTriggerProps, error: true}}>
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
  ),
};

export const Warning: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger {...{...defaultTriggerProps, warning: true}}>
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
  ),
};
