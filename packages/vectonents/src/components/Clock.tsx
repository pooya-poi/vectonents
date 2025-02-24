import React from 'react';
interface ClockProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Clock: React.FC<ClockProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8m2.12 16.12a1 1 0 0 0 1-1v-5a1 1 0 0 0-.29-.71l-4-4a1.004 1.004 0 0 0-1.42 1.42l3.71 3.7v4.59a1 1 0 0 0 1 1" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M8.65 7.59a.75.75 0 0 0-1.06 1.06l3.78 3.78v4.69a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.22-.53z" /><path fill="currentColor" fillRule="evenodd" d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8m4.24 18.74a6.51 6.51 0 0 0 6.5-6.5V10a6.51 6.51 0 0 0-6.5-6.5H10A6.51 6.51 0 0 0 3.5 10v4.24a6.51 6.51 0 0 0 6.5 6.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Clock;
