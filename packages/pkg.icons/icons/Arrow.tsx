import React from 'react';
import { Svg, IconProps } from '../Svg';

export const Arrow = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M16.542 5.128c-.343.17-.515.461-.515.872 0 .414.173.706.52.874.23.111.277.113 3.643.113h3.41L14.392 16.2c-5.065 5.067-9.247 9.29-9.294 9.384-.169.34-.064.892.218 1.147.271.245.723.318 1.072.174.142-.059 2.84-2.722 9.412-9.293L25.013 8.4v3.41c0 3.366.002 3.413.113 3.643.168.347.46.52.874.52s.706-.173.874-.52c.112-.232.113-.253.113-4.938 0-4.114-.011-4.73-.082-4.901-.111-.265-.225-.384-.478-.5-.202-.093-.468-.098-4.934-.099-4.719-.002-4.72-.002-4.951.113"
      fill-rule="evenodd"
    />
  </Svg>
);
