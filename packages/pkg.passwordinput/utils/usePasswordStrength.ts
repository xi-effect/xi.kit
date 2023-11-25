import { useMemo, useState } from 'react';
import { useDebounce } from './useDebounce';

const MIN_PASSWORD_LENGTH = 6;
const calculateStrength = (value: string): { message: string; strength: number } => {
  const weakPasswordMessage = { message: 'Такой пароль легко взломать', strength: 25 };
  const mediumPasswordMessage = {
    message: 'Слабый пароль',
    strength: 33,
  };
  const strongPasswordMessage = {
    message: 'Надежный пароль',
    strength: Math.min(100, 66 + Math.ceil(value.length / 6)),
  };
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
        const strength = value.length === 11 ? mediumPasswordMessage.strength : 60;
        return { message: mediumPasswordMessage.message, strength };
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[а-яa-z]*$/.test(value): {
      if (value.length >= 9) return strongPasswordMessage;
      else if (value.length === 8) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[А-Яа-яA-Za-z]*$/.test(value): {
      if (value.length >= 8) return strongPasswordMessage;
      else if (value.length === 7) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[0-9А-Яа-яA-Za-z]*$/.test(value): {
      if (value.length >= 7) return strongPasswordMessage;
      else if (value.length === 6) {
        return mediumPasswordMessage;
      } else {
        return weakPasswordMessage;
      }
    }
    case /^[0-9А-Яа-яA-Za-z!@#$&()`.+,\/"-_;<>|~\\]*$/.test(value): {
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
  const { strength: actualStrength } = useMemo(() => calculateStrength(password), [password]);
  const isWeak = useMemo(() => strength === 25, [strength]);
  const bar = useMemo(() => {
    if (actualStrength === 0) return { bar: 'gray-30' };
    if (actualStrength <= 25) {
      return { bar: 'red-100' };
    }
    if (actualStrength >= 33 && actualStrength <= 66) return { bar: 'orange-100' };
    return { bar: 'green-100' };
  }, [actualStrength]);

  const text = useMemo(() => {
    if (strength === 0) return { text: 'gray-60' };
    if (strength <= 25) {
      return { text: 'red-100' };
    }
    if (strength >= 33 && strength < 66) return { text: 'orange-100' };
    return { text: 'green-100' };
  }, [strength]);

  return {
    password,
    setPassword,
    strength: actualStrength,
    message,
    color: { bar, text },
    isWeak,
  };
};
