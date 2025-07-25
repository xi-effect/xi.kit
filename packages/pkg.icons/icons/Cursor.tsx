import React from 'react';
import { Svg, IconProps } from '../Svg';

export const Cursor = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75539 5.38753C2.03 3.72184 3.72192 2.02994 5.3876 2.75533L20.4076 9.29639C22.1573 10.0584 21.9474 12.6046 20.0965 13.0697L14.4809 14.4809L13.0698 20.0964C12.6047 21.9474 10.0584 22.1573 9.29644 20.4075L2.75539 5.38753ZM4.58905 4.58899L11.1301 19.609L12.5412 13.9934C12.7208 13.2788 13.2789 12.7208 13.9935 12.5412L19.6091 11.1301L4.58905 4.58899Z"
    />
  </Svg>
);
