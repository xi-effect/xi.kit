'use client';

import { Textarea } from '@xipkg/textarea';
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
      <Textarea />
      {/* <div className="w-[250px] p-4">
        <Textarea before={<Link />} />
      </div>
      <div className="w-[250px] p-4">
        <Textarea
          afterClassName="cursor-pointer"
          type={isPasswordShow ? 'text' : 'password'}
          after={isPasswordShow ? <Eyeoff /> : <Eyeon />}
          afterProps={{
            onClick: changePasswordShow,
          }}
        />
      </div>
      <div className="w-[250px] p-4">
        <Textarea variant="s" before={<Link size="s" />} />
      </div>
      <div className="w-[250px] p-4">
        <Textarea after={<CrossCircle />} />
      </div>
      <div className="w-[250px] p-4">
        <Textarea variant="s" after={<CrossCircle size="s" />} />
      </div>
      <div className="w-[250px] p-4">
        <Label>Username</Label>
        <Textarea after="минут" />
      </div>
      <div className="w-[250px] p-4">
        <Textarea placeholder="Текстовое поле" />
      </div>
      <div className="w-[250px] p-4">
        <Textarea placeholder="Текстовое поле" variant="s" />
      </div>
      <div className="w-[250px] p-4">
        <Textarea placeholder="Текстовое поле" warning />
      </div>
      <div className="w-[250px] p-4">
        <Textarea placeholder="Текстовое поле" error />
      </div>
      <div className="w-[250px] p-4">
        <Textarea placeholder="Текстовое поле" disabled />
      </div>
      <div className="w-[250px] p-4">
        <Textarea />
      </div> */}
    </>
  );
}
