import { SvgIcon } from '@mui/material';
import { IconProps } from '../types';

export const ArrowRight = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.626 4.045a1.68 1.68 0 0 0-.583.59.864.864 0 0 0 .001.737c.056.112.984 1.07 2.809 2.897l2.725 2.73-5.96.01-5.96.011-.199.102a.76.76 0 0 0-.319.297c-.112.181-.12.222-.12.578 0 .347.011.401.111.572a.862.862 0 0 0 .3.3l.189.111 5.979.011 5.978.01-2.724 2.73c-1.825 1.827-2.753 2.785-2.809 2.897-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.113-.057 1.303-1.215 3.668-3.574 1.925-1.92 3.557-3.529 3.628-3.577.177-.121.372-.542.372-.805s-.195-.684-.372-.805c-.071-.048-1.703-1.657-3.628-3.577-2.365-2.359-3.555-3.517-3.668-3.574a.884.884 0 0 0-.746.001"
      fillRule="evenodd"
    />
  </SvgIcon>
);
