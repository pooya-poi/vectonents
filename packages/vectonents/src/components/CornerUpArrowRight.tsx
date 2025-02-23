import React from 'react';

interface CornerUpArrowRightProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const CornerUpArrowRight: React.FC<CornerUpArrowRightProps> = ({
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
                    <path fill="currentColor" d="M19.6 8.5a1.4 1.4 0 0 0 0-1.09 1.3 1.3 0 0 0-.32-.49l-2.66-2.67a1.5 1.5 0 0 0-2.12 2.12l.09.09h-4.42A5.52 5.52 0 0 0 4.65 12v6.72a1.5 1.5 0 0 0 3 0V12a2.52 2.52 0 0 1 2.52-2.51h4.42l-.09.08a1.51 1.51 0 0 0 0 2.12 1.53 1.53 0 0 0 1.06.44c.398 0 .78-.158 1.06-.44L19.27 9q.211-.212.32-.49z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M18.72 7.67a.8.8 0 0 0-.16-.24l-2.65-2.65a.75.75 0 1 0-1.06 1.06l1.37 1.37H10A4.77 4.77 0 0 0 5.22 12v6.72a.75.75 0 0 0 1.5 0V12A3.27 3.27 0 0 1 10 8.71h6.23l-1.37 1.36a.75.75 0 0 0 1.06 1.06l2.65-2.64a.8.8 0 0 0 .16-.25.8.8 0 0 0-.01-.57" />
                </>
            ) : null}
        </svg>
    );
};

export default CornerUpArrowRight;
