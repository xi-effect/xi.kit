import { useState } from 'react';

import { Button } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';

const TestComponents = () => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'completed'>('idle');

  const onClickCompleted = () => {
    setStatus('pending');

    setTimeout(() => {
      setStatus('completed');

      setTimeout(() => {
        setStatus('idle');
      }, 1500);
    }, 1500);
  };

  const onClickIdle = () => {
    setStatus('pending');

    setTimeout(() => {
      setStatus('idle');
    }, 1500);
  };

  return (
    <LayoutPages>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="large">Click me</Button>
        <Button size="medium">Click me</Button>
        <Button size="small">Click me</Button>
      </div>
    </LayoutPages>
  );
};

export default TestComponents;
