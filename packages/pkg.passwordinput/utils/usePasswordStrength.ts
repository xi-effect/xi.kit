import { useEffect, useMemo, useState } from 'react';
import { commonPasswords } from './CommonPasswords';

const RexExpValidation = (password: string, validation: string) =>
  new RegExp(validation).test(password);

const MIN_PASSWORD_LENGTH = 6;
const VALIDATIONS = (password: string) => [
  {
    passed: RexExpValidation(password, '[^A-Za-z0-9]'),
    helper: 'Пароль должен содержать хотя бы один специальный символ',
  },
  {
    passed: RexExpValidation(password, '[0-9]'),
    helper: 'Пароль должен содержать хотя бы одну цифру',
  },
  {
    passed: RexExpValidation(password, '[A-Z]'),
    helper: 'Пароль должен содержать хотя бы одну прописную букву',
  },
  {
    passed: RexExpValidation(password, '[a-z]'),
    helper: 'Пароль должен содержать хотя бы одну строчную букву',
  },
  {
    passed: password.length >= MIN_PASSWORD_LENGTH,
    helper: 'Слишком короткий пароль, добавьте символов',
  }
];

export const usePasswordStrength = () => {
  const [strengthValue, setStrengthValue] = useState<number>(0);
  const [error, setError] = useState<string>('Минимум 6 символов');
  const [weakPassword, setWeakPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const color = useMemo(() => {
    if (strengthValue === 0) return { bar: 'gray-30', text: 'gray-60' };
    if (strengthValue <= 25) {
      return { bar: 'red-100', text: `${weakPassword ? 'red-100' : 'gray-60'}` };
    }
    if (strengthValue > 25 && strengthValue < 80) return { bar: 'orange-100', text: 'orange-100' };
    return { bar: 'green-100', text: 'green-100' };
  }, [strengthValue]);

  const checkStrength = () => {
    setWeakPassword(false);
    if (password) {
      const validations = VALIDATIONS(password);

      const passedValidation = validations.filter((validation) => {
        if (!validation.passed) setError(validation.helper);
        return validation.passed;
      });

      const strengthCoefficient = passedValidation.length / validations.length;
      const strength = Math.round(strengthCoefficient * 100);
      if (passedValidation.length === validations.length) {
        setError('Надежный пароль');
      }
      setStrengthValue(strength);
    } else {
      setStrengthValue(0);
      setError('Минимум 6 символов');
    }
  };

  const updatePassword = (value: string) => setPassword(value);

  const checkWeakPass = () => {
    if (strengthValue >= 80 || weakPassword) {
      const isWeak = commonPasswords.some((commonPass) => {
        const lowerCommonPass = commonPass.toLowerCase();
        const lowerPassword = password?.toLowerCase() || '';
        return lowerPassword.includes(lowerCommonPass);
      });

      if (isWeak) {
        setWeakPassword(true);
        setError('Такой пароль легко взломать');
        setStrengthValue(25);
      } else {
        setWeakPassword(false);
      }
    }
  };

  useEffect(() => {
    checkStrength();
  }, [password]);

  useEffect(() => {
    checkWeakPass();
  }, [strengthValue, password]);

  return { password, updatePassword, strengthValue, error, color, weakPassword };
};
