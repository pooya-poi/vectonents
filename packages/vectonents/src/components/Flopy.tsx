import React from 'react';

interface FlopyProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Flopy: React.FC<FlopyProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M14.93 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a2.54 2.54 0 0 0-.74-1.79l-3.54-3.49A2.56 2.56 0 0 0 14.93 3M7.48 16.89a2.13 2.13 0 1 1 2.12-2.13 2.12 2.12 0 0 1-2.12 2.13m-1.37-8.8h7.42a.75.75 0 0 0 0-1.5H6.11a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M7 3h9l5 5v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m11.788 15.788A2.5 2.5 0 0 0 19.52 17l.03-8.36-4.16-4.16H7A2.5 2.5 0 0 0 4.48 7v10A2.5 2.5 0 0 0 7 19.52h10a2.5 2.5 0 0 0 1.788-.732" clipRule="evenodd" /><path fill="currentColor" d="M13.53 6.59H6.1a.75.75 0 0 0 0 1.5h7.43a.75.75 0 0 0 0-1.5" /><path fill="currentColor" fillRule="evenodd" d="M6.254 13.95a2.13 2.13 0 0 1 1.976-1.31c1.17 0 2.12.95 2.12 2.12a2.13 2.13 0 1 1-4.096-.81m1.387 1.058a.63.63 0 1 0 1.158-.496.63.63 0 0 0-1.158.496" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Flopy;
