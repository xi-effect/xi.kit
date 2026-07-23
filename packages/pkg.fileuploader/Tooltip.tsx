import { cx } from 'class-variance-authority';

interface TooltipProps {
  className?: string;
  text: string;
}

const Tooltip = (props: TooltipProps) => {
  return (
    <div className="absolute top-[50%] right-[-10px] translate-x-[100%] translate-y-[-50%]">
      <div
        className={cx(
          'bg-background-elevated shadow-gray-40 relative rounded-[4px] px-2 py-1 text-xs leading-4 font-medium text-text-primary shadow-sm',
          props.className,
        )}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;
