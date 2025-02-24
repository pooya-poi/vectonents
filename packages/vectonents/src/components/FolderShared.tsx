import React from 'react';
interface FolderSharedProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const FolderShared: React.FC<FolderSharedProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M18.949 6.194h-5.022a2.097 2.097 0 0 1-2.097-2.097A2.097 2.097 0 0 0 9.733 2H4.711A3.72 3.72 0 0 0 1 5.7v12.424a3.7 3.7 0 0 0 3.711 3.712H18.95a3.71 3.71 0 0 0 3.711-3.712V9.915a3.72 3.72 0 0 0-3.711-3.721m-3.575 6.762a1.594 1.594 0 0 1 1.583-1.583h.608a1.594 1.594 0 0 1 1.604 1.583v.723a1.887 1.887 0 0 1-3.774 0zm-.063 6.783h3.858a1.416 1.416 0 0 0 1.373-1.73l-.105-.482a1.37 1.37 0 0 0-1.331-1.132h-3.69c-.66.005-1.22.482-1.332 1.132l-.105.482a1.415 1.415 0 0 0 1.332 1.73" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.894 20.592h7.441a.786.786 0 1 1 0 1.572h-7.44A4.905 4.905 0 0 1 1 17.27V6.915A4.905 4.905 0 0 1 5.894 2H9.94a2.756 2.756 0 0 1 2.756 2.756 1.195 1.195 0 0 0 1.184 1.185h4.046a4.905 4.905 0 0 1 4.894 4.894.82.82 0 0 1-.786.828.755.755 0 0 1-.786-.755 3.343 3.343 0 0 0-3.322-3.395H13.88a2.756 2.756 0 0 1-2.756-2.757A1.195 1.195 0 0 0 9.94 3.593H5.894a3.32 3.32 0 0 0-3.322 3.322V17.27a3.32 3.32 0 0 0 3.322 3.322" /><path fill="currentColor" fillRule="evenodd" d="M18.429 10.96h.597a2.38 2.38 0 0 1 2.42 2.37v.722a2.672 2.672 0 1 1-5.344 0v-.723a2.37 2.37 0 0 1 2.327-2.368m.304 4.193a1.1 1.1 0 0 0 1.1-1.1v-.724a.807.807 0 0 0-.807-.796h-.597a.796.796 0 0 0-.797.796v.723a1.1 1.1 0 0 0 1.1 1.1M20.588 17.27a2.18 2.18 0 0 1 2.096 1.76l.094.482a2.3 2.3 0 0 1-.461 1.897c-.4.5-1.006.79-1.646.786h-3.888c-.636 0-1.237-.29-1.635-.786a2.26 2.26 0 0 1-.471-1.897l.104-.482a2.17 2.17 0 0 1 2.097-1.76zm.083 3.353a.6.6 0 0 0 .43-.21.73.73 0 0 0 .136-.586l-.094-.482a.61.61 0 0 0-.566-.503h-3.7a.6.6 0 0 0-.555.503l-.094.482a.66.66 0 0 0 .136.587c.101.13.255.206.42.21z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default FolderShared;
