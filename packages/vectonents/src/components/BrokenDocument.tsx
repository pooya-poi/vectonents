import React from 'react';
interface BrokenDocumentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const BrokenDocument: React.FC<BrokenDocumentProps> = ({
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
            <path fill="currentColor" d="M14.17 9.14h4.62a.56.56 0 0 0 .39-1l-5.55-5.45a.56.56 0 0 0-1 .39v4.57a1.49 1.49 0 0 0 1.54 1.49"/><path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.46a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46m-3.279 8.394a.76.76 0 0 0-.211-.734l-.64-.65.64-.64a.75.75 0 0 0 0-1.06.74.74 0 0 0-1.06 0l-.65.64-.64-.64a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.64.64-.64.65A.764.764 0 0 0 8.23 19l.64-.65.65.65a.764.764 0 0 0 1.271-.366" clipRule="evenodd"/>
        </>
    ) : variants === 'outlined' ? (
        <>
            <path fill="currentColor" fillRule="evenodd" d="M5.63 13.25h4a2.29 2.29 0 0 1 2.29 2.28v4a2.29 2.29 0 0 1-2.29 2.29h-4a2.28 2.28 0 0 1-2.28-2.29v-4a2.28 2.28 0 0 1 2.28-2.28m4 7.03a.79.79 0 0 0 .79-.79v-4a.79.79 0 0 0-.79-.78h-4a.78.78 0 0 0-.78.78v4a.78.78 0 0 0 .78.79z" clipRule="evenodd"/><path fill="currentColor" d="M9.12 16.05a.74.74 0 0 0-1.06 0l-.41.4-.41-.4a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.41.4-.41.41a.75.75 0 0 0 .53 1.28.7.7 0 0 0 .53-.2l.41-.41.41.41a.75.75 0 0 0 1.06-1.06l-.41-.41.41-.4a.75.75 0 0 0 0-1.08"/><path fill="currentColor" fillRule="evenodd" d="m13.39 2.42 7 7a.75.75 0 0 1 .22.58v7a4.75 4.75 0 0 1-4.74 4.75H13a.75.75 0 0 1 0-1.5h2.86A3.26 3.26 0 0 0 19.11 17v-6.25h-4.25A2.75 2.75 0 0 1 12.11 8V3.72H9.86A3.26 3.26 0 0 0 6.61 7v5a.75.75 0 0 1-1.5 0V7a4.75 4.75 0 0 1 4.75-4.8h3c.199 0 .39.08.53.22m.22 2.34V8a1.25 1.25 0 0 0 1.25 1.22h3.22z" clipRule="evenodd"/>
        </>
    ) : null}
</svg>
    );
};
export default BrokenDocument;
