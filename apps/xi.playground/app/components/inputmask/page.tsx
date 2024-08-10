'use client';
import React from 'react';
import { MaskInput } from '@xipkg/inputmask';

export default function InputPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label>Паспорт</label>
        <MaskInput mask="passport" variant="s" />
      </div>
      <div>
        <label>Карта</label>
        <MaskInput mask="card" variant="s" />
      </div>
      <div>
        <label>Дата</label>
        <MaskInput mask="date" variant="s" />
      </div>
      <div>
        <label>Код приглашения</label>
        <MaskInput variant="s" mask="inviteCode" />
      </div>
      <div>
        <label>Телефон</label>
        <MaskInput mask="phone" variant="s" />
      </div>
      <div>
        <label>Время</label>
        <MaskInput mask="time" variant="s" />
      </div>
      <div>
        <label>Время</label>
        <MaskInput mask="time" variant="s" onChange={(e) => console.log(e.currentTarget.value)} />
      </div>
      <div>
        <label></label>
        <MaskInput error />
      </div>
    </div>
  );
}
