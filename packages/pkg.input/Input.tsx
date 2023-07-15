import * as React from 'react';

type InputProps = {} & React.ComponentProps<'input'>;

export const Input = React.forwardRef<InputProps>((props, ref) => {
  const { ...restProps } = props;

  return <input ref={ref} {...restProps} />;
});

Input.displayName = 'Input';
