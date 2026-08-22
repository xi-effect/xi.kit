import { Svg, type IconProps } from '../Svg';

/** Кадр изображения и булавка-подпись. */
export const ActivityLabelImage = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6.05c-.66-.04-1.33-.05-2-.05V5H6v12h6.1c.07.7.3 1.36.66 1.95H6a2 2 0 0 1-2-2V5Z"
    />
    <path d="M8.25 7.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 12.5a2.75 2.75 0 0 0-2.37 4.15L17.5 21.2l2.37-4.55A2.75 2.75 0 0 0 17.5 12.5Zm0 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
  </Svg>
);
