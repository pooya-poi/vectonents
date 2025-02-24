import React from 'react';
interface CameraProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Camera: React.FC<CameraProps> = ({
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
                    <path fill="currentColor" d="M14.93 12.78a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" /><path fill="currentColor" fillRule="evenodd" d="M17.94 5H7.06A4.05 4.05 0 0 0 3 9.05v6.9A4.05 4.05 0 0 0 7.06 20h10.88A4.05 4.05 0 0 0 22 15.95v-6.9A4.05 4.05 0 0 0 17.94 5m-5.51 11.78a4 4 0 1 1 0-8 4 4 0 0 1 0 8m5.5-7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6.274 4h11.452A4.263 4.263 0 0 1 22 8.263v7.263a4.263 4.263 0 0 1-4.274 4.264H6.274A4.263 4.263 0 0 1 2 15.526V8.263A4.263 4.263 0 0 1 6.274 4m11.452 14.21a2.695 2.695 0 0 0 2.695-2.631V8.263a2.695 2.695 0 0 0-2.695-2.684H6.274a2.695 2.695 0 0 0-2.695 2.684v7.263a2.695 2.695 0 0 0 2.695 2.685z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M7.716 12.19a4.21 4.21 0 1 1 8.42 0 4.21 4.21 0 0 1-8.42 0m1.579 0a2.632 2.632 0 1 0 5.263 0 2.632 2.632 0 0 0-5.263 0" clipRule="evenodd" /><path fill="currentColor" d="M16.137 7.416a.5.5 0 0 1 .5-.5h1.105a.5.5 0 0 1 .5.5v1.116a.5.5 0 0 1-.5.5h-1.105a.5.5 0 0 1-.5-.5z" />
                </>
            ) : null}
        </svg>
    );
};
export default Camera;
