'use client';

import React from 'react';
import { Modal } from '@xipkg/modal';
import ComponentLayout from '../layout';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onChange = (value: boolean) => {
    console.log('value', value);
    setIsOpen(value);
  };

  return (
    <ComponentLayout>
      <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="btn btn-s">
        Click me
      </button>
      <Modal rootProps={{ open: isOpen, onOpenChange: onChange }}>
        <div>1</div>
      </Modal>
    </ComponentLayout>
  );
}
