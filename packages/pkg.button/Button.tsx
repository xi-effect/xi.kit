import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';
import * as React from 'react';

const spinner =
  'before:content-[""] before:animate-spin before:rounded-full before:border-gray-60 before:border-2 before:border-t-transparent disabled:opacity-100';

export const buttonVariants = cva(
  `
    inline-flex border-box justify-center items-center whitespace-nowrap font-medium ring-offset-background transition-colors duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:bg-gray-5 disabled:text-gray-30 
    dark:disabled:bg-[#F7F7F7] dark:disabled:text-[#B4B5BC]
    data-[loading=true]:pointer-events-none 
    data-[loading=true]:cursor-not-allowed
    data-[loading=true]:hover:bg-inherit
    data-[loading=true]:active:bg-inherit  
    data-[loading=true]:focus:bg-inherit
    data-[loading=true]:focus-visible:ring-0
  `,
  {
    variants: {
      variant: {
        primary: `
          text-brand-0 bg-brand-80
          hover:bg-brand-60  
          active:bg-brand-100  
          focus:bg-brand-100   
          dark:text-[#3140AA] dark:bg-[#F3F4FC] 
          dark:hover:bg-[#F3F4FC] dark:hover:border-[2px] dark:hover:border-[#7580D7]
          dark:active:text-[#F3F4FC] dark:active:bg-[#9CA4E2] dark:active:border-0
          dark:focus:text-[#F3F4FC] dark:focus:bg-[#9CA4E2] dark:focus:border-0
        `,
        secondary: `
          text-brand-100 bg-gray-10  
          hover:text-brand-0 hover:bg-brand-60 
          active:text-brand-0 active:bg-brand-100 
          focus:text-brand-0 focus:bg-brand-100
          dark:text-[#0F0F11] dark:bg-[#F0F1FF] 
          dark:hover:bg-[#F0F1FF] dark:hover:border-[2px] dark:hover:border-[#B4BDFF] 
          dark:active:text-white dark:active:bg-[#697BFF] dark:active:border-[2px] dark:active:border-[#445AFF]   
          dark:focus:text-white dark:focus:bg-[#697BFF] dark:focus:border-[2px] dark:focus:border-[#445AFF]  
          dark:disabled:bg-white dark:disabled:border-[2px] dark:disabled:border-[#B4B5BC]
        `,
        ghost: `
          text-gray-100 bg-gray-0
          hover:bg-gray-5 
          active:bg-gray-5 
          focus:bg-gray-5 
          disabled:bg-gray-0 
          dark:text-white dark:bg-white/5 dark:border-[1px] dark:border-white/20 
          dark:hover:bg-white/5 dark:hover:border-white/30 
          dark:active:bg-white/12 dark:active:border-white/30
          dark:focus:bg-white/12 dark:focus:border-white/30 
          dark:disabled:bg-white/5 dark:disabled:border-0
        `,
        error: `
          text-red-0 bg-red-80 
          hover:bg-red-100 
          active:bg-red-100 
          focus:bg-red-100
          dark:text-[#FAEBEB] dark:bg-[#C23939] dark:hover:bg-[#942424] dark:active:bg-[#942424] dark:focus:bg-[#942424]
        `,
        success: `
          text-green-0 bg-green-80 
          hover:bg-green-100 
          active:bg-green-100 
          focus:bg-green-100
          dark:text-[#ECF8EC] dark:bg-[#2E842E] dark:hover:bg-[#287128] dark:active:bg-[#287128] dark:focus:bg-[#287128]
        `,
      },
      size: {
        l: 'h-14 text-[20px] px-8 rounded-2xl',
        m: 'h-12 text-[16px] px-6 rounded-xl',
        s: 'h-8 text-[14px] px-4 rounded-lg',
      },
      loading: {
        true: spinner,
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'error', 'success', 'secondary'],
        loading: true,
        class: 'bg-gray-5 dark:bg-[#F7F7F7]',
      },
      {
        variant: 'secondary',
        loading: true,
        class: 'dark:bg-white dark:border-[2px] dark:border-[#8F9CFF]',
      },
      {
        variant: 'ghost',
        loading: true,
        class: 'bg-gray-0 dark:bg-white/5 dark:border-0',
      },
      {
        loading: true,
        size: 'l',
        class: 'before:w-8 before:h-8',
      },
      {
        loading: true,
        size: 'm',
        class: 'before:w-6 before:h-6',
      },
      {
        loading: true,
        size: 's',
        class: 'before:w-4 before:h-4',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'm',
      loading: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        data-loading={loading}
        {...props}
      >
        {loading ? <span className="sr-only">Загрузка...</span> : children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
