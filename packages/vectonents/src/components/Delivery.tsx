import React from 'react';

interface DeliveryProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Delivery: React.FC<DeliveryProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M15.047 17.807a2.32 2.32 0 0 1 2.14-1.45v-.042a2.32 2.32 0 0 1 2.332 2.321 2.321 2.321 0 1 1-4.472-.829m2.893.871a.753.753 0 0 0-.753-.753.763.763 0 0 0-.752.753.753.753 0 0 0 1.505 0M4.182 18.636a2.32 2.32 0 0 1 2.32-2.32 2.31 2.31 0 0 1 2.322 2.32 2.32 2.32 0 0 1-4.642 0m3.02-.235a.75.75 0 0 0-.7-.476v-.041a.753.753 0 0 0-.752.752.753.753 0 1 0 1.451-.235" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M22.383 9.708 21.285 8.61a2.1 2.1 0 0 0-1.421-.616h-4.998v-1.39a2.09 2.09 0 0 0-2.09-2.092H4.182A2.09 2.09 0 0 0 2.09 6.603V8.83h8.364a.805.805 0 0 1 .815.795.794.794 0 0 1-.815.773H2.09v8.51h1.317a2 2 0 0 1 0-.23 3.136 3.136 0 1 1 6.21-.042q.009.116 0 .23h4.485a2 2 0 0 1 0-.23 3.136 3.136 0 1 1 6.273 0q.008.116 0 .23h.533A2.09 2.09 0 0 0 23 16.776v-5.594a2.1 2.1 0 0 0-.617-1.474m-11.928 3.826H5.227a.784.784 0 0 1-.784-.773c0-.435.35-.789.784-.795h5.228c.434.006.784.36.784.795a.784.784 0 0 1-.784.774m5.676-1.17h5.228a.784.784 0 1 0 0-1.569H16.13a.784.784 0 0 0 0 1.569" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21.94 8.55 20.89 7.5A2.73 2.73 0 0 0 19 6.69h-4v-.58a2.75 2.75 0 0 0-2.75-2.75H4a.75.75 0 1 0 0 1.5h8.22c.69 0 1.25.56 1.25 1.25v6.33a.75.75 0 0 0 1.5 0V8.19h4c.331-.001.65.132.88.37l1.05 1c.143.148.246.33.3.53H17a.75.75 0 0 0 0 1.5h4.25v4.25a1.25 1.25 0 0 1-1.25 1.3h-1.11a2.5 2.5 0 0 0-4.89 0H8.66a2.48 2.48 0 1 0-.13 1.5h5.61a2.5 2.5 0 0 0 4.61 0H20a2.75 2.75 0 0 0 2.75-2.75V10.5a2.74 2.74 0 0 0-.81-1.95M6.22 18.48a.82.82 0 1 1 .78-.81.81.81 0 0 1-.78.81m9.462-.509a.82.82 0 1 0 1.516-.622.82.82 0 0 0-1.517.622" clipRule="evenodd" /><path fill="currentColor" d="M10.75 9a.76.76 0 0 0-.75-.75H2a.75.75 0 1 0 0 1.5h8a.76.76 0 0 0 .75-.75M10 11.25H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};

export default Delivery;
