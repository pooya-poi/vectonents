import React from 'react';
interface CopyProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Copy: React.FC<CopyProps> = ({
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
                    <path fill="currentColor" d="M15.49 2.557v4.13c0 .74.6 1.34 1.34 1.34H21a.51.51 0 0 0 .36-.86l-5-5a.5.5 0 0 0-.87.39" /><path fill="currentColor" d="M16.74 9.027a2.22 2.22 0 0 1-2.2-2.22v-4.31a.45.45 0 0 0-.45-.45h-2.41a3.61 3.61 0 0 0-3.61 3.61v10.07a3.61 3.61 0 0 0 3.61 3.61h6.22a3.62 3.62 0 0 0 3.62-3.61v-6.25a.46.46 0 0 0-.46-.45z" /><path fill="currentColor" d="M6.83 16.137a4.37 4.37 0 0 0 4.36 4.37l4.59.01a3.79 3.79 0 0 1-3.33 2H6.78A3.78 3.78 0 0 1 3 18.737v-9.45a3.78 3.78 0 0 1 3.78-3.78h.11a4 4 0 0 0-.06.57z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m14.33 2.22 7 7a.74.74 0 0 1 .17.53v5.36a4.74 4.74 0 0 1-4.67 4.74 4.39 4.39 0 0 1-4 2.74H7.38A4.38 4.38 0 0 1 3 18.22V9.14a4.39 4.39 0 0 1 4.38-4.38h.43A4.74 4.74 0 0 1 12.09 2h1.71c.199 0 .39.08.53.22m4.63 6.71-4.27-4.27v3.1a1.18 1.18 0 0 0 1.17 1.17zm-6.13 12.16H7.38a2.88 2.88 0 0 1-2.88-2.87V9.14a2.88 2.88 0 0 1 2.88-2.88v8.85a4.75 4.75 0 0 0 4.75 4.75h3.1a2.88 2.88 0 0 1-2.4 1.23m-.74-2.73h4.7a3.25 3.25 0 0 0 3.25-3.25v-4.53h-4.23a2.83 2.83 0 0 1-2.82-2.82V3.5h-.9a3.26 3.26 0 0 0-3.25 3.28v8.33a3.26 3.26 0 0 0 3.25 3.25" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Copy;
