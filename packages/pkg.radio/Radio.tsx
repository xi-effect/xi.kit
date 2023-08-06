import { FormControlLabel, Radio as MuiRadio, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';

import { formControlGap, sizesStyle, typographyVariants } from './style';
import { CheckedIcon, Icon } from './StyledRadioIcon';
import { RadioProps } from './types';

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

export const Radio = ({
  size = 'large',
  color = 'primary',
  label,
  value,
  disabled,
  onChange,
}: RadioProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (onChange) {
      onChange(checked, event);
    }
  };

  return (
    <FormControlLabel
      sx={{ m: 0, gap: formControlGap[size] }}
      value={value}
      control={
        <MuiRadio
          disabled={disabled}
          value={value}
          onChange={handleChange}
          disableRipple
          sx={{ p: 0 }}
          checkedIcon={<CheckedIcon color={color} sizes={sizesStyle[size]} />}
          icon={<Icon color={color} sizes={sizesStyle[size]} />}
        />
      }
      label={
        label && (
          <Typography
            sx={{ fontWeight: 400, color: disabled ? 'gray.40' : 'gray.90' }}
            variant={typographyVariants[size]}
          >
            {label}
          </Typography>
        )
      }
    />
  );
};
