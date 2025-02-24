import React from 'react';
interface InformationProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Information: React.FC<InformationProps> = ({
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
                    <path fill="currentColor" d="M12.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M13.84 18.01H15a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2h1.84v-9h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M14.75 19.25h-1.4V8.99a.75.75 0 0 0-.22-.48.66.66 0 0 0-.54-.22h-2a.74.74 0 0 0-.74.75.78.78 0 0 0 .75.75h1.25v9.51h-2.1a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM13.75 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </>
            ) : null}
        </svg>
    );
};
export default Information;
