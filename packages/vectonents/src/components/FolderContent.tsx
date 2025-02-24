import React from 'react';
interface FolderContentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderContent: React.FC<FolderContentProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M18.75 4.75v3.68A3.31 3.31 0 0 1 22 11.64v7.13A3.33 3.33 0 0 1 18.54 22H5.46A3.33 3.33 0 0 1 2 18.77V8a3.31 3.31 0 0 1 3.25-3.25A2.75 2.75 0 0 1 8 2h8a2.75 2.75 0 0 1 2.75 2.75m-8.69 0A1.89 1.89 0 0 1 12 6.58a1.89 1.89 0 0 0 1.94 1.83h3.31V4.75c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M18.75 8.55V4.7A2.75 2.75 0 0 0 16 2H8a2.75 2.75 0 0 0-2.75 2.7v.45A4.29 4.29 0 0 0 2 9.3v9a4.3 4.3 0 0 0 4.29 4.29h11.44A4.3 4.3 0 0 0 22 18.3v-5.6a4.29 4.29 0 0 0-3.25-4.15M8 3.45h8c.69 0 1.25.56 1.25 1.25v3.71H13.7a.41.41 0 0 1-.41-.41 3 3 0 0 0-3-3H6.75v-.3c0-.69.56-1.25 1.25-1.25m9.73 17.85a3 3 0 0 0 3-3l-.03-5.6a3 3 0 0 0-3-3h-4A1.7 1.7 0 0 1 12 8a1.7 1.7 0 0 0-1.73-1.7h-4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderContent;
