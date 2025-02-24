import React from 'react';
interface DisabledBellProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const DisabledBell: React.FC<DisabledBellProps> = ({
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
                    <path fill="currentColor" d="M18.999 13.927v-3.93c0-3.85-3.44-7-7.69-7a8.2 8.2 0 0 0-3.79.91l11.48 10.83z" /><path fill="currentColor" fillRule="evenodd" d="m3.859 2.487 18.67 17.23h.01a1 1 0 0 1-.65 1.66.93.93 0 0 1-.65-.25l-2-1.88h-5.13a3 3 0 0 1-6 0h-3.54a2.08 2.08 0 0 1-1.63-3.58 2 2 0 0 0 .67-1.48v-4.71a7.44 7.44 0 0 1 1.09-3.58l-2.14-2a1 1 0 1 1 1.3-1.41m5.69 16.77a1.54 1.54 0 0 0 1.54 1.46v-.01a1.54 1.54 0 0 0 1.53-1.45z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M8.179 4.339a7.15 7.15 0 0 1 3.26-.78c3.62 0 6.56 2.64 6.56 5.89v4.48a2.68 2.68 0 0 0 .89 2 .78.78 0 0 0 .51.2.76.76 0 0 0 .744-.79.75.75 0 0 0-.244-.52 1.16 1.16 0 0 1-.4-.85v-4.52c0-4.08-3.61-7.39-8.06-7.39a8.7 8.7 0 0 0-3.94.94.751.751 0 1 0 .68 1.34" /><path fill="currentColor" fillRule="evenodd" d="m21.299 20.239-18-18a.75.75 0 1 0-1.06 1.06l2.1 2.11a7 7 0 0 0-1 3.54v4.48a1.15 1.15 0 0 1-.39.85 2.59 2.59 0 0 0-.71 2.85 2.92 2.92 0 0 0 2.77 1.82h3.21a3.11 3.11 0 1 0 6.22 0h3.48l2.32 2.31a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.02m-10 .32a1.61 1.61 0 0 1-1.53-1.57h3.22a1.61 1.61 0 0 1-1.66 1.57zm-7.66-3.93a1.4 1.4 0 0 0 1.37.86l11.44.03-11-11a5.45 5.45 0 0 0-.6 2.43v4.44a2.63 2.63 0 0 1-.89 2 1.09 1.09 0 0 0-.32 1.24" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default DisabledBell;
