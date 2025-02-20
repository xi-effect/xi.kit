import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ErrorPagePropsT = {
    title: string;
    errorCode: number;
    text: string;
    tgLink: string;
    emailLink: string;
    children?: React.ReactNode;
    additionalText?: React.ReactNode;
};
declare const ErrorPage: ({ children, title, errorCode, text, tgLink, emailLink, additionalText, }: ErrorPagePropsT) => react_jsx_runtime.JSX.Element;

export { ErrorPage, type ErrorPagePropsT };
