import React from 'react';

interface ChargingBattreyProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ChargingBattrey: React.FC<ChargingBattreyProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.18 8.75a1.59 1.59 0 0 1 1.57 1.4.5.5 0 0 1-.07.12v4.46q.007.075 0 .15a.6.6 0 0 1 0 .13v.13a1.61 1.61 0 0 1-1.49 1.08 4 4 0 0 1-3.8 2.78H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h9.39a4 4 0 0 1 3.79 2.75m-9.29 8.27 3.5-3.51a1 1 0 0 0-.76-1.72h-2.46l2.71-2.7a.75.75 0 0 0 0-1.06.74.74 0 0 0-1.06 0l-3.49 3.48a1.06 1.06 0 0 0-.26 1.11 1 1 0 0 0 1 .64h2.46l-2.7 2.7a.74.74 0 0 0 0 1.06.7.7 0 0 0 .53.22c.2 0 .39-.078.53-.22" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M7.27 16.66H5a1.56 1.56 0 0 1-1.52-1.59v-7A1.56 1.56 0 0 1 5 6.48h5.7a.74.74 0 1 0 0-1.48H5a3 3 0 0 0-3 3.07v7a3 3 0 0 0 3 3.07h2.27a.74.74 0 1 0 0-1.48" /><path fill="currentColor" fillRule="evenodd" d="M19.34 7.82h.36a1.72 1.72 0 0 1 1.75 1.68v4.14a1.72 1.72 0 0 1-1.75 1.68h-.37a3 3 0 0 1-3 2.82H11.8a.74.74 0 1 1 0-1.48h4.53a1.56 1.56 0 0 0 1.52-1.59v-7a1.56 1.56 0 0 0-1.52-1.59H15.2a.74.74 0 1 1 0-1.48h1.14a3 3 0 0 1 3 2.82m.36 6c.14 0 .25-.09.25-.18V9.5c0-.09-.11-.18-.25-.18h-.33v4.5z" clipRule="evenodd" /><path fill="currentColor" d="M14.8 11.5a1.23 1.23 0 0 0-1.1-.77h-4l4.15-4.16a.86.86 0 0 0 0-1.19.84.84 0 0 0-1.19 0L7.8 10.27a1.25 1.25 0 0 0 .9 2.14h3.94l-4.15 4.16a.84.84 0 0 0 0 1.19.82.82 0 0 0 .59.24.84.84 0 0 0 .59-.24l4.86-4.86a1.25 1.25 0 0 0 .27-1.4" />
                </>
            ) : null}
        </svg>
    );
};

export default ChargingBattrey;
