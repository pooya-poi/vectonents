import React from 'react';
interface EditFolderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const EditFolder: React.FC<EditFolderProps> = ({
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
                    <path fill="currentColor" d="m15.908 15.137 1.982-1.992A.786.786 0 1 1 19 14.255l-1.981 1.993a.78.78 0 0 1-.556.23.74.74 0 0 1-.556-.23.776.776 0 0 1 0-1.112" /><path fill="currentColor" fillRule="evenodd" d="M18.949 6.194h-5.022a2.097 2.097 0 0 1-2.097-2.097A2.097 2.097 0 0 0 9.733 2H4.711A3.72 3.72 0 0 0 1 5.7v12.424a3.7 3.7 0 0 0 3.711 3.712H18.95a3.71 3.71 0 0 0 3.711-3.712V9.915a3.72 3.72 0 0 0-3.711-3.721m.996 8.932-4.079 3.89a1.37 1.37 0 0 1-.786.388l-2.202.335a.555.555 0 0 1-.65-.619l.346-2.096a1.3 1.3 0 0 1 .399-.745l4.099-3.89a2.097 2.097 0 0 1 2.915-.052 1.91 1.91 0 0 1-.042 2.789" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.887 20.565h5.944a.785.785 0 1 1 0 1.57H5.887A4.9 4.9 0 0 1 1 17.246V6.908A4.9 4.9 0 0 1 5.887 2h4.04a2.75 2.75 0 0 1 2.752 2.752c.005.651.532 1.177 1.182 1.183h4.04a4.9 4.9 0 0 1 4.887 4.887.816.816 0 0 1-.785.827.753.753 0 0 1-.785-.754 3.34 3.34 0 0 0-3.317-3.39h-4.04a2.75 2.75 0 0 1-2.752-2.753 1.193 1.193 0 0 0-1.182-1.161h-4.04A3.317 3.317 0 0 0 2.57 6.908v10.34a3.317 3.317 0 0 0 3.317 3.317" /><path fill="currentColor" fillRule="evenodd" d="M22.631 13.449a2.94 2.94 0 0 0-4.008 0l-4.07 3.893a2.1 2.1 0 0 0-.629 1.193l-.345 2.093c-.078.438.077.885.408 1.182.259.264.614.412.984.408h.209l2.177-.335a2.33 2.33 0 0 0 1.214-.596l4.06-3.893c.558-.52.876-1.247.879-2.01a2.66 2.66 0 0 0-.879-1.935m-1.14 2.815-4.072 3.893a.67.67 0 0 1-.345.167l-1.863.283.283-1.727a.52.52 0 0 1 .167-.304l4.06-3.892c.26-.24.6-.375.953-.377.32-.007.628.114.858.335.213.197.334.474.335.764a1.18 1.18 0 0 1-.377.858" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default EditFolder;
