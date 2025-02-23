import React from 'react';

interface ShoppingCartHandyProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ShoppingCartHandy: React.FC<ShoppingCartHandyProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M13.6 9.28h5.52c1.4 0 2.44 1.57 2.1 3.23L20 19.19a2.33 2.33 0 0 1-2.09 2.09H6.13A2.33 2.33 0 0 1 4 19.19l-1.3-6.74c-.3-1.66.73-3.23 2.13-3.23h6L6.46 4a.82.82 0 0 1 1.26-1l4.57 5.38 4-5.35a.824.824 0 0 1 1.31 1zm-4.54 8.16a.8.8 0 0 0 .36-.08.82.82 0 0 0 .37-1.09L8.15 13a.82.82 0 1 0-1.46.72L8.32 17a.83.83 0 0 0 .74.44m3.27-.35a.81.81 0 0 1-.81-.81v-3a.82.82 0 0 1 .81-.82.82.82 0 0 1 .82.81v3a.81.81 0 0 1-.82.82m4-.09L18 13.72a.82.82 0 0 0-.4-1.09.81.81 0 0 0-1.09.37l-1.64 3.27a.8.8 0 0 0 .73 1.18.8.8 0 0 0 .73-.45" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M13.952 8.576h5.53c1.39 0 2.43 1.58 2.09 3.23l-1.22 6.69a2.32 2.32 0 0 1-2.09 2.08H6.482a2.32 2.32 0 0 1-2.13-2.08l-1.3-6.71c-.3-1.65.74-3.23 2.13-3.23h6l-4.37-5.21a.82.82 0 0 1 1.26-1l4.54 5.35 4-5.35a.81.81 0 0 1 1.18-.16.83.83 0 0 1 .16 1.15zm4.83 9.63 1.22-6.69a1.41 1.41 0 0 0-.25-1.17.42.42 0 0 0-.27-.17H5.222a.42.42 0 0 0-.27.17 1.41 1.41 0 0 0-.25 1.17l1.22 6.69c.08.47.36.74.52.74h11.82c.16 0 .44-.27.52-.74" clipRule="evenodd" /><path fill="currentColor" d="M12.652 11.766a.82.82 0 0 0-.82.82v3a.82.82 0 0 0 1.64-.01v-3a.82.82 0 0 0-.82-.81M8.502 12.346a.82.82 0 1 0-1.46.73l1.64 3.27a.8.8 0 0 0 .73.45.76.76 0 0 0 .36-.08.82.82 0 0 0 .37-1.1zM17.962 11.926a.81.81 0 0 0-1.1.37l-1.64 3.27a.82.82 0 0 0 .37 1.1.8.8 0 0 0 .36.08.8.8 0 0 0 .73-.45l1.67-3.27a.82.82 0 0 0-.39-1.1" />
                </>
            ) : null}
        </svg>
    );
};

export default ShoppingCartHandy;
