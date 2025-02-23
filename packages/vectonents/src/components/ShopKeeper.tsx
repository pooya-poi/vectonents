import React from 'react';

interface ShopKeeperProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ShopKeeper: React.FC<ShopKeeperProps> = ({
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
                    <path fill="currentColor" d="M13 7.5a2.5 2.5 0 0 0 5 0V6.1A2.1 2.1 0 0 0 15.9 4h-.8A2.1 2.1 0 0 0 13 6.1z" /><path fill="currentColor" fillRule="evenodd" d="M11.07 12.66 11 13H8.908a2.25 2.25 0 0 0-.328-1.25l-.67-1.22A2.92 2.92 0 0 0 6.53 9.3l-1.3-.56A2 2 0 0 0 2.54 11l.19 2.16q.006.138.03.27c-.463.367-.76.934-.76 1.57v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-.229l-.05-.34a2.19 2.19 0 0 0-2.12-1.81h-4.41a2.19 2.19 0 0 0-2.12 1.81M5 17.25h14a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M18 7.5a2.5 2.5 0 0 1-5 0V6.1c0-1.16.94-2.1 2.1-2.1h.8c1.16 0 2.1.94 2.1 2.1zm-2.9-2a.6.6 0 0 0-.6.6v1.4a1 1 0 1 0 2 0V6.1a.6.6 0 0 0-.6-.6z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m20 12.47.08.53A2 2 0 0 1 22 15v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 .88-1.67 2 2 0 0 1-.18-.64l-.19-1.92a2 2 0 0 1 2.72-2.05l1.3.5a2.78 2.78 0 0 1 1.38 1.15l.67 1.08A2 2 0 0 1 8.81 13h1.82l.11-.53a2.73 2.73 0 0 1 2.63-2.22h4A2.73 2.73 0 0 1 20 12.47m-6.58-.71a1.23 1.23 0 0 0-1.16 1l-.05.27h6.36v-.27a1.19 1.19 0 0 0-1.15-1zm-9.27-1.51a.5.5 0 0 1 .36-.17.4.4 0 0 1 .18 0l1.3.5c.269.1.497.287.65.53l.66 1.09a.45.45 0 0 1 0 .49.46.46 0 0 1-.42.25H4.71a.5.5 0 0 1-.49-.44L4 10.62a.5.5 0 0 1 .15-.37M20 18.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default ShopKeeper;
