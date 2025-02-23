import React from 'react';
interface DocumentSecureProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const DocumentSecure: React.FC<DocumentSecureProps> = ({
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
                    <path fill="currentColor" d="M14.17 9.14h4.62a.56.56 0 0 0 .39-1l-5.55-5.45a.56.56 0 0 0-1 .39v4.57a1.49 1.49 0 0 0 1.54 1.49" /><path fill="currentColor" fillRule="evenodd" d="M8 14h3.43a.4.4 0 0 1 .41.27l.6 2.89-2.73 2L7 17.09l.61-2.78A.4.4 0 0 1 8 14m1.74 3.47 1-1v-.03a.75.75 0 0 0 0-1.03.74.74 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06.8.8 0 0 0 .53.22.77.77 0 0 0 .53-.22" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.46a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46m-3.5 10.15 2.73-2a1.47 1.47 0 0 0 .57-1.58L13.28 14a1.89 1.89 0 0 0-1.8-1.53H8A1.89 1.89 0 0 0 6.1 14l-.56 2.71c-.21.618.01 1.3.54 1.68l2.73 2a1.48 1.48 0 0 0 1.76 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m11.55 15.08.58 2.81a1.47 1.47 0 0 1-.56 1.6l-2.73 2a1.45 1.45 0 0 1-.88.29 1.48 1.48 0 0 1-.89-.29l-2.72-2a1.5 1.5 0 0 1-.55-1.68l.56-2.73a1.9 1.9 0 0 1 1.86-1.51h3.47c.9 0 1.675.63 1.86 1.51m-6.3 3.12L8 20.26l2.68-1.98-.6-2.9a.4.4 0 0 0-.39-.31H6.22a.4.4 0 0 0-.39.31z" clipRule="evenodd" /><path fill="currentColor" d="m8 16.48-1 1a.74.74 0 0 0 0 1.06.7.7 0 0 0 .53.22.74.74 0 0 0 .47-.22l1-1a.75.75 0 1 0-1-1.06" /><path fill="currentColor" fillRule="evenodd" d="m13.05 2.43 7 7a.77.77 0 0 1 .22.57v7a4.75 4.75 0 0 1-4.75 4.75h-2.87a.75.75 0 0 1 0-1.5h2.87A3.25 3.25 0 0 0 18.77 17v-6.25h-4.25A2.75 2.75 0 0 1 11.77 8V3.74H9.52A3.26 3.26 0 0 0 6.27 7v5a.75.75 0 0 1-1.5 0V7a4.75 4.75 0 0 1 4.75-4.79h3c.199 0 .39.08.53.22m.22 2.34V8a1.25 1.25 0 0 0 1.25 1.24h3.22z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default DocumentSecure;
