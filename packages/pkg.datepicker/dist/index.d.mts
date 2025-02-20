import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Calendar } from '@xipkg/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@xipkg/popover';

type DatePickerPropsT = {
    children: React.ReactNode;
    classNamePopoverTrigger?: string;
    classNamePopoverContent?: string;
    popoverProps?: React.ComponentProps<typeof Popover>;
    popoverTriggerProps?: React.ComponentProps<typeof PopoverTrigger>;
    popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
} & React.ComponentProps<typeof Calendar>;
declare const DatePicker: ({ children, classNamePopoverTrigger, classNamePopoverContent, popoverProps, popoverTriggerProps, popoverContentProps, ...calendarProps }: DatePickerPropsT) => react_jsx_runtime.JSX.Element;

export { DatePicker };
