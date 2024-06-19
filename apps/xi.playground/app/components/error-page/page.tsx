'use client';

import { Link } from "@xipkg/link";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ErrorPage } from '@xipkg/error-page';

export default function ErrorPageSample() {
    const { resolvedTheme } = useTheme();

    const additionalText = (
        <p>Вернитесь&nbsp; 
            <Link theme="brand" size="l" href="/">назад</Link> или&nbsp;
            <Link theme="brand" size="l" href="/">на главную</Link>
        </p>
    );

    const logo = <Image 
                    alt="xieffect logo" 
                    src={resolvedTheme ? `/xiLogo${resolvedTheme}.svg` : "/xiLogolight.svg"} 
                    width={201} 
                    height={24} 
                    className="xl:w-[269px] xl:h-[32px]"
                />;

    return (
        <ErrorPage
            title='Страница не найдена'
            text='В адресе есть ошибка или страница удалена'
            errorCode={404}
            children={logo}
            tgLink='https://t.me/xieffect_support_bot'
            emailLink='hello@xieffect.ru'
            additionalText={additionalText}
        />
    );
}