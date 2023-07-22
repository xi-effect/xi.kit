'use client';

import { Button } from '@xipkg/button';
import { Add } from '@xipkg/icons';

export default function ButtonPage() {
  return (
    <main style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
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
        <Button variant="contained" size="large" color="error">
          Click me
        </Button>
        <Button variant="contained" size="medium" color="error">
          Click me
        </Button>
        <Button variant="contained" size="small" color="error">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="contained" size="large" color="success">
          Click me
        </Button>
        <Button variant="contained" size="medium" color="success">
          Click me
        </Button>
        <Button variant="contained" size="small" color="success">
          Click me
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="contained" size="large" disabled>
          Click me
        </Button>
        <Button variant="contained" size="medium" disabled>
          Click me
        </Button>
        <Button variant="contained" size="small" disabled>
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
        <Button variant="text" size="large" disabled>
          Click me
        </Button>
        <Button variant="text" size="medium" disabled>
          Click me
        </Button>
        <Button variant="text" size="small" disabled>
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
        <Button startIcon={<Add sx={{ fontSize: '32px' }} />} variant="text" size="large" disabled>
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '24px' }} />} variant="text" size="medium" disabled>
          Click me
        </Button>
        <Button startIcon={<Add sx={{ fontSize: '16px' }} />} variant="text" size="small" disabled>
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
        <Button variant="outlined" size="large" disabled>
          Click me
        </Button>
        <Button variant="outlined" size="medium" disabled>
          Click me
        </Button>
        <Button variant="outlined" size="small" disabled>
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
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button
          startIcon={<Add sx={{ fontSize: '32px' }} />}
          variant="outlined"
          size="large"
          disabled
        >
          Click me
        </Button>
        <Button
          startIcon={<Add sx={{ fontSize: '24px' }} />}
          variant="outlined"
          size="medium"
          disabled
        >
          Click me
        </Button>
        <Button
          startIcon={<Add sx={{ fontSize: '16px' }} />}
          variant="outlined"
          size="small"
          disabled
        >
          Click me
        </Button>
      </div>
    </main>
  );
}
