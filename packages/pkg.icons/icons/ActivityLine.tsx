import { Svg, IconProps } from '../Svg';

export const ActivityLine = ({ ...props }: IconProps) => (
  <Svg {...props}>
	<path d="M22 12H18L15 21L9 3L6 12H2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
);
