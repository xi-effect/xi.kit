import { Svg, IconProps } from '../Svg';

export const RubbleCircle = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fillRule="evenodd"
      d="M10 6a1 1 0 0 0-1 1v4a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 2 0v-1h2a1 1 0 1 0 0-2h-2v-1h2a3.5 3.5 0 1 0 0-7zm3 5a1.5 1.5 0 0 0 0-3h-2v3z"
      clip-rule="evenodd"
    />
    <path
      fill-rule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
