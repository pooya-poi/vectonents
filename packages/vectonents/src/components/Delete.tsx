import React from 'react';
interface DeleteProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Delete: React.FC<DeleteProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M8.444 5.001h10.96a2 2 0 0 1 2.07 2v9.5a2 2 0 0 1-2.07 2h-11a2.13 2.13 0 0 1-1.53-.64l-4.32-4.52a2 2 0 0 1-.05-2.71l4.37-4.88a2.1 2.1 0 0 1 1.57-.75m9.284 9c0-.2-.08-.39-.224-.53l-1.64-1.64 1.64-1.65a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.64 1.63-1.63-1.63a.75.75 0 0 0-1.06 0 .74.74 0 0 0 0 1.06l1.64 1.65-1.64 1.64a.74.74 0 0 0 0 1.06.74.74 0 0 0 1.05 0l1.64-1.64 1.64 1.64a.74.74 0 0 0 .53.22.7.7 0 0 0 .53-.22.74.74 0 0 0 .224-.53" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M16.45 9.12a.75.75 0 0 1 1.278.533.74.74 0 0 1-.228.528l-1.64 1.65 1.64 1.64a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1.64-1.64-1.65 1.64a.7.7 0 0 1-.53.22.75.75 0 0 1-.53-1.28l1.65-1.64-1.64-1.65a.75.75 0 0 1 1.06-1.06l1.65 1.63z" /><path fill="currentColor" fillRule="evenodd" d="M19.41 5h-11a2.1 2.1 0 0 0-1.53.75L2.5 10.63a2 2 0 0 0 .06 2.71l4.32 4.52c.398.412.947.643 1.52.64h11a2 2 0 0 0 2.07-2V7a2 2 0 0 0-2.06-2m.57 11.5a.53.53 0 0 1-.57.5h-11a.6.6 0 0 1-.43-.18L3.64 12.3a.49.49 0 0 1 0-.67L8 6.69a.62.62 0 0 1 .45-.19h11a.53.53 0 0 1 .57.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Delete;
