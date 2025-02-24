import React from 'react';

interface IpadProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Ipad: React.FC<IpadProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M6.5 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M11 18.42a1 1 0 1 0 2 0 1 1 0 0 0-2 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path fill="currentColor" fillRule="evenodd" d="M18 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m.36 18a.36.36 0 0 1-.36.36H7a.36.36 0 0 1-.36-.36V4A.36.36 0 0 1 7 3.64h11a.36.36 0 0 1 .36.36z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Ipad;
