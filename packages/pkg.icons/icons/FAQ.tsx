import React from 'react';
import { Svg, IconProps } from '../Svg';

export const FAQ = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fill-rule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.374-5.95A3.999 3.999 0 0 1 13 13.872V14a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 2 2 0 1 0-1.902-2.618 1 1 0 0 1-1.903-.617 3.998 3.998 0 0 1 3.179-2.716ZM10.95 17a1 1 0 0 1 1-1h.1a1 1 0 0 1 1 1v.1a1 1 0 0 1-.998 1h-.1a1 1 0 0 1-1.002-1V17Z"
      clip-rule="evenodd"
    />
  </Svg>
);
