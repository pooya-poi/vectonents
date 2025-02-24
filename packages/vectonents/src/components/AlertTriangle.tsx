import React from 'react';
interface AlertTriangleProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const AlertTriangle: React.FC<AlertTriangleProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m20.856 15.504-5.64-10.44a4 4 0 0 0-7 0l-5.73 10.43a4 4 0 0 0 3.51 5.91h11.34a4 4 0 0 0 3.52-5.9m-10-5.76a.75.75 0 0 1 1.5 0v3.09a.75.75 0 0 1-1.5 0zm.76 6.75a.75.75 0 0 0 .75-.75l-.01-.01a.74.74 0 0 0-.74-.74.76.76 0 0 0-.75.75c0 .414.335.75.75.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M8.19 5.08A3.94 3.94 0 0 1 11.67 3a4 4 0 0 1 3.55 2.1l5.64 10.44a4 4 0 0 1-3.52 5.9H6a4 4 0 0 1-3.51-5.92zm5.68.73A2.48 2.48 0 0 0 9.5 5.8L3.81 16.22A2.49 2.49 0 0 0 6 19.91h11.34a2.51 2.51 0 0 0 2.2-3.69z" clipRule="evenodd" /><path fill="currentColor" d="M11.67 15a.75.75 0 0 0 0 1.5.74.74 0 0 0 .75-.75.74.74 0 0 0-.75-.74zM11.67 13.63a.76.76 0 0 1-.75-.75v-3.1a.75.75 0 0 1 1.5 0v3.1a.75.75 0 0 1-.75.75" />
                </>
            ) : null}
        </svg>
    );
};
export default AlertTriangle;
