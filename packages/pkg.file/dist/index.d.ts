import * as react_jsx_runtime from 'react/jsx-runtime';

type FileProps = {
    name: string;
    url: string;
    size: number;
    icon?: string;
    className?: string;
    onDelete?: (name: string) => void;
};
declare const File: ({ name, url, size, icon, onDelete, className }: FileProps) => react_jsx_runtime.JSX.Element;

export { File, type FileProps };
