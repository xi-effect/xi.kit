import { ChangeEvent, ReactNode } from 'react';

export type RadioProps = {
  label: string;
  children?: string | ReactNode;
  value?: boolean;
  disabled?: boolean;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({ label = 'label', value, disabled, onChange }: RadioProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="">
      <label className="">
        <span className="">{label}</span>
        <input
          type="radio"
          name="radio-10"
          className=""
          checked={value}
          disabled={disabled}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
