import React from 'react';

interface RadioProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Radio: React.FC<RadioProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M10.15 6.1h7.29a5 5 0 0 1 5 5V15a5 5 0 0 1-4.15 4.89V21a.75.75 0 1 1-1.5 0v-1H7.27v1.03a.75.75 0 0 1-1.5 0v-1.11A5 5 0 0 1 1.57 15v-3.9a5 5 0 0 1 4.28-4.93l9.88-3.87a.75.75 0 1 1 .54 1.4zM4.38 13.053a.75.75 0 1 0 1.5-.026.75.75 0 0 0-1.5.026M7.63 16.29a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m-.749-3.237a.75.75 0 1 0 1.5-.026.75.75 0 0 0-1.5.026m.749-1.763a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.75 1.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M17 15.29h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 1 1 0 1.5m-4-3h6a.75.75 0 1 0 0-1.5h-6a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M10.14 6.1h7.29a5 5 0 0 1 5 5V15a5 5 0 0 1-4.14 4.89V21a.75.75 0 1 1-1.5 0v-1H7.27v1.03a.75.75 0 0 1-1.5 0v-1.11A5 5 0 0 1 1.57 15v-3.9a5 5 0 0 1 4.28-4.93l9.88-3.87a.75.75 0 1 1 .54 1.4zM6.57 18.19h10.86A3.19 3.19 0 0 0 20.62 15v-3.9a3.18 3.18 0 0 0-3.19-3.18H6.57a3.18 3.18 0 0 0-3.19 3.18V15a3.19 3.19 0 0 0 3.19 3.19" clipRule="evenodd" /><path fill="currentColor" d="M8.37 10.54a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.37 15.54a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.37 13.04a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M10.87 13.04a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.87 13.04a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M19 10.79h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5M17 13.79h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};

export default Radio;
