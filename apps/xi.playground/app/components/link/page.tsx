'use client';

import { Link } from '@xipkg/link';

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-2">
      {/* Первая строка ссылок */}
      <div className="flex flex-row items-center gap-4">
        <Link href="https://github.com">Ссылка</Link>
        <Link href="https://github.com">Ссылка</Link>
        <Link href="https://github.com">Ссылка</Link>
      </div>

      {/* Вторая строка ссылок с размером l */}
      <div className="flex flex-row items-center gap-4">
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
        <Link size="l" href="https://github.com">
          Ссылка
        </Link>
      </div>

      {/* Третья строка ссылок с размером s и темой brand */}
      <div className="flex flex-row items-center gap-4">
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" href="https://github.com">
          Ссылка
        </Link>
      </div>

      {/* Четвертая строка с разными вариантами */}
      <div className="flex flex-row items-center gap-4">
        <Link size="s" theme="brand" variant="always" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" variant="none" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="brand" variant="hover" href="https://github.com">
          Ссылка
        </Link>
      </div>

      {/* Пятая строка с белой темой и фоном */}
      <div className="flex flex-row items-center gap-4 bg-[var(--xi-brand-80)]">
        <Link size="s" theme="white" variant="always" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="white" variant="none" href="https://github.com">
          Ссылка
        </Link>
        <Link size="s" theme="white" variant="hover" href="https://github.com">
          Ссылка
        </Link>
      </div>
    </div>
  );
}
