import React from 'react';
interface SortProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'filled-1' | 'outlined' | 'outlined-1';
    size?: number;
}
const Sort: React.FC<SortProps> = ({
    color,
    className = '',
    variants = 'filled',
    size = 24,
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-${fillColor} ${className}`}
        >
            {variants === 'filled' ? (
                <>
                    <path fill="currentColor" d="m22.294 13.08-4.65-4.64a1 1 0 0 0-.7-.3 1 1 0 0 0-.71.3l-4.65 4.64a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.94-2.94V20a1 1 0 1 0 2 0v-8.44l2.93 2.94a1.004 1.004 0 0 0 1.42-1.42M12.004 9.29a1 1 0 0 0-1.42 0l-2.93 2.94V4a1 1 0 1 0-2 0v8.23l-2.94-2.94a1.004 1.004 0 0 0-1.42 1.42l4.65 4.64a1 1 0 0 0 1.41 0l4.65-4.64a1 1 0 0 0 0-1.42" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M14.24 2H10a8 8 0 0 0-8 8v4.24a8 8 0 0 0 8 8h4.24a8 8 0 0 0 8-8V10a8 8 0 0 0-8-8m2 12-3.63 3.63a.75.75 0 0 1-1.06 0l-3.59-3.62a.75.75 0 0 1 1.06-1.06l3.1 3.1 3.1-3.1a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06zm-.53-2.5a.77.77 0 0 0 .53-.22l.04.01a.74.74 0 0 0 0-1.06L12.65 6.6a.74.74 0 0 0-1.06 0l-3.63 3.63a.75.75 0 0 0 1.06 1.06l3.1-3.1 3.06 3.09a.8.8 0 0 0 .53.22" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="m21.841 13.01-4.64-4.65a.79.79 0 0 0-1.07 0l-4.61 4.65a.75.75 0 0 0 1 1.06l3.22-3.22v8.9a.75.75 0 0 0 1.5 0v-9.19l3.51 3.51a.75.75 0 0 0 1.06 0 .75.75 0 0 0 .03-1.06M11.521 9.22a.75.75 0 0 0-1.06 0l-3.19 3.22V3.75a.75.75 0 1 0-1.5 0v9l-3.51-3.53a.75.75 0 0 0-1.06 1.06l4.64 4.65a.76.76 0 0 0 1.07 0l4.61-4.65a.75.75 0 0 0 0-1.06" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" d="m6.261 10.28 5.47-5.47 5.47 5.47a.75.75 0 0 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 1.06 1.06M17.201 13.72l-5.47 5.47-5.47-5.47a.75.75 0 0 0-1.06 1.06l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-1.06-1.06" />
                </>
            ) : null}
        </svg>
    );
};
export default Sort;
