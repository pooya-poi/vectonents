import React from 'react';
interface LayerProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Layer: React.FC<LayerProps> = ({
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
            // No filled SVG content provided
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m10.27 13.61-7.92-4a1 1 0 0 1 0-1.65l7.92-4a3 3 0 0 1 2.55-.05l8.79 4a1 1 0 0 1 0 1.75l-8.79 4a3 3 0 0 1-2.55-.05m1.38-8.5a1.44 1.44 0 0 0-.65.15L4 8.75l7 3.48c.202.1.425.152.65.15.207.002.412-.042.6-.13l7.71-3.5-7.71-3.51a1.4 1.4 0 0 0-.6-.13" clipRule="evenodd" /><path fill="currentColor" d="m21.29 12.05-8.85 3.69a2 2 0 0 1-1.71 0l-7.84-3.68a.754.754 0 0 0-.63 1.37l7.82 3.62a3.6 3.6 0 0 0 1.56.37 3.3 3.3 0 0 0 1.4-.31l8.82-3.67a.75.75 0 1 0-.57-1.39" /><path fill="currentColor" d="m21.29 15.13-8.85 3.69a2 2 0 0 1-1.71 0l-7.84-3.67a.75.75 0 1 0-.63 1.36l7.82 3.62a3.4 3.4 0 0 0 1.55.37 3.3 3.3 0 0 0 1.37-.31l8.82-3.67a.75.75 0 0 0 .41-1 .77.77 0 0 0-.94-.39" />
                </>
            ) : null}
        </svg>
    );
};
export default Layer;
