import React from 'react';

interface GramophoneProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Gramophone: React.FC<GramophoneProps> = ({
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
                    <path fill="currentColor" d="M9 10.79a1.21 1.21 0 1 0 0 2.42 1.21 1.21 0 0 0 0-2.42" /><path fill="currentColor" fillRule="evenodd" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5M9 17A5 5 0 1 1 9 7a5 5 0 0 1 0 10m9.75-2.29V9.85a2 2 0 1 0-1.5 0v4.53l-1.56 1.56a.75.75 0 0 0 .53 1.28.7.7 0 0 0 .53-.22l1.78-1.75a.8.8 0 0 0 .22-.54" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M5 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m1.5 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0" clipRule="evenodd" /><path fill="currentColor" d="M15.047 7.618A2 2 0 0 1 17 6a2 2 0 0 1 .75 3.85v4.87a.8.8 0 0 1-.22.53l-1.78 1.77a.75.75 0 0 1-1.06-1.06l1.56-1.56V9.85a2 2 0 0 1-1.203-2.232" /><path fill="currentColor" fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 18.5a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Gramophone;
