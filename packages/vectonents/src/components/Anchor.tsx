import React from 'react';
interface AnchorProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Anchor: React.FC<AnchorProps> = ({
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
                    <path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0V2a1 1 0 1 1 2 0z" /><path fill="currentColor" fillRule="evenodd" d="M21 11h-3.73a1 1 0 1 0 0 2h2.67A8 8 0 0 1 13 19.93V11q.015-.09 0-.18a2.75 2.75 0 1 0-1.92 0 1 1 0 0 0 0 .18v8.93A8 8 0 0 1 4.06 13h2.21a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1c0 5.523 4.477 10 10 10s10-4.477 10-10a1 1 0 0 0-1-1m-9-2a.75.75 0 1 1 .75-.75A.76.76 0 0 1 12 9" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.5 4.25a.76.76 0 0 1-.75.75.76.76 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0z" /><path fill="currentColor" fillRule="evenodd" d="M20.75 12h-3.73a.75.75 0 0 0 0 1.5h2.95a8.27 8.27 0 0 1-7.47 7.46v-9.32a2.75 2.75 0 1 0-1.46 0v9.32a8.27 8.27 0 0 1-7.47-7.46h2.45a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0-.75.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a.75.75 0 0 0-.75-.75M10.5 9A1.25 1.25 0 1 1 13 9a1.25 1.25 0 0 1-2.5 0" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Anchor;
