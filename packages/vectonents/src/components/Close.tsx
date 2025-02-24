import React from 'react';
interface CloseProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Close: React.FC<CloseProps> = ({
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
                    <path fill="currentColor" d="M19.719 18.39 13.325 12l6.394-6.343a.946.946 0 0 0-.04-1.278.93.93 0 0 0-1.269-.058l-6.412 6.296-6.3-6.343a.93.93 0 0 0-1.319 0 .944.944 0 0 0 0 1.336l6.291 6.334-6.393 6.334a.944.944 0 0 0 0 1.336.93.93 0 0 0 .663.273.93.93 0 0 0 .655-.264l6.403-6.352 6.412 6.456a.932.932 0 0 0 1.59-.67.95.95 0 0 0-.281-.666" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="m13.167 12.008 7.595-7.57a.825.825 0 0 0 0-1.16.81.81 0 0 0-1.15-.021l-7.596 7.57-7.498-7.57a.81.81 0 0 0-1.182 0 .814.814 0 0 0 0 1.094l7.498 7.559-7.596 7.558a.825.825 0 0 0 0 1.16.8.8 0 0 0 .575.24.83.83 0 0 0 .608-.196l7.595-7.57 7.596 7.657a.8.8 0 0 0 .575.241.8.8 0 0 0 .575-.24.825.825 0 0 0 0-1.16z" />
                </>
            ) : null}
        </svg>
    );
};
export default Close;
