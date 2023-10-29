'use client';

import { Input } from '@xipkg/input';
import beforeIcon from '../../../public/beforeIcon.svg';
import afterIcon from '../../../public/afterIcon.svg';

export default function InputPage() {
  return (
    <>
      <div className="w-[250px] p-4">
        <Input before={<img src={beforeIcon.src} />} />
      </div>
      <div className="w-[250px] p-4">
        <Input variant="s" before={<img src={beforeIcon.src} width={16} height={16} />} />
      </div>
      <div className="w-[250px] p-4">
        <Input after={<img src={afterIcon.src} />} />
      </div>
      <div className="w-[250px] p-4">
        <Input variant="s" after={<img src={afterIcon.src} width={16} height={16} />} />
      </div>
      <div className="w-[250px] p-4">
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
