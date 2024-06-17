'use client';

import { Link } from "@xipkg/link";
import { useTheme } from 'next-themes';
import { ErrorPage } from '@xipkg/error-page';

export default function ErrorPageSample() {
    const { resolvedTheme } = useTheme();

    const additionalText = (
        <p>Вернитесь 
            <Link theme="brand" size="l" href="/">&nbsp;назад</Link> или
            <Link theme="brand" size="l" href="/">&nbsp;на главную</Link>
        </p>
    );

    return (
        <ErrorPage
            resolvedTheme={resolvedTheme || 'light'}
            title='Страница не найдена'
            text='В адресе есть ошибка или страница удалена'
            errorCode={404}
            additionalText={additionalText}
        />
    );
}