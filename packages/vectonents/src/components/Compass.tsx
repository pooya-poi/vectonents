import React from 'react';
interface CompassProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Compass: React.FC<CompassProps> = ({
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
                    <path fill="currentColor" d="M12.12 12.87a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" /><path fill="currentColor" fillRule="evenodd" d="M14.45 1H9.79A8.79 8.79 0 0 0 1 9.79v4.66a8.79 8.79 0 0 0 8.79 8.79h4.66a8.79 8.79 0 0 0 8.79-8.79V9.79A8.79 8.79 0 0 0 14.45 1m1.867 8.252-1.252 5.066a1.1 1.1 0 0 1-.802.802l-5.01 1.197a1.1 1.1 0 0 1-1.33-1.33l1.252-5.01c.098-.395.407-.704.802-.802l5.01-1.252a1.1 1.1 0 0 1 1.33 1.33" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M15.219 7.89a1.2 1.2 0 0 0-.275 0L9.977 9.175a1.1 1.1 0 0 0-.802.802l-1.252 5.01A1.1 1.1 0 0 0 9.02 16.35q.138.016.275 0l5.022-1.285c.395-.098.704-.407.802-.802l1.252-5.01a1.1 1.1 0 0 0-1.098-1.363zm-1.209 2.296-.77 3.099-3.098.769.77-3.099z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M14.45 1H9.79A8.79 8.79 0 0 0 1 9.79v4.66a8.79 8.79 0 0 0 8.79 8.79h4.66a8.79 8.79 0 0 0 8.79-8.79V9.79A8.79 8.79 0 0 0 14.45 1M9.79 21.592a7.153 7.153 0 0 1-7.142-7.142V9.79a7.153 7.153 0 0 1 7.143-7.142h4.659a7.153 7.153 0 0 1 7.142 7.143v4.659a7.153 7.153 0 0 1-7.142 7.142z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Compass;
