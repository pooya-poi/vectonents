import React from 'react';
interface DocumentEditProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const DocumentEdit: React.FC<DocumentEditProps> = ({
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
                    <path fill="currentColor" d="M9.75 14.63a.75.75 0 0 1-.29 1 .76.76 0 0 1-1.02-.29L7.15 13a.75.75 0 0 1 1.31-.73z" /><path fill="currentColor" fillRule="evenodd" d="M14.16 10.15h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.55a4 4 0 0 1-4-4V6.42a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.77a2.45 2.45 0 0 0 2.44 2.46m-2.288 10.023a.38.38 0 0 0 .198-.363l.06-1.98a1.7 1.7 0 0 0-.21-.8l-2.63-4.8a1.8 1.8 0 0 0-2.29-1 1.81 1.81 0 0 0-.4 2.49l2.62 4.82c.133.247.33.455.57.6l1.67 1a.38.38 0 0 0 .412.033" clipRule="evenodd" /><path fill="currentColor" d="M12.77 3v4.57c0 .817.663 1.48 1.48 1.48h4.63a.56.56 0 0 0 .39-1L13.72 2.6a.56.56 0 0 0-.95.4" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6.57 11.42A3 3 0 0 1 8 12.76l2.64 4.81c.198.358.298.761.29 1.17l-.05 2a1.16 1.16 0 0 1-.58 1 1.1 1.1 0 0 1-.53.13 1.2 1.2 0 0 1-.63-.18l-1.68-1a2.34 2.34 0 0 1-.83-.88L4 15a3.08 3.08 0 0 1-.32-2.01 2.14 2.14 0 0 1 1-1.57 2.12 2.12 0 0 1 1.89 0m1.66 7.94 1.16.7-.01-1.38a.94.94 0 0 0-.11-.42l-2.63-4.81a1.52 1.52 0 0 0-.71-.69.8.8 0 0 0-.33-.08.5.5 0 0 0-.24.06.66.66 0 0 0-.29.49 1.58 1.58 0 0 0 .2 1L7.9 19a.8.8 0 0 0 .33.36" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m13.22 2.35 7 7a.75.75 0 0 1 .22.56v7a4.75 4.75 0 0 1-4.75 4.75h-2.87a.75.75 0 0 1 0-1.5h2.87a3.26 3.26 0 0 0 3.25-3.25v-6.25h-4.25a2.76 2.76 0 0 1-2.75-2.75V3.66H9.69a3.25 3.25 0 0 0-3.25 3.25v2.65a.75.75 0 1 1-1.5 0V6.91a4.75 4.75 0 0 1 4.75-4.78h3c.199 0 .39.08.53.22m.22 2.34v3.22c0 .69.56 1.25 1.25 1.25h3.22z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default DocumentEdit;
