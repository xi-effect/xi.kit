'use client';

import { Input } from '@xipkg/input';
import { Label } from '@xipkg/label';
import { Link, CrossCircle } from '@xipkg/icons';

export default function InputPage() {
  return (
    <>
      <div className="w-[250px] p-4">
        <Input before={<Link />} />
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
