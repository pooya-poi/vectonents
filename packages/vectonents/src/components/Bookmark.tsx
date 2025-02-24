import React from 'react';
interface BookmarkProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Bookmark: React.FC<BookmarkProps> = ({
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
                    <path fill="currentColor" d="m16.77 20.784-4.29-3.29a1.14 1.14 0 0 0-1.38 0l-4.33 3.29a1.09 1.09 0 0 1-1.77-.77V5.954a3.1 3.1 0 0 1 3.26-2.95h7a3.1 3.1 0 0 1 3.24 3v14.01a1.09 1.09 0 0 1-1.73.77" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M8.376 3.004h7.248a3.28 3.28 0 0 1 2.32.794A3.06 3.06 0 0 1 19 5.943v14.053a.98.98 0 0 1-.335.741c-.215.19-.503.284-.794.259-.254 0-.502-.08-.704-.23l-4.484-3.288a1.225 1.225 0 0 0-1.429 0l-4.442 3.288a1.2 1.2 0 0 1-.683.23 1.06 1.06 0 0 1-.794-.259.98.98 0 0 1-.335-.74V5.942a3.06 3.06 0 0 1 1.056-2.145 3.28 3.28 0 0 1 2.32-.794m5.27 13.284 3.78 2.799-.02-13.144c-.099-.871-.897-1.51-1.802-1.44H8.355c-.905-.07-1.704.569-1.802 1.44v13.144l3.78-2.799a2.81 2.81 0 0 1 3.313 0" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Bookmark;
