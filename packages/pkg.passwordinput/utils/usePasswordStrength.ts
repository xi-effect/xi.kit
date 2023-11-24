import { useMemo, useState } from 'react';
import { useDebounce } from './useDebounce';

const MIN_PASSWORD_LENGTH = 6;
const calculateStrength = (value: string): { message: string; strength: number } => {
  const weakPasswordMessage = { message: 'Такой пароль легко взломать', strength: 25 };
  const mediumPasswordMessage = {
    message: 'Слишком короткий пароль, добавьте символов',
    strength: 50,
  };
  const strongPasswordMessage = { message: 'Надежный пароль', strength: 100 };
  switch (true) {
    case value.length === 0:
      return { message: 'Минимум 6 символов', strength: 0 };
    case value.length < MIN_PASSWORD_LENGTH:
      return {
        message: `Слишком короткий пароль, добавьте ${MIN_PASSWORD_LENGTH - value.length} символов`,
        strength: Math.ceil((value.length * 20) / MIN_PASSWORD_LENGTH),
      };
    case /^[0-9]*$/.test(value): {
      if (value.length >= 13) return strongPasswordMessage;
      else if (value.length === 11 || value.length === 12) {
        const strength = value.length === 11 ? 50 : 60;
        return { message: 'Слишком короткий пароль, добавьте символов', strength };
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[a-z]*$/.test(value): {
      if (value.length >= 9) return strongPasswordMessage;
      else if (value.length === 8) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[A-Za-z]*$/.test(value): {
      if (value.length >= 8) return strongPasswordMessage;
      else if (value.length === 7) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[0-9A-Za-z]*$/.test(value): {
      if (value.length >= 7) return strongPasswordMessage;
      else if (value.length === 6) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[0-9A-Za-z!@#$&()`.+,\/"-;<>|~\\]*$/.test(value): {
      if (value.length >= 7) return strongPasswordMessage;
      else if (value.length === 6) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    default:
      return { message: 'Минимум 6 символов', strength: 0 };
  }
};

export const usePasswordStrength = () => {
  const [password, setPassword] = useState<string>('');
  const debouncedPassword = useDebounce(password, 500);
  const { message, strength } = useMemo(
    () => calculateStrength(debouncedPassword),
    [debouncedPassword],
  );
  const isWeak = useMemo(() => strength === 25, [strength]);
  const color = useMemo(() => {
    if (strength === 0) return { bar: 'gray-30', text: 'gray-60' };
    if (strength <= 25) {
      return { bar: 'red-100', text: 'red-100' };
    }
    if (strength > 25 && strength < 80) return { bar: 'orange-100', text: 'orange-100' };
    return { bar: 'green-100', text: 'green-100' };
  }, [strength]);

  return { password, setPassword, strength, message, color, isWeak };
};
