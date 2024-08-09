'use client';
import React from 'react';
import { MaskInput } from '@xipkg/inputmask';

export default function InputPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label>Паспорт</label>
        <MaskInput mask="passport" variant="s" placeholder="0000 000000" />
      </div>
      <div>
        <label>Карта</label>
        <MaskInput mask="card" variant="s" placeholder="0000 0000 0000 0000" />
      </div>
      <div>
        <label>Дата</label>
        <MaskInput mask="date" variant="s" placeholder="01.01.2001" />
      </div>
      <div>
        <label>Код приглашения</label>
        <MaskInput variant="s" mask="inviteCode" placeholder="AAAAAAAAAAA" />
      </div>
      <div>
        <label>Телефон</label>
        <MaskInput mask="phone" variant="s" placeholder="9 (999) 999 9999" />
      </div>
      <div>
        <label>Время</label>
        <MaskInput mask="time" variant="s" placeholder="00:00" />
      </div>
      <div>
        <label>Время</label>
        <MaskInput
          mask="time"
          variant="s"
          placeholder="hh:mm"
          onChange={(e) => console.log(e.currentTarget.value)}
        />
      </div>
      <div>
        <label></label>
        <MaskInput error />
      </div>
    </div>
  );
}
