import React from 'react';
interface OpenedFolderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const OpenedFolder: React.FC<OpenedFolderProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M21.45 10.13v.28a2.74 2.74 0 0 1 .55 2.21l-2.08 6.5a2.75 2.75 0 0 1-2.56 1.76H4.7A2.76 2.76 0 0 1 2 18.15V6.88a3.75 3.75 0 0 1 3.7-3.75H10a2.5 2.5 0 0 1 2.5 2.5 1 1 0 0 0 1 1H18a3.5 3.5 0 0 1 3.45 3.5M5.7 4.63a2.25 2.25 0 0 0-2.25 2.25V14l1.07-2.78a2.75 2.75 0 0 1 2.58-1.8h12.25a3 3 0 0 1 .52 0A2 2 0 0 0 18 8.13h-4.5a2.51 2.51 0 0 1-2.5-2.5 1 1 0 0 0-1-1z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21.46 10.23a.9.9 0 0 0 0-.23 3.5 3.5 0 0 0-3.5-3.5H13.5a1 1 0 0 1-1-1A2.5 2.5 0 0 0 10 3H5.75A3.75 3.75 0 0 0 2 6.75v11.27a2.76 2.76 0 0 0 2.75 2.73h12.66a2.76 2.76 0 0 0 2.56-1.76l2.09-6.5a2.76 2.76 0 0 0-.6-2.26M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5H10a1 1 0 0 1 1 1A2.51 2.51 0 0 0 13.5 8H18a2 2 0 0 1 1.87 1.29 3 3 0 0 0-.52 0H7.15a2.75 2.75 0 0 0-2.58 1.8L3.5 13.87zm13.91 12.5c.507 0 .962-.31 1.15-.78l2.08-6.35a1.2 1.2 0 0 0-.29-.93 1.26 1.26 0 0 0-1-.44H7.15a1.26 1.26 0 0 0-1.18.82L3.5 18.12a1.26 1.26 0 0 0 1.25 1.13z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default OpenedFolder;
