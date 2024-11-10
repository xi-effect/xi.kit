import React, { useEffect, useState, KeyboardEvent } from 'react';
import { useSlate } from 'slate-react';
import { Bold, Italic, Underline, Stroke } from '@xipkg/icons';
import { Button } from '@xipkg/button';
import {
  useFloating,
  useDismiss,
  useInteractions,
  autoUpdate,
  inline,
  shift,
  FloatingFocusManager,
  flip,
  FloatingDelayGroup,
} from '@floating-ui/react';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { MarkdownFormat, MarkdownFormatValueT } from '../config';
import { toggleMarkdownInlineStyle } from '../utils';

type KeyToMdT = {
  [key: string]: MarkdownFormatValueT;
};

const keyToMd: KeyToMdT = {
  'b': MarkdownFormat.Bold,
  'u': MarkdownFormat.Underline,
  'i': MarkdownFormat.Italic,
  's': MarkdownFormat.Strikethrough,
};

export const InlineToolbar = () => {
  const editor = useSlate();

  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'top',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [flip(), inline(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([dismiss]);

  useEffect(() => {
    const handleMouseUp = (event: MouseEvent) => {
      if (
        event &&
        event?.target &&
        refs.floating.current?.contains(event?.target as Element | null)
      ) {
        return;
      }

      setTimeout(() => {
        const selection = window.getSelection();
        const range =
          typeof selection?.rangeCount === 'number' && selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : null;

        if (selection?.isCollapsed) {
          setIsOpen(false);
          return;
        }

        if (range) {
          refs.setReference({
            getBoundingClientRect: () => range.getBoundingClientRect(),
            getClientRects: () => range.getClientRects(),
          });
          setIsOpen(true);
        }
      });
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (
        event &&
        event?.target &&
        refs.floating.current?.contains(event.target as Element | null)
      ) {
        return;
      }

      if (window.getSelection()?.isCollapsed) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [refs]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!(event.metaKey || event.ctrlKey)) return;

    event.preventDefault();

    const selection = window.getSelection();
    if (typeof selection?.rangeCount === 'number') {
      toggleMarkdownInlineStyle(editor, keyToMd[event.key]);
    }
  };

  useEffect(() => {
    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 's' || event.key === 'b' &&
        (/Mac|iPod|iPhone|iPad/.test(navigator.platform) ? event.metaKey : event.ctrlKey)
      ) {
        event.preventDefault(); // Prevent default save action
      }

      if (event && event.target) {
        handleKeyDown(event as KeyboardEvent<HTMLDivElement>);
      }
    };

    // TODO: разобраться с типизацией
    // @ts-ignore
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <FloatingFocusManager context={context}>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              zIndex: 1000,
            }}
            {...getFloatingProps()}
            className="bg-gray-0 border-gray-10 box-border flex h-[40px] flex-row items-center justify-center gap-1 rounded-lg border px-2 drop-shadow-md"
          >
            <FloatingDelayGroup delay={{ open: 1500, close: 0 }}>
              <Tooltip placement="bottom">
                <TooltipTrigger>
                  <FormatButton
                    format={MarkdownFormat.Bold}
                    icon={<Bold className="group-hover:fill-brand-100 h-4 w-4 fill-gray-100" />}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    <p>
                      <b>Bold</b>
                    </p>
                    <p>Ctrl+B</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip placement="bottom">
                <TooltipTrigger>
                  <FormatButton
                    format={MarkdownFormat.Italic}
                    icon={<Italic className="group-hover:fill-brand-100 h-4 w-4 fill-gray-100" />}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    <p>
                      <i>Italicize</i>
                    </p>
                    <p>Ctrl+I</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip placement="bottom">
                <TooltipTrigger>
                  <FormatButton
                    format={MarkdownFormat.Underline}
                    icon={
                      <Underline className="group-hover:fill-brand-100 h-4 w-4 fill-gray-100" />
                    }
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    <p>
                      <u>Underline</u>
                    </p>
                    <p>Ctrl+U</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip placement="bottom">
                <TooltipTrigger>
                  <FormatButton
                    format={MarkdownFormat.Strikethrough}
                    icon={<Stroke className="group-hover:fill-brand-100 h-4 w-4 fill-gray-100" />}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    <p>
                      <s>Strike-through</s>
                    </p>
                    <p>Ctrl+S</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </FloatingDelayGroup>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

const FormatButton = ({
  format,
  icon,
  onClick,
}: {
  format: MarkdownFormatValueT;
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
  const editor = useSlate();

  return (
    <Button
      className="bg-gray-0 hover:bg-brand-0 hover:fill-brand-100 group h-6 w-6 rounded-sm p-0"
      variant="ghost"
      onMouseDown={(event) => {
        event.preventDefault();
        if (onClick) {
          onClick();
        }
        toggleMarkdownInlineStyle(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};
