import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { MouseEvent } from 'react';

import {
  buttonSizes,
  typographyVariants,
  buttonStyle,
  buttonBorderRadius,
  groupSizes,
} from './styles';

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    xl: true;
    l: true;
    m: true;
    s: true;
    xs: true;
    xxs: true;
  }
}

export type SwitcherProps = {
  currentValue: string | number;
  values: string[] | number[];
  size?: 'large' | 'medium' | 'small';
  color?: 'primary' | 'white';
  groupBackgroundColor?: string;
  disabledValue?: string | number;
  isError?: boolean;
  onChange: (value?: string | number, event?: MouseEvent<HTMLElement>) => void;
};

export const Switcher = ({
  currentValue,
  values,
  size = 'large',
  color = 'primary',
  groupBackgroundColor,
  disabledValue,
  isError,
  onChange,
}: SwitcherProps) => {
  const handleChange = (event: MouseEvent<HTMLElement>, value: any) => {
    onChange(value, event);
  };

  return (
    <ToggleButtonGroup
      value={currentValue}
      sx={{
        width: 'fit-content',
        border: '2px solid',
        borderColor: isError ? 'var(--xi-red-80)' : 'transparent',
        backgroundColor: groupBackgroundColor || 'transparent',
        ...groupSizes[size],
      }}
      color="primary"
      onChange={handleChange}
      exclusive
    >
      {values.map((value, i) => (
        <ToggleButton
          value={value}
          disableFocusRipple
          disableRipple
          disabled={disabledValue === value}
          sx={{
            border: 'none',
            ...buttonSizes[size],
            ...buttonStyle[color],
            ...buttonStyle.default,
            '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
              borderRadius: `${buttonBorderRadius[size]} !important`,
              marginLeft: '0 !important',
              borderLeft: 'none !important',
            },
            '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
              borderRadius: `${buttonBorderRadius[size]} !important`,
            },
            borderRadius: buttonBorderRadius[size],
          }}
          key={`${i}`}
        >
          <Typography variant={typographyVariants[size]} sx={{ lineHeight: '0' }}>
            {value}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
