'use client';

import * as React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  useDelayGroup,
  useDelayGroupContext,
  useMergeRefs,
  useTransitionStyles,
  arrow,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';
import { useRef } from 'react';

type TooltipOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function useTooltip({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions): any {
  const arrowRef = useRef(null);

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const { delay } = useDelayGroupContext();

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const { context } = data;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    delay,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, arrowRef, interactions, data],
  );
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipState = (): any => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

export function Tooltip({ children, ...options }: { children: React.ReactNode } & TooltipOptions) {
  const tooltip = useTooltip(options);
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

interface TooltipTriggerProps extends React.HTMLProps<HTMLElement> {
  asChild?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const TooltipTrigger = ({ children, asChild = false, ...props }: TooltipTriggerProps) => {
  const state = useTooltipState();

  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([state.refs.setReference, props.ref, childrenRef]);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...props,
        // @ts-ignore
        ...children.props,
        'data-state': state.open ? 'open' : 'closed',
      }),
    );
  }

  return (
    <span
      ref={ref}
      data-state={state.open ? 'open' : 'closed'}
      {...state.getReferenceProps(props)}
      style={{ background: 'transparent' }}
    >
      {children}
    </span>
  );
};

TooltipTrigger.displayName = 'TooltipTrigger';

export const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const state = useTooltipState();
    const { isInstantPhase, currentId } = useDelayGroupContext();
    const ref = useMergeRefs([state.refs.setFloating, propRef]);

    useDelayGroup(state.context, { id: state.context.floatingId });

    const instantDuration = 0;
    const duration = 250;

    const { isMounted, styles } = useTransitionStyles(state.context, {
      duration: isInstantPhase
        ? {
            open: instantDuration,
            close: currentId === state.context.floatingId ? duration : instantDuration,
          }
        : duration,
      initial: {
        opacity: 0,
      },
    });

    if (!isMounted) return null;

    return (
      <FloatingPortal>
        <div
          ref={ref}
          className="bg-gray-0 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-[rgba(100,100,111,0.3)_0px_7px_29px_0px]"
          style={{
            ...state.floatingStyles,
            // eslint-disable-next-line react/prop-types
            ...props.style,
            ...styles,
          }}
          {...state.getFloatingProps(props)}
        >
          {props.children}
          <FloatingArrow
            tipRadius={5}
            ref={state.arrowRef}
            context={state.context}
            width={12}
            className="fill-gray-0"
          />
        </div>
      </FloatingPortal>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';
