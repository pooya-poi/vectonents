import React from 'react';
interface MenuProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'filled-1' | 'filled-2' | 'outlined' | 'outlined-1' | 'outlined-2';
    size?: number;
}
const Menu: React.FC<MenuProps> = ({
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
                    <path fill="currentColor" d="M5 5a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1M12 5a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1M19 5a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1" />
                </>
            ) : variants === 'filled-2' ? (
                <>
                    <path fill="currentColor" d="M11 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M21 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M11 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" d="M10 6h4a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2M14 11h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2M14 18h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M4.75 5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13A.74.74 0 0 0 4.75 5M11.75 5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13a.74.74 0 0 0-.75-.75M18.75 5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13a.74.74 0 0 0-.75-.75" />
                </>
            ) : variants === 'outlined-2' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" d="M9.75 5.5h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5M13.75 11h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5M13.75 18h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};
export default Menu;
