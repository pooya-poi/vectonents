import React from 'react';
interface AlarmProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Alarm: React.FC<AlarmProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M2.657 13.352a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9 4.75a.75.75 0 0 0 .75-.75v-4.41a.75.75 0 0 0-.22-.53l-2.88-2.87a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.66 2.65v4.1c0 .414.336.75.75.75" clipRule="evenodd" /><path fill="currentColor" d="M21.187 5.852a11.86 11.86 0 0 0-4.76-3.77.74.74 0 0 0-1 .38.75.75 0 0 0 .39 1 10.5 10.5 0 0 1 4.16 3.3.75.75 0 0 0 1.05.15.75.75 0 0 0 .16-1.06M3.327 6.752a10.5 10.5 0 0 1 4.16-3.3.75.75 0 0 0 .39-1 .74.74 0 0 0-1-.38 11.86 11.86 0 0 0-4.75 3.78.75.75 0 0 0 .15 1 .74.74 0 0 0 .45.15.75.75 0 0 0 .6-.25" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M2.657 13.357a9 9 0 1 1 18 0 9 9 0 0 1-18 0m1.5 0a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0" clipRule="evenodd" /><path fill="currentColor" d="M9.307 9.547a.75.75 0 0 0-1.06 1.06l2.66 2.66v4.09a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-.22-.53zM21.187 5.857a11.9 11.9 0 0 0-4.76-3.77.75.75 0 0 0-1 .39.74.74 0 0 0 .39 1 10.5 10.5 0 0 1 4.16 3.3.75.75 0 0 0 1.05.15.75.75 0 0 0 .16-1.07M3.327 6.757a10.5 10.5 0 0 1 4.16-3.3.74.74 0 0 0 .39-1 .75.75 0 0 0-1-.39 11.9 11.9 0 0 0-4.75 3.79.75.75 0 0 0 .15 1 .74.74 0 0 0 .45.15.75.75 0 0 0 .6-.25" />
                </>
            ) : null}
        </svg>
    );
};
export default Alarm;
