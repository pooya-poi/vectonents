import React from 'react';
interface CalendarProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Calendar: React.FC<CalendarProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M16.9 3.57h.1a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h.1V1.75a.75.75 0 0 1 1.5 0v1.82h6.8V1.75a.75.75 0 0 1 1.5 0zM7.5 9.66h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M16.5 8.16h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5" /><path fill="currentColor" fillRule="evenodd" d="M16.89 3.57H17a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h.09V1.75a.75.75 0 0 1 1.5 0v1.82h6.8V1.75a.75.75 0 0 1 1.5 0zm.11 17.5a3.5 3.5 0 0 0 3.5-3.5v-9a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5v9a3.5 3.5 0 0 0 3.5 3.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Calendar;
