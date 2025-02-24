import React from 'react';

interface BatteryMediumProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const BatteryMedium: React.FC<BatteryMediumProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.72 8.2h-.38A4 4 0 0 0 16.42 5H7a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h9.39a4 4 0 0 0 3.92-3.2h.41a1.07 1.07 0 0 0 1.11-1V9.22a1.07 1.07 0 0 0-1.11-1.02M8.44 13.51a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 1.5 0zm3.25.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M6.7 8.76a.75.75 0 0 0-.75.75v4a.75.75 0 0 0 1.5 0v-4a.76.76 0 0 0-.75-.75M10.7 8.76a.75.75 0 0 0-.75.75v4a.75.75 0 0 0 1.5 0v-4a.76.76 0 0 0-.75-.75" /><path fill="currentColor" fillRule="evenodd" d="M19.18 7.76h.52a1.72 1.72 0 0 1 1.72 1.68v4.12a1.72 1.72 0 0 1-1.75 1.68h-.52A4 4 0 0 1 15.36 18H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h9.36a4 4 0 0 1 3.82 2.76m-2.036 8.032a2.5 2.5 0 0 0 .746-1.772l-.03-5.01a2.5 2.5 0 0 0-2.5-2.5H6a2.5 2.5 0 0 0-2.5 2.5v5a2.5 2.5 0 0 0 2.5 2.5h9.36a2.5 2.5 0 0 0 1.784-.718m2.806-2.212c0 .09-.11.18-.25.18h-.34v-4.5h.31c.14 0 .25.09.25.18z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default BatteryMedium;
