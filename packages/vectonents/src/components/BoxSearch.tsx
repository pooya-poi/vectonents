import React from 'react';

interface BoxSearchProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const BoxSearch: React.FC<BoxSearchProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m19.59 5.46-5.85-3.25a3.13 3.13 0 0 0-3 0L4.89 5.46a3.09 3.09 0 0 0-1.58 2.7v6.3c0 .475.109.944.32 1.37l.14.22a4 4 0 0 0-.5 1.95 3.9 3.9 0 0 0 .52 1.93L2.31 21.5a.84.84 0 0 0 0 1.19.86.86 0 0 0 .59.24.82.82 0 0 0 .61-.27l1.41-1.46a3.75 3.75 0 0 0 2.18.7 3.84 3.84 0 0 0 3.2-1.75l.44.25a3.08 3.08 0 0 0 3 0l5.85-3.25a3.06 3.06 0 0 0 1.58-2.69v-6.3a3.09 3.09 0 0 0-1.58-2.7M8.79 19.31a2.07 2.07 0 0 1-1.69.89A2.17 2.17 0 0 1 5 18a2 2 0 0 1 .13-.74 2.12 2.12 0 0 1 2-1.48A2.18 2.18 0 0 1 9.23 18a2.14 2.14 0 0 1-.44 1.31M13.45 11l4.34-2.45h.04a.75.75 0 0 0-.73-1.31l-4.34 2.43a1 1 0 0 1-1 0L7.38 7.24a.75.75 0 1 0-.73 1.31L11 11c.154.085.32.149.49.19v5.7a.75.75 0 1 0 1.5 0v-5.7q.241-.067.46-.19" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M20.21 5.24 14.36 2a3.84 3.84 0 0 0-3.72 0L4.78 5.24a3.82 3.82 0 0 0-2 3.34v6.3c.004.62.155 1.23.44 1.78l.44.7a3.7 3.7 0 0 0-.16 1.06c.003.706.2 1.398.57 2L2.64 22a.75.75 0 0 0 0 1.06.72.72 0 0 0 .51.2.78.78 0 0 0 .58-.26l1.37-1.44a3.73 3.73 0 0 0 5-.39l.56.31a3.79 3.79 0 0 0 3.73 0l5.85-3.25a3.84 3.84 0 0 0 2-3.35v-6.3a3.82 3.82 0 0 0-2.03-3.34M7.36 20.83a2.42 2.42 0 0 1 0-4.83 2.42 2.42 0 0 1 0 4.83m12.12-3.95a2.33 2.33 0 0 0 1.2-2V8.55a2.33 2.33 0 0 0-1.2-2L13.63 3.3a2.3 2.3 0 0 0-2.27 0L5.51 6.58a2.33 2.33 0 0 0-1.2 2v6.3a2.3 2.3 0 0 0 .21.93 3.78 3.78 0 0 1 2.84-1.31 3.93 3.93 0 0 1 3.53 5.37l.47.26a2.3 2.3 0 0 0 2.27 0z" clipRule="evenodd" /><path fill="currentColor" d="M17.35 7.67 13 10.1a1 1 0 0 1-1 0L7.64 7.67a.74.74 0 0 0-1 .29.75.75 0 0 0 .29 1l4.37 2.43q.229.11.47.19v5.7a.75.75 0 0 0 1.5 0v-5.69q.237-.07.46-.18L18.08 9a.75.75 0 0 0-.73-1.31z" />
                </>
            ) : null}
        </svg>
    );
};

export default BoxSearch;
