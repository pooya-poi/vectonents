import React from 'react';
interface EditAnchorPointProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const EditAnchorPoint: React.FC<EditAnchorPointProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m21.65 13.32-4.94-7.38a1 1 0 0 0-.83-.44A1 1 0 0 0 15 6l-4.8 7.26a1 1 0 0 0-.12.87l1.63 4.93a1 1 0 0 0 .95.69 3.36 3.36 0 0 0 6.68 0 1 1 0 0 0 .84-.67l1.59-4.88a1 1 0 0 0-.12-.88M16 20.75a1.36 1.36 0 0 1-1.32-1h2.64a1.36 1.36 0 0 1-1.32 1m-2.62-3h5.12L19.72 14l-2.85-4.15v2a1.7 1.7 0 1 1-2 .1V9.87L12.13 14z" clipRule="evenodd" /><path fill="currentColor" d="M9.3 9a4.69 4.69 0 0 1 4.54-4.67 2.1 2.1 0 1 0 0-2H7.7a2.09 2.09 0 1 0 0 2h1.53A6.66 6.66 0 0 0 7.3 9a2.1 2.1 0 1 0 2 0" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m15 6.08 5 7.38a.78.78 0 0 1 .07.66l-1.6 4.87a.75.75 0 0 1-.71.52h-.11a3.12 3.12 0 0 1-6.23 0h-.23a.75.75 0 0 1-.71-.51l-1.63-4.95a.75.75 0 0 1 .09-.65l4.81-7.31a.75.75 0 0 1 .62-.34.78.78 0 0 1 .63.33m-.13 7.19a.38.38 0 0 0-.38-.38h-.02a.38.38 0 1 0 .4.38M14.53 21a1.62 1.62 0 0 1-1.61-1.5h3.23a1.62 1.62 0 0 1-1.62 1.5m-2.79-3h5.48l1.31-4-3.38-5v2.52a1.88 1.88 0 1 1-1.5.06V9l-3.26 4.92z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M7.612 8.81A4.91 4.91 0 0 1 12.51 4.1a1.86 1.86 0 0 0 1.69 1.09 1.85 1.85 0 1 0-1.69-2.59H6.63a1.84 1.84 0 1 0 0 1.5H8.4a6.38 6.38 0 0 0-2.3 4.71 1.85 1.85 0 1 0 1.512 0m6.928-5.46A.35.35 0 0 0 14.2 3a.35.35 0 0 0-.35.35c.005.19.16.34.35.34a.34.34 0 0 0 .34-.34M5 3.69a.34.34 0 0 1-.35-.34.35.35 0 1 1 .69 0 .34.34 0 0 1-.34.34m1.476 6.952a.35.35 0 1 0 .648-.263.35.35 0 0 0-.648.263" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default EditAnchorPoint;
