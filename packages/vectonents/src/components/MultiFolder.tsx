import React from 'react';
interface MultiFolderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const MultiFolder: React.FC<MultiFolderProps> = ({
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
                    <path fill="currentColor" d="M9.983 4.812h-4.57c-1.34 0-2.603.628-3.413 1.695V5.391A3.4 3.4 0 0 1 5.412 2h4.57a1.917 1.917 0 0 1 1.928 1.917 1.927 1.927 0 0 0 1.927 1.916h4.55a3.4 3.4 0 0 1 3.412 3.381v1.127a4.29 4.29 0 0 0-3.412-1.696h-4.57a1.053 1.053 0 0 1-1.054-1.127 2.74 2.74 0 0 0-2.78-2.706" /><path fill="currentColor" d="M21.82 19.135v-6.32a3.4 3.4 0 0 0-3.412-3.38h-4.57a1.927 1.927 0 0 1-1.928-1.917 1.917 1.917 0 0 0-1.927-1.916h-4.57A3.4 3.4 0 0 0 2 8.982v10.153a3.4 3.4 0 0 0 3.412 3.39h12.996a3.4 3.4 0 0 0 3.412-3.39" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.3 3.28H4.11a.64.64 0 0 1 0-1.28h8.19a2.34 2.34 0 0 1 2.34 2.35c.032.562.497 1 1.06 1h4.94a.65.65 0 1 1 0 1.29H15.7a2.34 2.34 0 0 1-2.34-2.3 1.07 1.07 0 0 0-1.06-1.06" /><path fill="currentColor" fillRule="evenodd" d="M17.73 7.75h-4a.41.41 0 0 1-.41-.41 3 3 0 0 0-3-3h-4A4.3 4.3 0 0 0 2 8.64v9a4.3 4.3 0 0 0 4.29 4.29h11.44A4.3 4.3 0 0 0 22 17.64v-5.61a4.29 4.29 0 0 0-4.27-4.28m3 9.89a3 3 0 0 1-3 3H6.27a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h4A1.7 1.7 0 0 1 12 7.34a1.7 1.7 0 0 0 1.7 1.69h4a3 3 0 0 1 3 3z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default MultiFolder;
