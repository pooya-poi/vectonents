import React from 'react';

interface CornerUpArrowLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const CornerUpArrowLeft: React.FC<CornerUpArrowLeftProps> = ({
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
                    <path fill="currentColor" d="M14.19 6.46H9.78l.08-.09a1.49 1.49 0 0 0 0-2.12 1.51 1.51 0 0 0-2.12 0L5.09 6.9a1.4 1.4 0 0 0-.32.49 1.4 1.4 0 0 0 0 1.09 1.6 1.6 0 0 0 .32.52l2.65 2.64a1.5 1.5 0 0 0 2.12 0 1.49 1.49 0 0 0 0-2.12l-.08-.08h4.41A2.52 2.52 0 0 1 16.71 12v6.72a1.5 1.5 0 1 0 3 0V12a5.52 5.52 0 0 0-5.52-5.54" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M14 7.21H7.78l1.37-1.37a.75.75 0 1 0-1.06-1.06L5.44 7.43a.8.8 0 0 0-.16.24.8.8 0 0 0 0 .57.8.8 0 0 0 .16.25l2.65 2.64a.73.73 0 0 0 .53.22.75.75 0 0 0 .53-1.28L7.78 8.71H14A3.27 3.27 0 0 1 17.28 12v6.72a.75.75 0 0 0 1.5 0V12A4.77 4.77 0 0 0 14 7.21" />
                </>
            ) : null}
        </svg>
    );
};

export default CornerUpArrowLeft;
