import React from 'react';

interface IphoneProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Iphone: React.FC<IphoneProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M8.362 2h8.276A2.32 2.32 0 0 1 19 4.286v16.012a2.33 2.33 0 0 1-2.362 2.286H8.362A2.33 2.33 0 0 1 6 20.298V4.286A2.33 2.33 0 0 1 8.362 2m2.513 3.25h3.25a.813.813 0 0 0 0-1.625h-3.25a.813.813 0 0 0 0 1.625" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M16.638 2H8.362A2.33 2.33 0 0 0 6 4.286v16.012a2.33 2.33 0 0 0 2.362 2.286h8.276A2.33 2.33 0 0 0 19 20.298V4.286A2.33 2.33 0 0 0 16.638 2m-5.492 1.625h2.708v.542a.27.27 0 0 1-.27.27h-2.167a.27.27 0 0 1-.271-.27zm5.492 17.334a.704.704 0 0 0 .737-.661V4.286a.704.704 0 0 0-.737-.66H15.48v.54a1.896 1.896 0 0 1-1.896 1.897h-2.166A1.896 1.896 0 0 1 9.52 4.167v-.542H8.36a.704.704 0 0 0-.736.661v16.012c.023.385.352.68.737.66z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Iphone;
