'use client';

import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import React from 'react';

export const checkboxVariants = cva(
  'inline-flex items-center w-fit justify-center ring-offset-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  disabled:bg-gray-10 disabled:text-gray-30',
  {
    variants: {
      variant: {
        default:
          'text-gray-0 bg-brand-80 hover:bg-brand-100 active:bg-brand-100 focus:bg-brand-100 border border-gray-30',
        warning:
          'text-gray-0 bg-orange-80 hover:bg-orange-100 active:bg-orange-80 focus:bg-orange-80 border border-orange-80',
        error:
          'bg-red-80 text-gray-0 hover:bg-red-100 active:bg-red-100 focus:bg-red-100 border border-red-80',
        disabled: 'bg-gray-30 text-gray-80',
      },
      size: {
        l: 'h-6 w-6 rounded-md p-[2px]',
        m: 'h-5 w-5 rounded-md p-[2px]',
        s: 'h-4 w-4 rounded p-[2px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'l' },
  },
);

const IconSize = { l: 16, m: 13, s: 10 };
const FontSize = { l: 16, m: 14, s: 12 };
const GapSize = { l: '2', m: '1.5', s: '1' };
const BoxRadius = { l: 8, m: 8, s: 6 };

const variantColors = {
  default: 'brand-80',
  warning: 'orange-80',
  error: 'red-80',
  disabled: '',
};
export interface CheckboxProps
  extends React.ButtonHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  asChild?: boolean;
  checked: boolean;
  label?: string;
  isBox?: boolean;
  onCheckedChange?: () => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, variant, size, checked, disabled, label, isBox, onCheckedChange, ...props },
    ref,
  ) => {
    if (disabled) variant = 'disabled';

    const componentsStyles = {
      checkbox: {
        backgroundColor: !checked && variant !== 'disabled' ? 'transparent' : '',
        border: !checked && variant !== 'disabled' ? (variant === 'default' ? '1px' : '') : '1px',
      },
      label: {
        fontSize: (size ? FontSize[size] : FontSize['l']) + 'px',
        color: disabled ? 'var(--xi-gray-30)' : '',
      },
      box: {
        borderRadius: (size ? BoxRadius[size] : BoxRadius['l']) + 'px',
        background: disabled ? 'var(--xi-gray-10)' : '',
      },
    };

    return (
      <div
        className={`flex items-center gap-${size ? GapSize[size] : GapSize['l']} ${
          isBox &&
          `bg-gray-5 p-1 pr-2 hover:bg-gray-10 border border-transparent active:border-${
            variant ? variantColors[variant] : variantColors['default']
          }`
        }`}
        {...props}
        style={isBox ? componentsStyles.box : {}}
      >
        <button
          onClick={onCheckedChange}
          ref={ref}
          disabled={disabled}
          className={cn(checkboxVariants({ variant, size, className }))}
          style={componentsStyles.checkbox}
        >
          {checked && <Check size={size ? IconSize[size] : IconSize['l']} />}
        </button>
        {label && (
          <label className={disabled ? 'text-gray-30' : ''} style={componentsStyles.label}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
