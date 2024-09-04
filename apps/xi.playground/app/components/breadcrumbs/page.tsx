'use client';

import {
  Breadcrumbs,
  BreadcrumbsRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@xipkg/breadcrumbs';

const arr = [
  {
    name: 'Home',
    link: '',
  },
  {
    name: 'Level 1',
    link: '',
  },
  {
    name: 'Level 2',
    link: '',
  },
  {
    name: 'Level 3',
    link: '',
  },
];

export default function BreadcrumbsPage() {
  return (
    <>
      <BreadcrumbsRoot size="s">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Root</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="">Level 1</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="">Level 2</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Level 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbsRoot>

      <Breadcrumbs breadcrumbs={arr} />

      <Breadcrumbs size="l" variant="default" breadcrumbs={arr} />

      <BreadcrumbsRoot size="l" variant="secondary">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Root</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="">Level 1</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="">Level 2</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Level 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbsRoot>

      <Breadcrumbs variant="secondary" breadcrumbs={arr} />

      <Breadcrumbs size="s" variant="secondary" breadcrumbs={arr} />
    </>
  );
}
