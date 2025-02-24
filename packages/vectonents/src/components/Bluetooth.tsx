import React from 'react';
interface BluetoothProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Bluetooth: React.FC<BluetoothProps> = ({
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
                    <path fill="currentColor" d="m12.56 17.5 3.15-2.36-3.15-1.91zM12.56 10.77l3.15-1.91-3.15-2.36z" /><path fill="currentColor" fillRule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m11.312 13.103A1.36 1.36 0 0 0 16.64 14l-3.22-2 3.21-1.95a1.36 1.36 0 0 0 .13-2.27l-3.51-2.64a1.37 1.37 0 0 0-2.19 1.1v4.37l-3.23-2a.754.754 0 0 0-.78 1.29l3.48 2.1-3.48 2.14a.754.754 0 0 0 .78 1.29l3.23-2v4.38c.002.518.29.992.75 1.23.194.09.406.138.62.14.295 0 .582-.095.82-.27l3.51-2.64a1.36 1.36 0 0 0 .552-1.167" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M12.97 22.096a1.66 1.66 0 0 1-1.62-1.65v-6.92l-5.25 3.16a.75.75 0 0 1-1-.25.74.74 0 0 1 .25-1l5.51-3.39-5.51-3.36a.74.74 0 0 1-.25-1 .75.75 0 0 1 1-.25l5.25 3.13v-6.92a1.63 1.63 0 0 1 .91-1.47 1.66 1.66 0 0 1 1.73.15l5.12 3.85c.445.327.693.858.66 1.41a1.65 1.65 0 0 1-.82 1.33l-5.19 3.13 5.17 3.14a1.64 1.64 0 0 1 .15 2.73l-5.12 3.85a1.64 1.64 0 0 1-.99.33m-.15-8.86v7.21a.14.14 0 0 0 .08.13.15.15 0 0 0 .16 0l5.12-3.84a.14.14 0 0 0 .06-.13.12.12 0 0 0-.07-.12zm.08-9.74h.07a.16.16 0 0 1 .09.03l5.12 3.83a.13.13 0 0 1 .06.12.14.14 0 0 1-.08.13l-5.34 3.23v-7.21a.14.14 0 0 1 .08-.13" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Bluetooth;
