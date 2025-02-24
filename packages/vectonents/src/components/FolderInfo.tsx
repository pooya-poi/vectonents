import React from 'react';
interface FolderInfoProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderInfo: React.FC<FolderInfoProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M18.948 6.194h-5.011a2.097 2.097 0 0 1-2.097-2.097A2.097 2.097 0 0 0 9.743 2H4.722A3.72 3.72 0 0 0 1 5.7v12.424a3.72 3.72 0 0 0 3.722 3.722h14.226a3.72 3.72 0 0 0 3.722-3.722V9.915a3.72 3.72 0 0 0-3.722-3.721m.577 11.72a.786.786 0 0 1-1.573 0v-1.373a.786.786 0 0 1 1.573 0zm-.776-2.725c.425 0 .77-.341.776-.766l.01-.02a.786.786 0 1 0-.786.786" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.894 20.592h5.953a.786.786 0 1 1 0 1.572H5.894A4.905 4.905 0 0 1 1 17.269V6.916A4.905 4.905 0 0 1 5.894 2H9.94a2.756 2.756 0 0 1 2.756 2.756 1.195 1.195 0 0 0 1.184 1.185h4.045a4.905 4.905 0 0 1 4.895 4.894.817.817 0 0 1-.787.828.755.755 0 0 1-.786-.755 3.343 3.343 0 0 0-3.322-3.395H13.88a2.756 2.756 0 0 1-2.756-2.757A1.195 1.195 0 0 0 9.94 3.593H5.894a3.32 3.32 0 0 0-3.322 3.322V17.27a3.32 3.32 0 0 0 3.322 3.322" /><path fill="currentColor" d="M17.066 15.635c0-.434.352-.786.786-.786a.775.775 0 0 1 .786.796.775.775 0 0 1-.786.776.786.786 0 0 1-.786-.786M17.066 17.752a.796.796 0 0 1 .786-.787c.434 0 .786.352.786.787v1.383a.786.786 0 1 1-1.572 0z" /><path fill="currentColor" fillRule="evenodd" d="M15.756 12.208h4.192a2.88 2.88 0 0 1 2.882 2.882v4.192a2.88 2.88 0 0 1-2.882 2.882h-4.192a2.88 2.88 0 0 1-2.882-2.882V15.09a2.88 2.88 0 0 1 2.882-2.882m4.192 8.384a1.31 1.31 0 0 0 1.31-1.31V15.09a1.31 1.31 0 0 0-1.31-1.31h-4.192a1.31 1.31 0 0 0-1.31 1.31v4.192c0 .723.587 1.31 1.31 1.31z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderInfo;
