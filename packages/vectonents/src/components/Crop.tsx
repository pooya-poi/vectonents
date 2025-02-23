import React from 'react';
interface CropProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'filled-1' | 'outlined' | 'outlined-1';
    size?: number;
}
const Crop: React.FC<CropProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M15.56 2.44H8.44a6 6 0 0 0-6 6v7.12a6 6 0 0 0 6 6h7.12a6 6 0 0 0 6-6V8.44a6 6 0 0 0-6-6M5.36 8.07a.76.76 0 0 1 .75-.75h1.21V6.11a.75.75 0 0 1 1.5 0v1.21h4.93a2.94 2.94 0 0 1 2.93 2.93V14a.75.75 0 1 1-1.5 0v-3.75a1.44 1.44 0 0 0-1.43-1.43H6.11a.75.75 0 0 1-.75-.75m11.32 8.61h1.21v-.04a.75.75 0 1 0 0-1.5h-7.64a1.44 1.44 0 0 1-1.43-1.43V10a.75.75 0 1 0-1.5 0v3.75a2.94 2.94 0 0 0 2.93 2.93h4.93v1.21a.75.75 0 0 0 1.5 0z" clipRule="evenodd" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" d="M6.9 16.53a.23.23 0 0 1 .23-.23h.34a.23.23 0 0 1 .23.23v.34a.23.23 0 0 1-.23.23h-.34a.23.23 0 0 1-.23-.23zM16.3 16.53a.23.23 0 0 1 .23-.23h.34a.23.23 0 0 1 .23.23v.34a.23.23 0 0 1-.23.23h-.34a.23.23 0 0 1-.23-.23zM6.9 7.13a.23.23 0 0 1 .23-.23h.34a.23.23 0 0 1 .23.23v.34a.23.23 0 0 1-.23.23h-.34a.23.23 0 0 1-.23-.23z" /><path fill="currentColor" fillRule="evenodd" d="M15.56 2.44H8.44a6 6 0 0 0-6 6v7.12a6 6 0 0 0 6 6h7.12a6 6 0 0 0 6-6V8.44a6 6 0 0 0-6-6M5.35 7.13c0-.983.797-1.78 1.78-1.78h.35a1.79 1.79 0 0 1 1.66 1.18h3.57a.78.78 0 0 1 0 1.55H9.14a1.78 1.78 0 0 1-1.66 1.17h-.35a1.78 1.78 0 0 1-1.78-1.77zm2.13 11.52a1.78 1.78 0 0 0 1.77-1.78v-.35a1.78 1.78 0 0 0-1.17-1.66v-3.57a.77.77 0 0 0-.78-.77.76.76 0 0 0-.77.77v3.57a1.79 1.79 0 0 0-1.18 1.66v.35c0 .983.797 1.78 1.78 1.78zm11.17-1.78a1.78 1.78 0 0 1-1.78 1.78h-.35a1.79 1.79 0 0 1-1.66-1.18h-3.57a.76.76 0 0 1-.77-.77.77.77 0 0 1 .77-.78h3.57a1.78 1.78 0 0 1 1.66-1.17h.35c.98 0 1.774.79 1.78 1.77zm-1.18-7.73a1.79 1.79 0 0 0 1.18-1.66v-.35a1.78 1.78 0 0 0-1.78-1.78h-.35c-.98.006-1.77.8-1.77 1.78v.35a1.78 1.78 0 0 0 1.17 1.66v3.57a.78.78 0 0 0 1.55 0z" clipRule="evenodd" /><path fill="currentColor" d="M16.3 7.13a.23.23 0 0 1 .23-.23h.34a.23.23 0 0 1 .23.23v.34a.23.23 0 0 1-.23.23h-.34a.23.23 0 0 1-.23-.23z" />
                </>
            ) :


                variants === 'outlined' ? (
                    <>
                        <path fill="currentColor" d="M14.7 6.67a2.63 2.63 0 0 1 2.63 2.63V15a.75.75 0 0 0 1.5 0V9.3a4.13 4.13 0 0 0-4.13-4.13h-8V2.88a.75.75 0 0 0-1.5 0v2.29H2.88a.75.75 0 1 0 0 1.5z" /><path fill="currentColor" d="M21.12 17.33H9.3a2.63 2.63 0 0 1-2.63-2.63V9a.75.75 0 1 0-1.5 0v5.7a4.13 4.13 0 0 0 4.13 4.13h8v2.29a.75.75 0 0 0 1.5 0v-2.29h2.29a.75.75 0 0 0 0-1.5z" />
                    </>
                ) : variants === 'outlined-1' ? (
                    <>
                        <path fill="currentColor" fillRule="evenodd" d="M15.42 4.65a.75.75 0 0 1-.75.75H7.24v.09a1.76 1.76 0 0 1-1.75 1.75H3.81a1.76 1.76 0 0 1-1.75-1.75V3.81a1.76 1.76 0 0 1 1.75-1.75h1.68a1.76 1.76 0 0 1 1.75 1.75v.09h7.43a.75.75 0 0 1 .75.75M5.49 5.74a.25.25 0 0 0 .25-.25V3.81a.25.25 0 0 0-.25-.25H3.81a.26.26 0 0 0-.25.25v1.68c0 .138.112.25.25.25zM18.51 2.06h1.68a1.76 1.76 0 0 1 1.75 1.75v1.68a1.76 1.76 0 0 1-1.75 1.75h-.09v7.43a.75.75 0 0 1-1.5 0V7.24h-.09a1.76 1.76 0 0 1-1.75-1.75V3.81a1.76 1.76 0 0 1 1.75-1.75m1.68 3.68a.25.25 0 0 0 .25-.25V3.81a.26.26 0 0 0-.25-.25h-1.68a.25.25 0 0 0-.25.25v1.68c0 .138.112.25.25.25zM5.4 16.76h.09a1.76 1.76 0 0 1 1.75 1.75v1.68a1.76 1.76 0 0 1-1.75 1.75H3.81a1.76 1.76 0 0 1-1.75-1.75v-1.68a1.76 1.76 0 0 1 1.75-1.75h.09V9.33a.75.75 0 1 1 1.5 0zm.09 3.68a.25.25 0 0 0 .25-.25v-1.68a.25.25 0 0 0-.25-.25H3.81a.25.25 0 0 0-.25.25v1.68a.26.26 0 0 0 .25.25zM18.51 16.76h1.68a1.76 1.76 0 0 1 1.75 1.75v1.68a1.76 1.76 0 0 1-1.75 1.75h-1.68a1.76 1.76 0 0 1-1.75-1.75v-.09H9.33a.75.75 0 0 1 0-1.5h7.43v-.09a1.76 1.76 0 0 1 1.75-1.75m1.68 3.68a.26.26 0 0 0 .25-.25v-1.68a.25.25 0 0 0-.25-.25h-1.68a.25.25 0 0 0-.25.25v1.68c0 .138.112.25.25.25z" clipRule="evenodd" />
                    </>
                ) : null}

        </svg>
    );
};
export default Crop;
