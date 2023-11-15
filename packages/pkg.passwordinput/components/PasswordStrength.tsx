import React, { useEffect, useState } from 'react';
import { HelpCircle } from '@xipkg/icons';
import Helper from './Helper';

type Props = {
  strength: number;
  error: string | null;
  color: {
    bar: string;
    text: string;
  };
  isWeak: boolean;
};

export default function PasswordStrength({ strength, error, color: { bar, text }, isWeak }: Props) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => setHover(true);

  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    if (!isWeak) setHover(false);
  }, [isWeak]);

  return (
    <div className="relative">
      <div className="relative w-full bg-gray-10 rounded-[3px] h-[6px]">
        <div
          style={{ width: `${strength}%`, backgroundColor: `var(--xi-${bar})` }}
          className="absolute h-full top-0 left-0 rounded-[3px]"
        ></div>
      </div>
      <div
        style={{ color: `var(--xi-${text})` }}
        className="relative flex items-center gap-x-1 mt-1 text-xs"
      >
        {error}
        {isWeak && (
          <span
            className="cursor-pointer"
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            <HelpCircle className="fill-red-100" />
          </span>
        )}
      </div>
      {hover && <Helper />}
    </div>
  );
}
