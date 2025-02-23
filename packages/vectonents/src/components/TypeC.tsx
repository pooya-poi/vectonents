import React from 'react';
interface TypeCProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const TypeC: React.FC<TypeCProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m18.575 4.281 1.42 1.42a2.12 2.12 0 0 1 0 2.964l-1.748 1.747a3.18 3.18 0 0 1-.815 3.007l-6.353 6.353a3.177 3.177 0 0 1-4.49 0l-.487-.487-1.482 1.482a.78.78 0 0 1-.561.233.77.77 0 0 1-.593-.254.783.783 0 0 1 0-1.122l1.482-1.483-.423-.413a3.176 3.176 0 0 1 0-4.5l6.353-6.353a3.18 3.18 0 0 1 2.954-.847l1.747-1.747a2.12 2.12 0 0 1 2.996 0m-1.79 5.22a.75.75 0 0 0 .562-.233.783.783 0 0 0 0-1.122l-1.228-1.228a.784.784 0 0 0-1.123 0 .794.794 0 0 0 0 1.122l1.229 1.228c.148.15.35.234.56.233" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m19.6 5.77-1.34-1.34a2 2 0 0 0-1.42-.58 2 2 0 0 0-1.41.58l-1.66 1.66a3 3 0 0 0-.66-.09 3 3 0 0 0-2.11.89l-6 6a3 3 0 0 0 0 4.24l.4.4-2.1 2.1a.74.74 0 0 0 0 1.06.73.73 0 0 0 .53.22c.199 0 .39-.078.53-.22l2.1-2.1.46.46a3 3 0 0 0 4.24 0l6-6a3 3 0 0 0 .8-2.78L19.6 8.6a2 2 0 0 0 0-2.83M16.08 12l-6 6A1.5 1.5 0 0 1 8 18l-1.95-1.94a1.5 1.5 0 0 1 0-2.12l6-6a1.52 1.52 0 0 1 1.61-.34l2.76 2.76a1.5 1.5 0 0 1-.34 1.64m1.12-3.13 1.34-1.31v-.02a.51.51 0 0 0 0-.71L17.2 5.49a.52.52 0 0 0-.71 0l-1.33 1.34c.02.06.07.06.07.06l1.91 1.91z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default TypeC;
