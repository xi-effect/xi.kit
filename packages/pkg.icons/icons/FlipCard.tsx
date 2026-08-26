import { Svg, type IconProps } from '../Svg';

const outline = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const FlipCard = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      {...outline}
      d="M16.295 4.857V4.274C16.295 2.747 15.057 1.509 13.528 1.509H5.569C4.042 1.509 2.802 2.747 2.802 4.274V17.525C2.802 19.054 4.042 20.292 5.569 20.292H13.528C15.057 20.292 16.295 19.054 16.295 17.525V12.32"
    />

    <path
      {...outline}
      d="M9.389 8.7H16.784C18.685 8.7 20.224 10.239 20.224 12.139C20.224 14.039 18.613 15.406 16.712 15.406M9.389 8.7L12.532 5.555M9.389 8.7L12.532 11.843"
    />
  </Svg>
);
