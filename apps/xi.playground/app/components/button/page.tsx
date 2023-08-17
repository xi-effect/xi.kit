'use client';

import { useState } from 'react';

import { Button } from '@xipkg/button';
import { Camera } from '@xipkg/icons';

export default function ButtonPage() {
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
    <>
      <Button
        size="small"
        variant="contained"
        color="primary"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="large"
        variant="contained"
        color="primary"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="small"
        variant="outlined"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="medium"
        variant="outlined"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="large"
        variant="outlined"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="small"
        color="error"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="medium"
        color="error"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="large"
        color="error"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="small"
        color="success"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="medium"
        color="success"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
      <Button
        size="large"
        color="success"
        sx={{
          width: '200px'
        }}
      >
        Test
      </Button>
    </>
  );
}
