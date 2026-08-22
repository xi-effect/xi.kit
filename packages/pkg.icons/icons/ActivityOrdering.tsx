import { Svg, type IconProps } from '../Svg';

/** Нумерованный порядок: точки и ступени разной длины. */
export const ActivityOrdering = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path d="M5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    <path d="M10 6.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" />
    <path d="M5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    <path d="M10 12a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" />
    <path d="M5 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    <path d="M10 17.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z" />
  </Svg>
);
