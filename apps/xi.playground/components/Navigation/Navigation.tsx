'use client';

import { List, ListItem, ListItemButton, Stack } from '@mui/material';
import { ColorButton } from 'components/ColorButton';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

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
    link: '/components/breadcrumbs',
    label: 'Breadcrumbs',
  },
  {
    link: '/components/input',
    label: 'Input',
  },
  {
    link: '/components/inputmask',
    label: 'InputMask',
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
    link: '/components/fileuploader',
    label: 'FileUploader',
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
    link: '/components/slider',
    label: 'Slider',
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
  {
    link: '/components/modal',
    label: 'Modal',
  },
  {
    link: '/components/tabs',
    label: 'Tabs',
  },
  {
    link: '/components/calendar',
    label: 'Calendar',
  },
  {
    link: '/components/datepicker',
    label: 'DatePicker',
  },
  {
    link: '/components/popover',
    label: 'Popover',
  },
  {
    link: '/components/scrollarea',
    label: 'ScrollArea',
  },
  {
    link: '/components/contextmenu',
    label: 'ContextMenu',
  },
  {
    link: '/components/tooltip',
    label: 'Tooltip',
  },
  {
    link: '/components/error-page',
    label: 'Error Page',
  },
  {
    link: '/components/typography',
    label: 'Typography',
  },
  {
    link: '/components/sheet',
    label: 'Sheet',
  },
  {
    link: '/components/smartinput',
    label: 'Smart Input',
  },
  {
    link: '/components/textarea',
    label: 'Textarea',
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
      <div className="min-h-screen h-fill w-fill">{children}</div>
    </Stack>
  );
};
