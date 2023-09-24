import { FunctionComponent } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { ArrowLeft } from '@xipkg/icons';
import { breadcrumbLink, SizesT } from './types';
import { breadcrumbSizes, separatorSizes } from './styles';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
  size: SizesT;
  Separator?: FunctionComponent<any>;
  /* breadcrumbs link color */
  color?: string;
  /* breadcrumbs last link color */
  hoverStyles?: { [key: string]: any };
  lastItemColor?: string;
};

export const Breadcrumbs = ({
  breadcrumbs,
  size,
  Separator,
  color = 'var(--xi-gray-40)',
  hoverStyles,
  lastItemColor = 'var(--xi-gray-10)0',
}: BreadcrumbsProps) => {
  const CustomSeparator = Separator ? (
    <Separator sx={{ ...separatorSizes[size], color }} />
  ) : (
    <ArrowLeft />
  );

  return (
    <MuiBreadcrumbs
      separator={CustomSeparator}
      sx={{
        alignItems: 'center',
        '& .MuiBreadcrumbs-separator': { m: '0 3.3px' },
      }}
    >
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;
        const linkColor = isLastItem ? lastItemColor : color;
        const hover = hoverStyles || { textDecoration: isLastItem ? 'none' : 'underline' };

        return (
          <Link
            href={item.link}
            tabIndex={isLastItem ? -1 : 0}
            sx={{
              ...breadcrumbSizes[size],
              color: linkColor,
              pointerEvents: isLastItem ? 'none' : '',
              textDecoration: 'none',
              transition: '0.3s',
              '&:hover': {
                ...hover,
              },
              '&:focus': {
                ...hover,
                outline: 'none',
                textDecoration: 'underline',
              },
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};
