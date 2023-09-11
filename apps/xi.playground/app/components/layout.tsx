import { ReactNode } from 'react';
import { Stack } from '@mui/material';

const ComponentLayout = ({ children }: { children: ReactNode }) => (
  <Stack justifyContent="center" spacing={2} sx={{ width: '100%' }}>
    {children}
  </Stack>
);

export default ComponentLayout;
