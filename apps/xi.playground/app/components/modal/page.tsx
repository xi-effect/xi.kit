'use client';

import { Modal } from '@xipkg/modal';
import React from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center gap-1 p-24">
      <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="btn btn-s">
        Click me
      </button>
      <Modal rootProps={{ open: isOpen }}>
        <div>1</div>
      </Modal>
    </main>
  );
}
