import React from 'react';

interface BatteryProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Battery: React.FC<BatteryProps> = ({
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
                    <path fill="currentColor" d="M21.997 14.9a1 1 0 0 0 0-.15v-4.6a1.626 1.626 0 0 0-1.604-1.4c-.545-1.634-2.09-2.742-3.835-2.75H7.059C4.818 6 3 7.79 3 10v5c0 2.21 1.818 4 4.06 4h9.528c1.758-.008 3.31-1.13 3.846-2.78a1.63 1.63 0 0 0 1.563-1.06.6.6 0 0 0 0-.13z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M19.292 8.76h-.507c-.521-1.638-2.008-2.75-3.689-2.76H5.903C3.748 6 2 7.79 2 10v5c0 2.21 1.748 4 3.903 4h9.164c1.681-.01 3.167-1.122 3.689-2.76h.536c.444.01.875-.16 1.195-.476A1.73 1.73 0 0 0 21 14.56v-4.12a1.73 1.73 0 0 0-.513-1.204 1.65 1.65 0 0 0-1.195-.476m-1.756 6.26c0 1.38-1.093 2.5-2.44 2.5H5.903c-1.347 0-2.44-1.12-2.44-2.5v-5a2.53 2.53 0 0 1 .712-1.774 2.4 2.4 0 0 1 1.728-.736h9.164c1.347 0 2.44 1.12 2.44 2.5zm1.707-.26c.147 0 .244-.09.244-.18l.05-4.14c0-.09-.098-.18-.245-.18h-.341v4.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Battery;
