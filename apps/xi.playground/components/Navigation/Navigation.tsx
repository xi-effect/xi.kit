'use client';

import { ReactNode } from 'react';
import { Stack, ListItem, ListItemButton, List } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ColorButton } from 'components/ColorButton';

export type NavigationT = {
  children: ReactNode;
};

const menuArray = [
  {
    link: '/components/avatar',
    label: 'Avatar',
  },
  {
    link: '/components/badge',
    label: 'Badge',
  },
  {
    link: '/components/button',
    label: 'Button',
  },
  {
    link: '/components/input',
    label: 'Input',
  },
  {
    link: '/components/checkbox',
    label: 'Checkbox',
  },
  {
    link: '/components/file',
    label: 'File',
  },
  {
    link: '/components/form',
    label: 'Form',
  },
  {
    link: '/components/dropdown',
    label: 'Dropdown',
  },
  {
    link: '/components/link',
    label: 'Link',
  },
  {
    link: '/components/radio',
    label: 'Radio',
  },
  {
    link: '/components/select',
    label: 'Select',
  },
  {
    link: '/components/switcher',
    label: 'Switcher',
  },
  {
    link: '/components/toggle',
    label: 'Toggle',
  },
  {
    link: '/components/icons',
    label: 'Icons',
  },
  {
    link: '/components/userprofile',
    label: 'UserProfile',
  },
];

export const Navigation = ({ children }: NavigationT) => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        p: 2,
        height: '100%',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'auto',
        position: 'relative',
      }}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Stack
        sx={{
          position: 'sticky',
          top: 0,
          width: '300px',
          borderRight: '1px solid',
          borderColor: '#afafaf',
          p: 1,
        }}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <ColorButton />
        <List>
          {menuArray.map((item, index) => (
            <ListItem
              disablePadding
              onClick={() => router.push(item.link)}
              sx={{ width: '100%' }}
              key={index}
            >
              <ListItemButton sx={{ width: '200px' }}>{item.label}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
      <div className='h-fill min-h-screen w-fill'>{children}</div>
    </Stack>
  );
};
