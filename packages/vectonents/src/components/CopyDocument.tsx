import React from 'react';
interface CopyDocumentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const CopyDocument: React.FC<CopyDocumentProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M16.29 2H11a4 4 0 0 0-3.93 3.36 3.88 3.88 0 0 0-3.36 3.82v8.17A4.64 4.64 0 0 0 8.36 22h5a3.9 3.9 0 0 0 3.84-3.21 4 4 0 0 0 3.13-3.9V6a4 4 0 0 0-4.04-4m-6.11 4.88h5.39a.75.75 0 0 1 0 1.5h-5.39a.75.75 0 1 1 0-1.5M8.32 20.67h5a2.6 2.6 0 0 0 2.48-1.81H11a4 4 0 0 1-4-4V6.68a2.58 2.58 0 0 0-2 2.5v8.17a3.34 3.34 0 0 0 3.32 3.32m1.11-6.6a.75.75 0 0 1 .75-.75H14a.75.75 0 1 1 0 1.5h-3.82a.75.75 0 0 1-.75-.75m.75-2.47h6.93a.75.75 0 0 0 0-1.5h-6.93a.75.75 0 1 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M15.79 8.15h-4.91a.68.68 0 0 1 0-1.36h4.91a.68.68 0 1 1 0 1.36M10.91 12.66h3.5a.68.68 0 1 1 0 1.36h-3.5a.68.68 0 0 1 0-1.36M17.19 9.72h-6.31a.69.69 0 1 0 0 1.37h6.31a.69.69 0 0 0 0-1.37" /><path fill="currentColor" fillRule="evenodd" d="M11.99 2h4.08a4.75 4.75 0 0 1 4.75 4.75v7.32a4.74 4.74 0 0 1-3.07 4.48 4 4 0 0 1-4 3.63h-5A4.75 4.75 0 0 1 4 17.43V9.21a4 4 0 0 1 3.52-4A4.75 4.75 0 0 1 11.99 2M8.71 20.64h5a2.49 2.49 0 0 0 2.4-1.82h-4.12a4.75 4.75 0 0 1-4.75-4.75V6.79a2.49 2.49 0 0 0-1.78 2.38v8.22a3.25 3.25 0 0 0 3.25 3.25m10.61-6.57a3.25 3.25 0 0 1-3.25 3.25h-4.08a3.26 3.26 0 0 1-3.25-3.25V6.75a3.26 3.26 0 0 1 3.25-3.25h4.08a3.25 3.25 0 0 1 3.25 3.25z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default CopyDocument;
