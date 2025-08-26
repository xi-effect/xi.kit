import { Svg, IconProps } from '../Svg';

export const Rectangle = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 6H4V18H20V6ZM2 4V20H22V4H2Z"
      fill="currentColor"
    ></path>
  </Svg>
);
