import React from 'react';
interface RemoveFolderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const RemoveFolder: React.FC<RemoveFolderProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M14.39 6h4.82a3.57 3.57 0 0 1 3.57 3.58v7.91a3.57 3.57 0 0 1-3.57 3.58H5.57A3.57 3.57 0 0 1 2 17.49V5.54A3.57 3.57 0 0 1 5.57 2h4.82a2 2 0 0 1 2 2 2 2 0 0 0 2 2m2.24 11.68h3.38a.75.75 0 0 0 0-1.5h-3.38a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.904 20.577h5.951a.786.786 0 1 1 0 1.572H5.904A4.904 4.904 0 0 1 1 17.256V6.914A4.914 4.914 0 0 1 5.904 2h4.044a2.756 2.756 0 0 1 2.756 2.756 1.184 1.184 0 0 0 1.184 1.184h4.044a4.904 4.904 0 0 1 4.893 4.903c0 .44-.347.8-.786.818a.754.754 0 0 1-.785-.744 3.353 3.353 0 0 0-3.322-3.406h-4.044a2.756 2.756 0 0 1-2.756-2.755 1.194 1.194 0 0 0-1.184-1.174H5.904a3.34 3.34 0 0 0-3.332 3.332v10.342a3.33 3.33 0 0 0 3.332 3.321" /><path fill="currentColor" d="M19.158 16.417h-2.452a.786.786 0 0 0 0 1.572h2.452a.786.786 0 1 0 0-1.572" /><path fill="currentColor" fillRule="evenodd" d="M12.976 15.108a2.88 2.88 0 0 1 2.86-2.882h4.192a2.88 2.88 0 0 1 2.902 2.882v4.19a2.88 2.88 0 0 1-2.881 2.882h-4.191a2.88 2.88 0 0 1-2.882-2.881zm2.881 5.5h4.192a1.31 1.31 0 0 0 1.31-1.31v-4.19a1.31 1.31 0 0 0-1.31-1.31h-4.191a1.31 1.31 0 0 0-1.31 1.31v4.19c0 .724.586 1.31 1.31 1.31" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default RemoveFolder;
