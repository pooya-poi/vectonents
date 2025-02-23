import React from 'react';
interface DocumentFavProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const DocumentFav: React.FC<DocumentFavProps> = ({
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
                    <path fill="currentColor" d="M14.17 9.14h4.62a.55.55 0 0 0 .39-1l-5.55-5.5a.56.56 0 0 0-1 .39v4.62a1.49 1.49 0 0 0 1.54 1.49M13 14.32a1.64 1.64 0 0 1 0 2.08L10.57 19a.46.46 0 0 1-.69 0l-2.4-2.6a1.63 1.63 0 0 1 0-2.08 1.07 1.07 0 0 1 .81-.38c.312.005.607.143.81.38l.56.64a.76.76 0 0 0 1.13 0l.56-.64a1.06 1.06 0 0 1 1.65 0" /><path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.46a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46M11.66 20l2.43-2.6a3.11 3.11 0 0 0 0-4.07 2.61 2.61 0 0 0-3.86 0 2.61 2.61 0 0 0-3.86 0 3.11 3.11 0 0 0 0 4.08L8.79 20a1.93 1.93 0 0 0 2.87 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M9.905 13.608a2.6 2.6 0 0 1 1.925.852 3.09 3.09 0 0 1 .02 4.09l-2.41 2.59a1.94 1.94 0 0 1-2.88 0l-2.41-2.59a3.1 3.1 0 0 1 0-4.09 2.6 2.6 0 0 1 3.84-.011 2.6 2.6 0 0 1 1.915-.841M8.31 20.11l2.41-2.58a1.64 1.64 0 0 0-.01-2.08 1.05 1.05 0 0 0-1.61 0l-.57.64a.73.73 0 0 1-.56.25.75.75 0 0 1-.56-.25l-.57-.64a1 1 0 0 0-1.61 0 1.63 1.63 0 0 0 0 2.08l2.4 2.58a.5.5 0 0 0 .34.16.47.47 0 0 0 .34-.16" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m13.43 2.42 7 7a.77.77 0 0 1 .22.58v7a4.75 4.75 0 0 1-4.75 4.75H13a.75.75 0 1 1 0-1.5h2.9A3.26 3.26 0 0 0 19.15 17v-6.25H14.9A2.75 2.75 0 0 1 12.15 8V3.73H9.9A3.25 3.25 0 0 0 6.65 7v5a.75.75 0 0 1-1.5 0V7A4.75 4.75 0 0 1 9.9 2.2h3c.199 0 .39.08.53.22m.22 2.35V8a1.25 1.25 0 0 0 1.25 1.23h3.21z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default DocumentFav;
