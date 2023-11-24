import React, { useEffect, useState } from 'react';
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
          className="duration-300 absolute h-full top-0 left-0 rounded-[3px]"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM4.2 4.65322C4.21055 4.15488 4.38193 3.75806 4.71416 3.46274C5.05693 3.15425 5.52627 3 6.12217 3C6.68379 3 7.13862 3.14238 7.48667 3.42715C7.82944 3.70928 8.00083 4.0771 8.00083 4.53062C8.00083 5.09224 7.7187 5.53916 7.15444 5.87139C6.89077 6.02432 6.71279 6.16143 6.62051 6.28272C6.52822 6.404 6.48208 6.56221 6.48208 6.75732V6.96694H5.43398L5.42607 6.73755C5.39971 6.43169 5.44321 6.17725 5.55659 5.97422C5.66733 5.78174 5.86113 5.60376 6.13799 5.44028C6.39375 5.28735 6.56777 5.15024 6.66006 5.02896C6.75498 4.90767 6.80244 4.75342 6.80244 4.56621C6.80244 4.37637 6.73389 4.2208 6.59678 4.09951C6.45703 3.97822 6.2751 3.91758 6.05098 3.91758C5.82422 3.91758 5.64097 3.98481 5.50122 4.11929C5.36147 4.25112 5.28501 4.4291 5.27183 4.65322H4.2ZM6.75 8.25C6.75 8.66421 6.41421 9 6 9C5.58579 9 5.25 8.66421 5.25 8.25C5.25 7.83579 5.58579 7.5 6 7.5C6.41421 7.5 6.75 7.83579 6.75 8.25Z"
                fill="#BE0D0C"
              />
            </svg>
          </span>
        )}
      </div>
      {hover && <Helper />}
    </div>
  );
}
