import React from 'react';
interface FolderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Folder: React.FC<FolderProps> = ({
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
                    <path fill="currentColor" d="M22 9.995v8.25C22 20.32 20.458 22 18.557 22H5.443C3.542 22 2 20.32 2 18.246V5.754C2 3.681 3.542 2 5.443 2h4.612C11.13 2 12 2.95 12 4.12c.017 1.158.883 2.086 1.945 2.086h4.612c.919 0 1.8.4 2.446 1.112A3.94 3.94 0 0 1 22 9.995" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6.401 2h3.97c1.724 0 3.12 1.503 3.12 3.358 0 .056.021.11.058.149.036.04.086.061.138.061h3.912c2.428.006 4.396 2.124 4.401 4.737v6.958c-.005 2.614-1.973 4.731-4.401 4.737H6.401C3.971 22 2 19.88 2 17.263V6.737c-.003-1.257.46-2.464 1.286-3.353S5.233 1.997 6.401 2m5.594 3.358c0-.983-.74-1.779-1.653-1.779H6.401c-1.62 0-2.934 1.414-2.934 3.158v10.526c0 1.744 1.314 3.158 2.934 3.158H17.57c1.62 0 2.934-1.414 2.934-3.158v-6.958c0-1.744-1.314-3.158-2.934-3.158h-3.912c-.918 0-1.663-.8-1.663-1.79" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Folder;
