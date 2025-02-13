import * as react_jsx_runtime from 'react/jsx-runtime';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps & {
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
};
declare const ScrollArea: ({ className, children, ref, ...props }: ScrollAreaProps) => react_jsx_runtime.JSX.Element;
type ScrollBarProps = ScrollAreaPrimitive.ScrollAreaScrollbarProps & {
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
};
declare const ScrollBar: ({ className, orientation, ref, ...props }: ScrollBarProps) => react_jsx_runtime.JSX.Element;

export { ScrollArea, ScrollBar };
