import { SvgIcon } from '@mui/material';
import { IconProps } from '../types';

export const Clock = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.792 9.792 0 0 0 3.333 2.217c3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.255 16.379 22 14.234 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.62 2.002A7.98 7.98 0 0 1 19.182 8.5a7.965 7.965 0 0 1-1.417 9.03A7.977 7.977 0 0 1 12 19.999c-3.765 0-7.052-2.668-7.823-6.351a7.995 7.995 0 0 1 4.324-8.831 7.919 7.919 0 0 1 4.239-.776m-1.123 1.536c-.182.079-.41.293-.509.479-.088.164-.088.165-.099 3.121-.01 2.655-.004 2.977.055 3.16.06.186.222.36 1.931 2.075 2.099 2.106 2.078 2.089 2.559 2.062.527-.03.886-.382.919-.9.031-.489.067-.443-1.797-2.314l-1.674-1.68-.011-2.68c-.011-2.671-.011-2.681-.099-2.844a1.21 1.21 0 0 0-.518-.481c-.166-.07-.596-.069-.757.002"
      fillRule="evenodd"
    />
  </SvgIcon>
);