'use client';

import { Breadcrumbs } from '@xipkg/breadcrumbs';

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
]

export default function BreadcrumbsPage() {
    return (
        <>
            <Breadcrumbs size="s" variant="default" breadcrumbs={arr} />
            <Breadcrumbs breadcrumbs={arr} />
            <Breadcrumbs size="l" variant="default" breadcrumbs={arr} />
            <Breadcrumbs size="l" variant="secondary" breadcrumbs={arr} />
            <Breadcrumbs variant="secondary" breadcrumbs={arr} />
            <Breadcrumbs size="s" variant="secondary" breadcrumbs={arr} />
        </>
    )
}