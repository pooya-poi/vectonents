import React from 'react';
interface BehanceProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Behance: React.FC<BehanceProps> = ({
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
                    <path fill="currentColor" d="M10.11 10.25c0-.842-.832-.825-1.04-.82h-1.5v1.66h1.59a.84.84 0 0 0 .95-.84M7.57 12.16h1.7a1 1 0 0 1 1.13 1.06c0 .94-1 .94-1.16.94H7.57zM14.68 11.2a1.14 1.14 0 0 1 .52-.11.92.92 0 0 1 .73.27c.182.21.287.473.3.75h-2.11q.02-.157.06-.31a.84.84 0 0 1 .17-.34q.14-.162.33-.26" /><path fill="currentColor" fillRule="evenodd" d="M17.55 2H6a4 4 0 0 0-4 4v11.55a4 4 0 0 0 4 4h11.55a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m-3.71 6.88h2.66v.65h-2.66zm-7.83 6.45h3.44c.32 0 2.51-.06 2.47-2.06a1.76 1.76 0 0 0-1.3-1.81 1.52 1.52 0 0 0 1-1.47c0-.54-.08-1.77-2.27-1.77H6.01zm9.27-1.19a1.14 1.14 0 0 0 1-.62h1.15a2.12 2.12 0 0 1-2.22 1.59 2.31 2.31 0 0 1-2.44-2.49 2.38 2.38 0 0 1 2.43-2.5c1.79 0 2.36 1.51 2.29 2.81h-3.37a1.08 1.08 0 0 0 1.16 1.21" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M11.67 9.99a1.53 1.53 0 0 1-1 1.48 1.75 1.75 0 0 1 1.29 1.8c0 2-2.19 2.06-2.51 2.06H6.02v-7.1H9.4c2.19 0 2.27 1.22 2.27 1.76m-2.62-.52H7.58v1.66h1.59a.84.84 0 0 0 .94-.85c0-.838-.824-.816-1.03-.81zm.2 4.68H7.58v-2h1.69a1 1 0 0 1 1.13 1c0 .97-1 .97-1.15.97z" clipRule="evenodd" /><path fill="currentColor" d="M16.5 8.89h-2.65v.65h2.65z" /><path fill="currentColor" fillRule="evenodd" d="M13.457 10.826a2.37 2.37 0 0 1 1.783-.706c1.8 0 2.36 1.52 2.32 2.81h-3.41a1.08 1.08 0 0 0 1.16 1.22 1.1 1.1 0 0 0 1-.63h1.11a2.11 2.11 0 0 1-2.22 1.6 2.32 2.32 0 0 1-2.42-2.5 2.37 2.37 0 0 1 .677-1.794m.733.974a1 1 0 0 0-.06.32h2.11a1.3 1.3 0 0 0-.3-.76 1 1 0 0 0-.73-.26 1.15 1.15 0 0 0-.52.1 1 1 0 0 0-.34.27.9.9 0 0 0-.16.33" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M17.56 2H6a4 4 0 0 0-4 4v11.56a4 4 0 0 0 4 4h11.56a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2.5 15.56a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5V6A2.5 2.5 0 0 1 6 3.5h11.56a2.5 2.5 0 0 1 2.5 2.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Behance;
