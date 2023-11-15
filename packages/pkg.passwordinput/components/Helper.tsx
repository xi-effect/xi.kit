import React from 'react';

export default function Helper() {
  return (
    <div className="absolute -top-[6px] w-[300px] box-content -right-[calc(100%+95px)] p-4 text-gray-100 bg-white border-gray-5 border-[1px] rounded shadow-[0_12px_16px_0_rgba(16,16,16,0.04)]">
      <div className="mb-3">Это популярный пароль. Его легко взломать.</div>
      <div className="font-semibold mb-1">Рекомендации</div>
      <div className="flex flex-col gap-y-2">
        <div>Чем больше длина пароля, тем сложнее его взломать.</div>
        <div>Используйте цифры, прописные и строчные буквы, знаки пунктуации</div>
        <div>Используйте русское или английское словосочетание</div>
        <div>
          Не используйте имя, дату рождения и другие общеизвестные даннные о вас и ваших близких
        </div>
      </div>
    </div>
  );
}
