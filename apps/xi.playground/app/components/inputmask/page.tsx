'use client';
import React from 'react';
import { useMaskInput } from '@xipkg/inputmask';

import { Input } from '@xipkg/input';

export default function InputMaskPage() {
  const anyValue = useMaskInput('any');
  const cardMask = useMaskInput('card');
  const dateMask = useMaskInput('date');
  const dateRangeMask = useMaskInput('dateRange');
  const inviteCodeMask = useMaskInput('inviteCode');
  const inviteCodeUrlMask = useMaskInput('inviteCodeUrl');
  const passportMask = useMaskInput('passport');
  const phoneMask = useMaskInput('phone');
  const timeMask = useMaskInput('time');

  // Use `onInput` handler to build controlled input
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label>Паспорт</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={passportMask} />
      </div>
      <div>
        <label>Карта</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={cardMask} />
      </div>
      <div>
        <label>Дата</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={dateMask} />
      </div>
      <div>
        <label>Код приглашения</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={inviteCodeMask} />
      </div>
      <div>
        <label>Код приглашения</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={inviteCodeUrlMask} />
      </div>
      <div>
        <label>Телефон</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={phoneMask} />
      </div>
      <div>
        <label>Время</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={timeMask} />
      </div>
      <div>
        <label>Время</label>
        {/** @ts-ignore */}
        <Input variant="s" ref={dateRangeMask} />
      </div>
      <div>
        <label>Любое значение</label>
        {/** @ts-ignore */}
        <Input ref={anyValue} />
      </div>
    </div>
  );
}
