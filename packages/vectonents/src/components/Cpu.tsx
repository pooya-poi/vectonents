import React from 'react';

interface CpuProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Cpu: React.FC<CpuProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M19.818 13.246h3.136a.784.784 0 1 1 0 1.568h-3.136v.261a4.18 4.18 0 0 1-4.182 4.182h-.261v3.137a.784.784 0 1 1-1.568 0v-3.137h-2.614v3.137a.784.784 0 1 1-1.568 0v-3.137h-.261a4.18 4.18 0 0 1-4.182-4.182v-.26H2.045a.784.784 0 0 1 0-1.57h3.137v-2.613H2.045a.784.784 0 0 1 0-1.568h3.137v-.261A4.18 4.18 0 0 1 9.364 4.62h.261V1.485a.784.784 0 0 1 1.568 0V4.62h2.614V1.485a.784.784 0 0 1 1.568 0V4.62h.261a4.18 4.18 0 0 1 4.182 4.182v.261h3.136a.784.784 0 1 1 0 1.568h-3.136zm-3.749 2.262c.393-.392.613-.923.613-1.478V9.848a2.09 2.09 0 0 0-2.091-2.09h-4.182a2.09 2.09 0 0 0-2.09 2.09v4.182a2.09 2.09 0 0 0 2.09 2.09h4.182c.554 0 1.086-.22 1.478-.612" clipRule="evenodd" /><path fill="currentColor" d="M9.364 9.803a1 1 0 0 1 1-1h4.272a1 1 0 0 1 1 1v4.272a1 1 0 0 1-1 1h-4.272a1 1 0 0 1-1-1z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M10 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m4 6.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M19 13.25h3a.75.75 0 0 1 0 1.5h-3V15a4 4 0 0 1-4 4h-.25v3a.75.75 0 0 1-1.5 0v-3h-2.5v3a.75.75 0 0 1-1.5 0v-3H9a4 4 0 0 1-4-4v-.25H2a.75.75 0 0 1 0-1.5h3v-2.5H2a.75.75 0 0 1 0-1.5h3V9a4 4 0 0 1 4-4h.25V2a.75.75 0 0 1 1.5 0v3h2.5V2a.75.75 0 0 1 1.5 0v3H15a4 4 0 0 1 4 4v.25h3a.75.75 0 0 1 0 1.5h-3zm-4 4.25a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 15 6.5H9A2.5 2.5 0 0 0 6.5 9v6A2.5 2.5 0 0 0 9 17.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Cpu;
