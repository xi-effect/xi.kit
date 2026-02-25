'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ModalOverlay } from './index';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

export const dialogContentVariants = cva(
  'z-50 grid bg-gray-0 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] m-auto relative',
  {
    variants: {
      variant: {
        default: 'w-[calc(100%-16px)] max-w-lg md:w-full rounded-[16px] shadow-xl',
        full: 'min-w-full min-h-dvh absolute top-0 left-0 flex flex-col',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  portalProps?: React.ComponentProps<typeof DialogPrimitive.Portal>;
}

/**
 * Оверлей и контент рендерятся в одном портале (DialogPortal), чтобы клик по оверлею
 * считался «снаружи» и вызывал onOpenChange(false). При portalProps.container оба в одном container.
 * В onPointerDownOutside/onInteractOutside не вызываем preventDefault(), чтобы по умолчанию модалка
 * закрывалась по клику снаружи; консьюмер может передать свои обработчики при необходимости.
 */
const DialogContent = ({
  variant,
  className,
  children,
  portalProps = {},
  onPointerDownOutside,
  onInteractOutside,
  ...rest
}: DialogContentProps) => (
  <DialogPortal {...portalProps}>
    <ModalOverlay overlayVariant={variant}>
      <DialogPrimitive.Content
        className={cn(dialogContentVariants({ variant, className }))}
        onPointerDownOutside={(e) => {
          onPointerDownOutside?.(e);
          // не вызываем e.preventDefault() — закрытие по оверлею сохраняется
        }}
        onInteractOutside={(e) => {
          onInteractOutside?.(e);
        }}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </ModalOverlay>
  </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export { Dialog, DialogTrigger, DialogContent };
