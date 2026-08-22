import { Svg, type IconProps } from '../Svg';

/** Варианты: выбранный квадрат и пустой. */
export const ActivityMultipleChoice = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path d="M4 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
    <path d="M13 5.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 14a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Zm2 0h3v3H6v-3Z"
    />
    <path d="M13 15.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z" />
  </Svg>
);
