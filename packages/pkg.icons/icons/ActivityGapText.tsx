import { Svg, type IconProps } from '../Svg';

/** Лист текста с разрывом в средней строке. */
export const ActivityGapText = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6Zm0 2h12v14H6V5Z"
    />
    <path d="M8 8a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z" />
    <path d="M8 11.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H8Z" />
    <path d="M14 11.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
    <path d="M8 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" />
  </Svg>
);
