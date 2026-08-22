import { Svg, type IconProps } from '../Svg';

/** Две стопки карточек разной высоты. */
export const ActivitySorting = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path d="M5 4h4a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4Z" />
    <path d="M5 10h4a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4Z" />
    <path d="M5 16h4a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4Z" />
    <path d="M15 10h4a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4Z" />
    <path d="M15 16h4a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4Z" />
  </Svg>
);
