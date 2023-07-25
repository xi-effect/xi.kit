'use client';

import { Link } from '@xipkg/link';

export default function ButtonPage() {
  return (
    <main style={{ display: 'flex', gap: '16px' }}>
      <div>
        <Link href="https://github.com">Ссылка</Link>
        <Link>Ссылка</Link>
        <Link>Ссылка</Link>
      </div>
    </main>
  );
}
