import { cn } from '@xipkg/utils';

interface SpinnerProps {
  className?: string;
  size?: number;
}

const Spinner = ({ className, size = 16 }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        className,
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
