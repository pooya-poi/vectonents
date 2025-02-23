import React from 'react';
interface DocumentProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'filled-1' | 'filled-2' | 'filled-3' | 'outlined' | 'outlined-1' | 'outlined-2' | 'outlined-3';
    size?: number;
}
const Document: React.FC<DocumentProps> = ({
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
                    <path fill="currentColor" d="M15.19 8.66a2.21 2.21 0 0 0 2.22 2.2h4.31c.25.006.45.21.45.46v2.4a3.62 3.62 0 0 1-3.61 3.62H8.5c-2 0-3.62-1.62-3.62-3.62V7.5A3.62 3.62 0 0 1 8.5 3.89h6.24a.45.45 0 0 1 .45.45z" /><path fill="currentColor" d="M21.66 9.92h-4.13c-.74 0-1.34-.6-1.34-1.34V4.4a.5.5 0 0 1 .86-.35l5 5a.5.5 0 0 1-.39.87M18.73 18.3a3.62 3.62 0 0 1-3.23 2H5.44a3.61 3.61 0 0 1-3.61-3.62v-6.25a3.59 3.59 0 0 1 2.1-3.27 3.3 3.3 0 0 0 0 .55v6.22a4.37 4.37 0 0 0 4.32 4.37z" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M14.07 10.24h4.79a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4h-6.9a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.5.5 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46m-6.01.5a1 1 0 0 0-1 1l.01 1.39a1 1 0 0 0 1 1h1.39a1 1 0 0 0 1-1v-1.39a1 1 0 0 0-1-1zm-.25 4.44h4.43a.75.75 0 0 1 0 1.5H7.81a.75.75 0 0 1 0-1.5m0 4h5.9a.75.75 0 0 0 0-1.5h-5.9a.75.75 0 0 0 0 1.5" clipRule="evenodd" /><path fill="currentColor" d="M12.68 3.08v4.57c0 .823.667 1.49 1.49 1.49h4.62a.55.55 0 0 0 .39-1l-5.55-5.5a.56.56 0 0 0-.95.44" />
                </>
            ) : variants === 'filled-2' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M8 2h8.28a4 4 0 0 1 4 4v12.62a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m6.53 6.08h-6.7a.73.73 0 1 0 0 1.46h6.7a.73.73 0 1 0 0-1.46m-1.91 9.46H7.83a.73.73 0 1 1 0-1.46h4.79a.73.73 0 1 1 0 1.46m-4.79-4h8.62a.73.73 0 1 0 0-1.46H7.83a.73.73 0 1 0 0 1.46" clipRule="evenodd" />
                </>
            ) : variants === 'filled-3' ? (
                <>
                    <path fill="currentColor" d="M19 10.15h-4.84a2.45 2.45 0 0 1-2.44-2.46V2.93a.5.5 0 0 0-.5-.5H8.55a4 4 0 0 0-4 4v11.14a4 4 0 0 0 4 4h6.9a4 4 0 0 0 4-4v-6.92a.51.51 0 0 0-.45-.5" /><path fill="currentColor" d="M14.25 9.05h4.63a.56.56 0 0 0 .39-1L13.72 2.6a.56.56 0 0 0-1 .4v4.57a1.48 1.48 0 0 0 1.53 1.48" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m15.34 3.22 7 7c.141.14.22.331.22.53v1.73a4.75 4.75 0 0 1-2.73 4.29v.42a4.39 4.39 0 0 1-4.38 4.38H6.38A4.38 4.38 0 0 1 2 17.14V11.7a4.39 4.39 0 0 1 2.74-4A4.75 4.75 0 0 1 9.48 3h5.33c.2 0 .39.08.53.22m4.59 6.71-4.27-4.27v3.1c0 .646.524 1.17 1.17 1.17zm-1.6 7.26a2.88 2.88 0 0 1-2.88 2.88H6.38a2.88 2.88 0 0 1-2.88-2.88v-5.44a2.89 2.89 0 0 1 1.23-2.36v3.09a4.75 4.75 0 0 0 4.75 4.75h8.33q.262-.01.52-.05zm-8.85-1.46h8.33a3.26 3.26 0 0 0 3.25-3.25v-.9h-4.23a2.81 2.81 0 0 1-2.81-2.82V4.53H9.48a3.26 3.26 0 0 0-3.2 3.25v4.7a3.26 3.26 0 0 0 3.2 3.25" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M9.85 12.81H8.46a1 1 0 0 1-1-1.02V10.4a1 1 0 0 1 1-1h1.39a1 1 0 0 1 1 1v1.41a1 1 0 0 1-1 1m-.48-1.93h-.43v.43h.43z" clipRule="evenodd" /><path fill="currentColor" d="M8.13 15.34h4.43a.75.75 0 1 0 0-1.5H8.13a.75.75 0 0 0 0 1.5M14 16.37H8.13a.75.75 0 0 0 0 1.5H14a.75.75 0 1 0 0-1.5" /><path fill="currentColor" fillRule="evenodd" d="m19.53 9.44-7-7a.8.8 0 0 0-.53-.19H9A4.75 4.75 0 0 0 4.25 7v10A4.75 4.75 0 0 0 9 21.75h6A4.75 4.75 0 0 0 19.75 17v-7a.8.8 0 0 0-.22-.56m-6.78-4.65 4.46 4.46H14c-.69 0-1.25-.56-1.25-1.25zM5.75 17A3.26 3.26 0 0 0 9 20.25h6A3.26 3.26 0 0 0 18.25 17v-6.25H14A2.75 2.75 0 0 1 11.25 8V3.75H9A3.26 3.26 0 0 0 5.75 7z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-2' ? (
                <>
                    <path fill="currentColor" d="M7.99 9.53h6.7a.74.74 0 0 0 0-1.47h-6.7a.74.74 0 1 0 0 1.47M7.99 17.53h4.78a.74.74 0 1 0 0-1.47H7.99a.74.74 0 1 0 0 1.47M16.6 13.53H7.99a.74.74 0 1 1 0-1.47h8.61a.74.74 0 0 1 0 1.47" /><path fill="currentColor" fillRule="evenodd" d="M15.79 22.59h-7A4.8 4.8 0 0 1 4 17.79v-11A4.8 4.8 0 0 1 8.79 2h7a4.8 4.8 0 0 1 4.8 4.79v11a4.8 4.8 0 0 1-4.8 4.8m-7-19a3.21 3.21 0 0 0-3.2 3.2v11A3.21 3.21 0 0 0 8.79 21h7A3.21 3.21 0 0 0 19 17.79v-11a3.21 3.21 0 0 0-3.21-3.2z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-3' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m19.53 9.44-7-7a.8.8 0 0 0-.53-.19H9A4.75 4.75 0 0 0 4.25 7v10A4.75 4.75 0 0 0 9 21.75h6A4.75 4.75 0 0 0 19.75 17v-7a.8.8 0 0 0-.22-.56m-6.78-4.65 4.46 4.46H14c-.69 0-1.25-.56-1.25-1.25zM5.75 17A3.26 3.26 0 0 0 9 20.25h6A3.26 3.26 0 0 0 18.25 17v-6.25H14A2.75 2.75 0 0 1 11.25 8V3.75H9A3.26 3.26 0 0 0 5.75 7z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Document;
