import React from 'react';
interface AddDocumentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const AddDocument: React.FC<AddDocumentProps> = ({
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
                    <path fill="currentColor" d="M14.17 9.14h4.62a.56.56 0 0 0 .39-1l-5.55-5.45a.56.56 0 0 0-1 .39v4.57a1.49 1.49 0 0 0 1.54 1.49" /><path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.46a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46M9.62 18h.92a.75.75 0 1 0 0-1.5h-.92v-.91a.75.75 0 0 0-1.5 0v.91h-.91a.75.75 0 0 0 0 1.5h.91v.91a.75.75 0 1 0 1.5 0z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M5.29 13.27h4a2.29 2.29 0 0 1 2.33 2.24v4a2.3 2.3 0 0 1-2.29 2.29h-4a2.29 2.29 0 0 1-2.32-2.25v-4a2.28 2.28 0 0 1 2.28-2.28m4 7.03a.79.79 0 0 0 .79-.79v-4a.78.78 0 0 0-.79-.78h-4a.78.78 0 0 0-.78.78v4a.79.79 0 0 0 .78.79z" clipRule="evenodd" /><path fill="currentColor" d="M8.06 16.78v-.57a.75.75 0 1 0-1.5 0v.57H6a.75.75 0 1 0 0 1.5h.57v.58a.75.75 0 0 0 1.5 0v-.58h.58a.75.75 0 0 0 0-1.5z" /><path fill="currentColor" fillRule="evenodd" d="m13.05 2.43 7 7a.77.77 0 0 1 .22.57v7a4.75 4.75 0 0 1-4.75 4.75h-2.87a.75.75 0 0 1 0-1.5h2.87A3.25 3.25 0 0 0 18.77 17v-6.25h-4.25A2.75 2.75 0 0 1 11.77 8V3.74H9.52A3.26 3.26 0 0 0 6.27 7v5a.75.75 0 0 1-1.5 0V7a4.75 4.75 0 0 1 4.75-4.79h3c.199 0 .39.08.53.22m.22 2.34V8a1.25 1.25 0 0 0 1.25 1.24h3.22z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default AddDocument;
