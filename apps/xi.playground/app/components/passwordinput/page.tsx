'use client';

import { PasswordInput } from '@xipkg/passwordinput';

export default function PasswordInputPage() {
  return (
    <>
      <div className="w-[250px] p-4">
        <PasswordInput placeholder="Пароль" />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput placeholder="Пароль" variant="s" />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput placeholder="Пароль" warning />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput placeholder="Пароль" error />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput placeholder="Пароль" disabled />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput />
      </div>
      <div className="w-[250px] p-4">
        <PasswordInput variant="s"/>
      </div>
    </>
  );
}
