'use client';

import { Button } from '@mui/material';
import { Add } from '@xipkg/icons';

export default function ButtonPage() {
  return (
    <main className="flex flex-col items-center gap-7 p-24">
      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s">
          Click me
        </button>
        <button type="button" className="btn btn-m">
          Click me
        </button>
        <button type="button" className="btn btn-l">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-m" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-l" disabled>
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-primary">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-primary">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-primary">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-error">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-error">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-error">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-success">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-success">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-success">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-outlined">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-outlined">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-outlined">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-text">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-text">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-text">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-text" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-m btn-text" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-l btn-text" disabled>
          Click me
        </button>
      </div>
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
