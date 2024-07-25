import React from 'react';
import { Svg, IconProps } from '../Svg';

export const Arrow = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.407 3.846c-.258.127-.387.346-.387.654 0 .311.13.529.39.655.173.084.208.085 2.733.085H17.7l-6.906 6.91c-3.799 3.8-6.935 6.968-6.97 7.038-.127.255-.049.669.163.86a.799.799 0 0 0 .804.131c.106-.044 2.13-2.042 7.059-6.97L18.76 6.3v2.557c0 2.525.001 2.56.085 2.733.126.26.344.39.655.39.311 0 .529-.13.655-.39.085-.175.085-.19.085-3.704 0-3.085-.008-3.547-.062-3.676a.61.61 0 0 0-.358-.375c-.151-.069-.351-.073-3.7-.074-3.54-.001-3.54-.001-3.713.085"
      fillRule="evenodd"
    />
  </Svg>
);
