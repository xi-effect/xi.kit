import React from 'react';
import { Link } from '@xipkg/link';
import { TelegramFilled, MailRounded } from '@xipkg/icons';

export type ErrorPagePropsT = {
  title: string;
  errorCode: number;
  text: string;
  tgLink: string;
  emailLink: string;
  children?: React.ReactNode;
  additionalText?: React.ReactNode;
};

export const ErrorPage = ({ children, title, errorCode, text, tgLink, emailLink, additionalText } : ErrorPagePropsT) =>
  <main className="mx-8 md:mx-[60px] lg:mx-[120px] 3xl:mx-[360px] h-[100vh] flex">
    {children && (
      <div className="absolute top-[64px] xl:top-[100px]">
        {/* Место для логотипа */}
        {children}
      </div>)
    }
    <div className="flex flex-col justify-center">
      <span className="flex flex-col-reverse sm:flex-row sm:gap-1">
        <h1 className="font-bold text-[40px] sm:text-[48px] xl:text-[64px] text-gray-90 mb-4">{title}</h1>
        <span className="text-[28px] xl:text-[40px] text-gray-30 font-bold">{errorCode}</span>
      </span>
      <p className="font-normal text-[20px] sm:text-[24px] xl:text-[30px] text-gray-90 mb-16">{text}</p>
      <p className="text-[16px] text-gray-80">
        Если ошибка повторяется — напишите <span className="hidden sm:inline">нам об этом</span>
        <span className="flex flex-col sm:flex-row">
          <span className="flex items-center">
            в&nbsp;<TelegramFilled size="s" className="mr-1 fill-brand-80" />
            <Link theme="brand" size="l" href={tgLink} target="_blank">чат Telegram</Link>
          </span>
          <span className="flex items-center">
          &nbsp;или&nbsp;<MailRounded size="s" className="mr-1 fill-brand-80" />
            <Link theme="brand" size="l" href={`mailto:${emailLink}`}>на электронную почту</Link>
          </span>
        </span>
      </p>
      {additionalText && <div className="text-[16px] text-gray-80 mt-[64px]">{additionalText}</div>}
    </div>
  </main>
;
