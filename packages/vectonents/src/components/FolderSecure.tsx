import React from 'react';
interface FolderSecureProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderSecure: React.FC<FolderSecureProps> = ({
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
                    <path fill="currentColor" d="m15.08 15.67 1.55-1.8a.75.75 0 0 1 1.06-.13.76.76 0 0 1 .08 1.06l-1.55 1.79a.73.73 0 0 1-.57.26.7.7 0 0 1-.49-.18.74.74 0 0 1-.08-1" /><path fill="currentColor" fillRule="evenodd" d="M18.79 6.55H14a2 2 0 0 1-2-2 2 2 0 0 0-2-2H5.21a3.55 3.55 0 0 0-3.54 3.53v11.85a3.53 3.53 0 0 0 3.54 3.54h13.58a3.54 3.54 0 0 0 3.54-3.54V10.1a3.55 3.55 0 0 0-3.54-3.55M20 17.05l-3.1 2.26a.86.86 0 0 1-1 0l-3.1-2.26a.85.85 0 0 1-.32-.95l.67-3.2a1.29 1.29 0 0 1 1.27-1h4a1.31 1.31 0 0 1 1.28 1l.66 3.2a.83.83 0 0 1-.36.95" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.894 20.59h7.44a.786.786 0 0 1 0 1.572h-7.44A4.904 4.904 0 0 1 1 17.268V6.915A4.904 4.904 0 0 1 5.894 2h4.045a2.756 2.756 0 0 1 2.755 2.756A1.195 1.195 0 0 0 13.88 5.94h4.045a4.904 4.904 0 0 1 4.893 4.894.817.817 0 0 1-.786.828.754.754 0 0 1-.786-.755 3.343 3.343 0 0 0-3.322-3.395H13.88a2.756 2.756 0 0 1-2.756-2.756 1.195 1.195 0 0 0-1.184-1.163H5.894a3.32 3.32 0 0 0-3.322 3.322v10.353a3.32 3.32 0 0 0 3.322 3.322" /><path fill="currentColor" d="m18.07 15.382-1.52 1.949a.796.796 0 0 0 .137 1.11c.14.102.309.157.482.158a.78.78 0 0 0 .618-.304l1.53-1.95a.788.788 0 0 0-1.247-.963" /><path fill="currentColor" fillRule="evenodd" d="m22.115 14.24.692 3.363c.21.68-.045 1.417-.629 1.823l-3.259 2.369c-.59.42-1.38.42-1.97 0l-3.259-2.369a1.656 1.656 0 0 1-.629-1.907l.67-3.28a2.096 2.096 0 0 1 2.097-1.708h4.191a2.15 2.15 0 0 1 2.096 1.708m-4.118 6.234 3.259-2.347a.115.115 0 0 0 .084-.126l-.702-3.447a.576.576 0 0 0-.566-.461H15.88a.576.576 0 0 0-.566.46l-.702 3.354c-.052.126 0 .21 0 .21l3.26 2.357c.035.032.09.032.125 0" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderSecure;
