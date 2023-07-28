'use client';

import React from 'react';
import ComponentLayout from '../layout';

export default function Home() {
  console.log('value');

  return (
    <ComponentLayout>
      <button type="button" className="btn btn-s">
        Click me
      </button>
      <div>1</div>
    </ComponentLayout>
  );
}
