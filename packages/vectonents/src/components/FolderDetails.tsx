import React from 'react';
interface FolderDetailsProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderDetails: React.FC<FolderDetailsProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M13.937 6.194h5.011a3.72 3.72 0 0 1 3.722 3.721v8.21a3.72 3.72 0 0 1-3.722 3.72H4.722A3.72 3.72 0 0 1 1 18.126V5.7A3.72 3.72 0 0 1 4.722 2h5.021c1.159 0 2.097.939 2.097 2.097s.939 2.097 2.097 2.097m4.665 6.29H13.57a.786.786 0 1 0 0 1.572h5.032a.786.786 0 0 0 0-1.572m-2.935 7.213H13.57a.797.797 0 0 1-.786-.797.786.786 0 0 1 .786-.776h2.097c.43 0 .78.346.786.776a.797.797 0 0 1-.818.828zm-2.097-2.82h7.003a.786.786 0 1 0 0-1.573H13.57a.786.786 0 0 0 0 1.572" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M9.94 3.593H5.893a3.32 3.32 0 0 0-3.322 3.322V17.27a3.32 3.32 0 0 0 3.322 3.322h5.953a.786.786 0 0 1 0 1.572H5.894A4.905 4.905 0 0 1 1 17.27V6.915A4.905 4.905 0 0 1 5.894 2H9.94a2.756 2.756 0 0 1 2.756 2.756A1.195 1.195 0 0 0 13.88 5.94h4.045a4.904 4.904 0 0 1 4.894 4.895.817.817 0 0 1-.786.827.754.754 0 0 1-.786-.754 3.343 3.343 0 0 0-3.322-3.396H13.88a2.756 2.756 0 0 1-2.757-2.756A1.195 1.195 0 0 0 9.94 3.593" /><path fill="currentColor" d="M14.268 14.115c0-.434.351-.786.785-.786h5.03a.786.786 0 1 1 0 1.572h-5.03a.786.786 0 0 1-.786-.786M15.054 20.58h2.095a.786.786 0 0 1 0 1.573h-2.096a.786.786 0 1 1 0-1.572M15.054 16.955a.786.786 0 1 0 0 1.572h7a.786.786 0 1 0 0-1.572z" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderDetails;
