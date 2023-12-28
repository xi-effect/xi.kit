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
        {/* <span className="absolute top-0 left-[-8px] border-l-0 border-r-8 border-solid border-r-gray-0 border-y-transparent border-y-4" /> */}
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;
