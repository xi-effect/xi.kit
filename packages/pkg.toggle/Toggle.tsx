import { ChangeEvent, FC } from 'react';

export type ToggleProps = {
  value: boolean;
  disabled?: boolean;
  children?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Toggle = ({ value, disabled, children, onChange }: ToggleProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className="">
      <label className="">
        <span className="">{children}</span>
        <input
          type="checkbox"
          className=""
          disabled={disabled}
          checked={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
