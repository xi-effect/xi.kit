import { cx } from 'class-variance-authority';

interface TooltipProps {
  className?: string;
  text: string;
}

const Tooltip = (props: TooltipProps) => {
  return (
    <div className="absolute right-[-10px] top-[50%] translate-x-[100%] translate-y-[-50%]">
      <div
        className={cx(
          'py-1 relative bg-gray-0 rounded-[4px] px-2 text-gray-100 text-xs font-medium leading-4 shadow-sm shadow-gray-40 ',
          props.className,
        )}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;
