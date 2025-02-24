import React from 'react';
interface SearchDocumentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const SearchDocument: React.FC<SearchDocumentProps> = ({
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
                    <path fill="currentColor" d="M14.17 9.14h4.62a.56.56 0 0 0 .39-1l-5.55-5.45a.56.56 0 0 0-1 .39v4.57a1.49 1.49 0 0 0 1.54 1.49" /><path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.46a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46m-5.22 8.04a2.87 2.87 0 0 0 1.51.44l.04-.05a2.84 2.84 0 1 0-2.84-2.84c.002.461.119.915.34 1.32q-.07.04-.13.09l-1.06 1.1a.75.75 0 0 0 .54 1.27.7.7 0 0 0 .54-.23z" clipRule="evenodd" /><path fill="currentColor" d="M10.36 14.53a1.35 1.35 0 1 0-.02 2.7 1.35 1.35 0 0 0 .02-2.7" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M5.08 15.021A3.91 3.91 0 0 1 8.51 13a3.91 3.91 0 1 1-2.36 7.07L4.7 21.58a.78.78 0 0 1-.54.23.73.73 0 0 1-.52-.21.75.75 0 0 1 0-1.06L5.09 19h.11a3.91 3.91 0 0 1-.12-3.979M6.1 16.91a2.41 2.41 0 0 0 2.41 2.41v-.03a2.41 2.41 0 0 0 2.41-2.38 2.41 2.41 0 0 0-4.82 0" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m13.35 2.38 7 7a.75.75 0 0 1 .27.56v7a4.75 4.75 0 0 1-4.75 4.75H13a.75.75 0 0 1 0-1.5h2.82a3.25 3.25 0 0 0 3.25-3.25v-6.25h-4.25a2.76 2.76 0 0 1-2.75-2.75V3.69H9.82a3.26 3.26 0 0 0-3.25 3.25v5a.75.75 0 0 1-1.5 0v-5a4.75 4.75 0 0 1 4.75-4.78h3c.199 0 .39.08.53.22m.22 2.34v3.22c0 .69.56 1.25 1.25 1.25H18z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default SearchDocument;
