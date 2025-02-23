import React from 'react';

interface SimcardProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Simcard: React.FC<SimcardProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M11.138 2h6.4a2.57 2.57 0 0 1 2.464 2.667V19.6a2.57 2.57 0 0 1-2.464 2.666H6.466A2.57 2.57 0 0 1 4.002 19.6V9.776a2.74 2.74 0 0 1 .725-1.91L9.39 2.78A2.38 2.38 0 0 1 11.138 2m4.832 14.101h.298a.768.768 0 0 0 0-1.536H12.77v-.992a.768.768 0 0 0-1.536 0v.992h-.299a.768.768 0 0 0 0 1.536h.299v1.365a.768.768 0 1 0 1.536 0v-1.365h1.664v1.365a.768.768 0 1 0 1.536 0z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.222 14.78h3.28a.72.72 0 1 1 0 1.44h-.28v1.28a.72.72 0 0 1-1.44 0v-1.28h-1.56v1.28a.72.72 0 0 1-1.44 0v-1.28h-.28a.72.72 0 1 1 0-1.44h.28v-.93a.72.72 0 1 1 1.44 0z" /><path fill="currentColor" fillRule="evenodd" d="M16.692 3h-6a2.23 2.23 0 0 0-1.64.73L4.682 8.5a2.57 2.57 0 0 0-.68 1.79v9.21a2.41 2.41 0 0 0 2.31 2.5h10.38a2.41 2.41 0 0 0 2.31-2.5v-14a2.41 2.41 0 0 0-2.31-2.5m.63 16.5a.76.76 0 0 1-.63.82H6.312a.76.76 0 0 1-.63-.82v-9.21a1 1 0 0 1 .23-.63l4.42-4.79a.54.54 0 0 1 .4-.19h6a.76.76 0 0 1 .63.82z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Simcard;
