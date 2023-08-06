'use client';

import { Providers } from './providers';
import ColorButton from './colorbutton';
import { usePathname, useRouter } from 'next/navigation';
import { Stack, Box, List, ListItem } from '@mui/material';

const menu = [
  {
    label: 'Button',
    link: '/components/button',
  },
  {
    label: 'Input',
    link: '/components/input',
  },
  {
    label: 'Modal',
    link: '/components/modal',
  },
];

export default function RootLayout({ children }: any) {
  const current = usePathname();
  const router = useRouter();

  const onChangePage = (path: string) => {
    router.push(path);
  };

  return (
    <html lang="en">
      <body style={{ display: 'flex', width: '100vw', minHeight: '100%' }}>
        <Providers>
          <Stack
            sx={{
              flexDirection: 'column',
              width: '100%',
              maxHeight: '100vh',
              position: 'relative',
            }}
          >
            <Stack flexDirection="row" sx={{ maxHeight: '100%' }}>
              <List
                sx={{
                  maxHeight: '100vh',
                  height: '100vh',
                  overflow: 'auto',
                  p: 2,
                  borderRight: '1px solid',
                  borderColor: 'gray.40',
                  gap: '16px',
                }}
              >
                {menu.map((item, index) => (
                  <ListItem
                    sx={{
                      display: 'flex',
                      width: '100%',
                      pl: 2,
                      transition: '0.3s',
                      bgcolor: current === item.link ? 'gray.20' : 'unset',
                      '&:hover': {
                        bgcolor: current === item.link ? 'gray.20' : 'gray.10',
                        cursor: 'pointer',
                      },
                    }}
                    key={index.toString()}
                    onClick={() => onChangePage(item.link)}
                  >
                    {item.label}
                  </ListItem>
                ))}
              </List>
              <Stack justifyContent="center" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                <ColorButton />
                <Box sx={{ padding: '12px 30px', width: '100%', height: '100%', overflow: 'auto' }}>
                  {children}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Providers>
      </body>
    </html>
  );
}
