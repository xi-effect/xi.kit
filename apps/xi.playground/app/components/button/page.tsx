'use client';

import { Button } from '@mui/material';
import { Add } from '@xipkg/icons';

export default function ButtonPage() {
  return (
    <main style={{ display: 'flex', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="large">Click me</Button>
        <Button size="medium">Click me</Button>
        <Button size="small">Click me</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="contained" size="large">
          Click me
        </Button>
        <Button variant="contained" size="medium">
          Click me
        </Button>
        <Button variant="contained" size="small">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="outlined" size="large">
          Click me
        </Button>
        <Button variant="outlined" size="medium">
          Click me
        </Button>
        <Button variant="outlined" size="small">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="text" size="large">
          Click me
        </Button>
        <Button variant="text" size="medium">
          Click me
        </Button>
        <Button variant="text" size="small">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button startIcon={<Add sx={{ fontSize: '32px' }} />} variant="text" size="large">
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '24px' }} />} variant="text" size="medium">
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '16px' }} />} variant="text" size="small">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button startIcon={<Add sx={{ fontSize: '32px' }} />} variant="outlined" size="large">
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '24px' }} />} variant="outlined" size="medium">
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '16px' }} />} variant="outlined" size="small">
          Click me
        </Button>
      </div>
    </main>
  );
}
