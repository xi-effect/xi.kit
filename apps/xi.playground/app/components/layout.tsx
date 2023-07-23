import { ReactNode } from 'react';

const ComponentLayout = ({ children }: { children: ReactNode }) => (
  <main
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    {children}
  </main>
);

export default ComponentLayout;
