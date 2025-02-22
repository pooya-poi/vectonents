import React from 'react';

interface ArrowDownProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined' | 'filled-1' | 'outlined-1';
    size?: number;
}
const ArrowDown: React.FC<ArrowDownProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.42 6c-.403 0-.808.154-1.116.462L12 13.767 4.696 6.462a1.58 1.58 0 0 0-2.234 0 1.58 1.58 0 0 0 0 2.234l8.42 8.42a1.58 1.58 0 0 0 2.235 0l8.42-8.42a1.58 1.58 0 0 0 0-2.234A1.57 1.57 0 0 0 20.422 6" clipRule="evenodd" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" d="M12 20.27a.75.75 0 0 1-.53-.22l-7-7A.753.753 0 0 1 5.55 12L12 18.45 18.45 12a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-.51.21" /><path fill="currentColor" d="M12 20.26a.76.76 0 0 1-.75-.75v-15a.75.75 0 0 1 1.5 0v15a.76.76 0 0 1-.75.75" /><path fill="currentColor" d="M12 21a1.5 1.5 0 0 1-1.06-.44l-7-7a1.503 1.503 0 1 1 2.13-2.12L12 17.39l5.92-5.93a1.503 1.503 0 0 1 2.13 2.12l-7 7A1.5 1.5 0 0 1 12 21" /><path fill="currentColor" d="M12 21a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 3 0v15A1.5 1.5 0 0 1 12 21" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12 16.75a.74.74 0 0 1-.53-.22l-8-8a.75.75 0 0 1 1.06-1.06L12 14.94l7.47-7.47a.75.75 0 0 1 1.06 1.06l-8 8a.74.74 0 0 1-.53.22" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" d="M12 20.27a.75.75 0 0 1-.53-.22l-7-7A.753.753 0 1 1 5.55 12L12 18.45 18.45 12a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-.51.21" /><path fill="currentColor" d="M12 20.26a.76.76 0 0 1-.75-.75v-15a.75.75 0 1 1 1.5 0v15a.76.76 0 0 1-.75.75" /><path fill="currentColor" d="M12 20.27a.75.75 0 0 1-.53-.22l-7-7A.753.753 0 1 1 5.55 12L12 18.45 18.45 12a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-.51.21" /><path fill="currentColor" d="M12 20.26a.76.76 0 0 1-.75-.75v-15a.75.75 0 1 1 1.5 0v15a.76.76 0 0 1-.75.75" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowDown;