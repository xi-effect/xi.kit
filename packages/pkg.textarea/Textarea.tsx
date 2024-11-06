import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

// export const inputVariants = cva(
//   'flex w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10',
//   {
//     variants: {
//       variant: {
//         m: 'h-12 px-3 rounded-lg text-[16px]',
//         s: 'h-8 px-2 rounded-md text-[14px]',
//       },
//       error: {
//         true: 'border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80',
//         false: '',
//       },
//       warning: {
//         true: 'border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80',
//         false: '',
//       },
//       beforeBool: {
//         true: '',
//         false: '',
//       },
//       afterBool: {
//         true: '',
//         false: '',
//       },
//     },
//     compoundVariants: [
//       {
//         variant: 'm',
//         beforeBool: true,
//         className: 'pl-11',
//       },
//       {
//         variant: 's',
//         beforeBool: true,
//         className: 'pl-7',
//       },
//       {
//         variant: 'm',
//         afterBool: true,
//         className: 'pr-11',
//       },
//       {
//         variant: 's',
//         afterBool: true,
//         className: 'pr-7',
//       },
//     ],
//     defaultVariants: {
//       variant: 'm',
//       error: false,
//       warning: false,
//       beforeBool: false,
//       afterBool: false,
//     },
//   },
// );

// export const addsVariants = cva('absolute flex items-center z-50', {
//   variants: {
//     variant: {
//       m: 'h-6 top-3',
//       s: 'h-4 top-2',
//     },
//     beforeBool: {
//       true: '',
//       false: '',
//     },
//     afterBool: {
//       true: '',
//       false: '',
//     },
//   },
//   compoundVariants: [
//     {
//       variant: 'm',
//       beforeBool: true,
//       className: 'left-3',
//     },
//     {
//       variant: 's',
//       beforeBool: true,
//       className: 'left-2',
//     },
//     {
//       variant: 'm',
//       afterBool: true,
//       className: 'right-3',
//     },
//     {
//       variant: 's',
//       afterBool: true,
//       className: 'right-2',
//     },
//   ],
//   defaultVariants: {
//     variant: 'm',
//     beforeBool: false,
//     afterBool: false,
//   },
// });

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof inputVariants> {
//   before?: React.ReactNode;
//   after?: React.ReactNode;
//   beforeClassName?: string;
//   afterClassName?: string;
//   beforeProps?: React.HTMLAttributes<HTMLDivElement>;
//   afterProps?: React.HTMLAttributes<HTMLDivElement>;
// }

// const Textarea = React.forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       className,
//       variant,
//       error,
//       warning,
//       type,
//       before,
//       after,
//       beforeClassName,
//       afterClassName,
//       beforeProps,
//       afterProps,
//       ...props
//     },
//     ref,
//   ) => {
//     return (
//       <div className="relative">
//         {!!before && (
//           <div
//             className={cn(
//               addsVariants({
//                 variant,
//                 beforeBool: !!before,
//                 afterBool: !!after,
//                 className: beforeClassName,
//               }),
//             )}
//             {...beforeProps}
//           >
//             {before}
//           </div>
//         )}
//         <input
//           type={type}
//           className={cn(
//             inputVariants({
//               variant,
//               error,
//               warning,
//               beforeBool: !!before,
//               afterBool: !!after,
//               className,
//             }),
//           )}
//           ref={ref}
//           {...props}
//         />
//         {!!after && (
//           <div
//             className={cn(
//               addsVariants({
//                 variant,
//                 beforeBool: !!before,
//                 afterBool: !!after,
//                 className: afterClassName,
//               }),
//             )}
//             {...afterProps}
//           >
//             {after}
//           </div>
//         )}
//       </div>
//     );
//   },
// );
// Textarea.displayName = 'Textarea';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 3, maxRows = 15, ...props }, ref)=> {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    React.useEffect(() => {
      if (textareaRef.current) {
        autoResize();
      }
    }, []);

    const autoResize = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        // Сброс высоты, чтобы пересчитать её корректно
        textarea.style.height = 'auto';
        
        // Устанавливаем новую высоту с учетом текущего контента
        const scrollHeight = textarea.scrollHeight;
        const maxHeight = 21 * maxRows; // Предполагаемая высота строки около 24px
        textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
        
        // Добавление полосы прокрутки, если превышен максимум
        textarea.style.overflowY = scrollHeight > maxHeight ? 'scroll' : 'hidden';
      }
    };

    return (
      <textarea
        className={cn(
          "flex w-full min-w-[250px] max-w-[600px] rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10 resize-none",
          className
        )}
        ref={(el) => {
          textareaRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
          }
        }}
        rows={rows}
        onInput={autoResize}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"


export { Textarea };
