import React from 'react';
interface FolderMarkedProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderMarked: React.FC<FolderMarkedProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M13.927 6.194h5.022a3.72 3.72 0 0 1 3.711 3.721v8.21a3.71 3.71 0 0 1-3.711 3.71H4.71A3.7 3.7 0 0 1 1 18.126V5.7A3.72 3.72 0 0 1 4.711 2h5.022c1.158 0 2.097.939 2.097 2.097s.939 2.097 2.097 2.097m2.61 12.675 3.146-3.24-.021-.031a.786.786 0 0 0-1.133-1.049l-2.631 2.695-1.049-1.049a.786.786 0 0 0-1.048 1.143l1.636 1.552c.142.14.334.22.534.22a.8.8 0 0 0 .566-.241" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.893 20.589h5.952a.786.786 0 1 1 0 1.572H5.893A4.904 4.904 0 0 1 1 17.267V6.914A4.904 4.904 0 0 1 5.893 2h4.045a2.756 2.756 0 0 1 2.756 2.756 1.195 1.195 0 0 0 1.184 1.184h4.045a4.904 4.904 0 0 1 4.893 4.893.817.817 0 0 1-.786.828.754.754 0 0 1-.786-.754 3.343 3.343 0 0 0-3.321-3.395h-4.045a2.756 2.756 0 0 1-2.756-2.756 1.195 1.195 0 0 0-1.184-1.163H5.893a3.32 3.32 0 0 0-3.321 3.321v10.353a3.32 3.32 0 0 0 3.321 3.322" /><path fill="currentColor" d="m19.023 15.444-1.77 1.813-.63-.598a.786.786 0 1 0-1.047 1.143l1.184 1.131c.147.14.342.218.544.22a.8.8 0 0 0 .566-.24l2.316-2.369a.79.79 0 1 0-1.132-1.1z" /><path fill="currentColor" fillRule="evenodd" d="M15.743 12.09h4.192a2.976 2.976 0 0 1 2.965 2.977v4.191a2.965 2.965 0 0 1-2.965 2.965h-4.192a2.976 2.976 0 0 1-2.976-2.965v-4.191a2.976 2.976 0 0 1 2.976-2.976m4.192 8.384c.67 0 1.215-.545 1.215-1.216v-4.191a1.215 1.215 0 0 0-1.215-1.226h-4.192c-.677 0-1.226.549-1.226 1.226v4.191a1.216 1.216 0 0 0 1.226 1.216z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderMarked;
