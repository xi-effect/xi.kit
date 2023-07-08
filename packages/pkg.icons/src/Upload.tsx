import { SvgIcon } from '@mui/material';
import { IconProps } from '../types';

export const Upload = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.64 3.068c-.153.053-.45.331-1.973 1.847-.986.982-1.838 1.861-1.894 1.955-.297.501-.07 1.175.476 1.41.244.105.603.097.833-.019.076-.039.538-.468 1.028-.954l.89-.885v3.862c0 4.345-.016 4.102.299 4.417a.984.984 0 0 0 1.402 0c.315-.315.299-.072.299-4.417V6.422l.89.885c.49.486.952.915 1.028.954.23.116.589.124.833.019.546-.235.773-.909.476-1.41-.056-.094-.908-.973-1.894-1.955-1.609-1.601-1.813-1.791-1.99-1.85a1.053 1.053 0 0 0-.703.003m-8.997 7.001a1.118 1.118 0 0 0-.343.229c-.309.309-.3.209-.3 3.26 0 1.626.017 2.839.042 3.043.1.817.464 1.729.95 2.38a5.084 5.084 0 0 0 3.407 1.977c.464.057 10.738.057 11.202 0a5.2 5.2 0 0 0 2.223-.839c.405-.271 1.024-.89 1.295-1.295a5.2 5.2 0 0 0 .839-2.223c.025-.204.042-1.417.042-3.043 0-3.05.009-2.951-.299-3.259a.984.984 0 0 0-1.402 0c-.308.308-.299.207-.299 3.27 0 2.961-.004 3.017-.233 3.581a3.08 3.08 0 0 1-1.617 1.617c-.594.241-.373.233-6.15.233-5.779 0-5.556.008-6.151-.234a3.046 3.046 0 0 1-1.615-1.615C4.004 16.586 4 16.53 4 13.569c0-3.063.009-2.962-.299-3.27a.998.998 0 0 0-1.058-.23"
      fillRule="evenodd"
    />
  </SvgIcon>
);
