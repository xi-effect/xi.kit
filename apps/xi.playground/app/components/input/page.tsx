'use client';

import { Input } from '@xipkg/input';
import { Eyeoff, Eyeon } from '@xipkg/icons';
import { Label } from '@xipkg/label';
import { Link, CrossCircle } from '@xipkg/icons';
import React from 'react';

export default function InputPage() {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);

  const changePasswordShow = () => {
    console.log('isPasswordShow');
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <>
      <div className="w-[250px] p-4">
        <Input before={<Link />} />
      </div>
      <div className="w-[250px] p-4">
        <Input
          afterClassName="cursor-pointer"
          type={isPasswordShow ? 'text' : 'password'}
          after={isPasswordShow ? <Eyeoff /> : <Eyeon />}
          afterProps={{
            onClick: changePasswordShow,
          }}
        />
      </div>
      <div className="w-[250px] p-4">
        <Input variant="s" before={<Link size="s" />} />
      </div>
      <div className="w-[250px] p-4">
        <Input after={<CrossCircle />} />
      </div>
      <div className="w-[250px] p-4">
        <Input variant="s" after={<CrossCircle size="s" />} />
      </div>
      <div className="w-[250px] p-4">
        <Label>Username</Label>
        <Input after="минут" />
      </div>
      <div className="w-[250px] p-4">
        <Input placeholder="Текстовое поле" />
      </div>
      <div className="w-[250px] p-4">
        <Input placeholder="Текстовое поле" variant="s" />
      </div>
      <div className="w-[250px] p-4">
        <Input placeholder="Текстовое поле" warning />
      </div>
      <div className="w-[250px] p-4">
        <Input placeholder="Текстовое поле" error />
      </div>
      <div className="w-[250px] p-4">
        <Input placeholder="Текстовое поле" disabled />
      </div>
      <div className="w-[250px] p-4">
        <Input />
      </div>
    </>
  );
}
