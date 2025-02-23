import React from 'react';

interface PhonePcProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const PhonePc: React.FC<PhonePcProps> = ({
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
                    <path fill="currentColor" d="M13.83 17.27H5.29a.75.75 0 0 0 0 1.5h8.54a.75.75 0 0 0 0-1.5M19.58 7.51v-.87a2 2 0 0 0-1.91-2H4.33a1.94 1.94 0 0 0-1.9 2v7a2 2 0 0 0 1.9 2h10.48V9.42a1.92 1.92 0 0 1 1.91-1.91z" /><path fill="currentColor" fillRule="evenodd" d="M17.1 8.34h3a1.52 1.52 0 0 1 1.47 1.57v7.86a1.52 1.52 0 0 1-1.47 1.57h-3a1.53 1.53 0 0 1-1.48-1.57V9.91a1.54 1.54 0 0 1 1.48-1.57m1.02 9.29a.5.5 0 1 0 .5-.5.51.51 0 0 0-.5.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21.1 6.76h-.21v-1a2.66 2.66 0 0 0-2.65-2.66H4.9a2.66 2.66 0 0 0-2.65 2.71v6.67a2.65 2.65 0 0 0 2.65 2.65h10.48v1.39H5.86a.75.75 0 0 0 0 1.5h9.52v.17a1.92 1.92 0 0 0 1.91 1.91h3.81a1.91 1.91 0 0 0 1.9-1.91V8.67a1.9 1.9 0 0 0-1.9-1.91M4.9 13.63a1.16 1.16 0 0 1-1.15-1.15V5.81A1.16 1.16 0 0 1 4.9 4.65h13.34a1.15 1.15 0 0 1 1.15 1.16v1h-2.1a1.92 1.92 0 0 0-1.91 1.91v5zm16.2 4.97a.41.41 0 0 0 .4-.41V8.67a.4.4 0 0 0-.4-.41h-3.81a.42.42 0 0 0-.41.41v9.52a.42.42 0 0 0 .41.41z" clipRule="evenodd" /><path fill="currentColor" d="M20.14 8.87h-1.9a.75.75 0 0 0 0 1.5h1.9a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};

export default PhonePc;
