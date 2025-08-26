import { Svg, IconProps } from '../Svg';

export const RoundedRectangle = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM4 6H20V18H4V6Z"
      fill="currentColor"
    />
  </Svg>
);
