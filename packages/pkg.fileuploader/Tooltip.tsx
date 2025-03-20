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
          'bg-gray-0 shadow-gray-40 relative rounded-[4px] px-2 py-1 text-xs leading-4 font-medium text-gray-100 shadow-sm',
          props.className,
        )}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;
