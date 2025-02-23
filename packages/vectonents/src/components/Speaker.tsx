import React from 'react';

interface SpeakerProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined' | 'filled-1' | 'outlined-1';
    size?: number;
}
const Speaker: React.FC<SpeakerProps> = ({
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
                    <path fill="currentColor" d="M12.5 8.19a.76.76 0 1 0 0-1.522.76.76 0 0 0 0 1.521M14.868 16a2.368 2.368 0 1 1-4.736 0 2.368 2.368 0 0 1 4.736 0" /><path fill="currentColor" fillRule="evenodd" d="M9.286 1h6.428A4.286 4.286 0 0 1 20 5.286v13.928a4.286 4.286 0 0 1-4.286 4.286H9.286A4.286 4.286 0 0 1 5 19.214V5.286A4.286 4.286 0 0 1 9.286 1m5.357 6.429a2.143 2.143 0 1 0-4.286 0 2.143 2.143 0 0 0 4.286 0M12.5 20.286a4.286 4.286 0 1 1 0-8.572 4.286 4.286 0 0 1 0 8.572" clipRule="evenodd" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" d="M14.83 5.28a5.09 5.09 0 0 1-5.67 0 .822.822 0 1 0-.91 1.37 6.74 6.74 0 0 0 7.5 0 .83.83 0 1 0-.92-1.37" /><path fill="currentColor" fillRule="evenodd" d="M14.56 1.61H9.44a6 6 0 0 0-6 6v8.78a6 6 0 0 0 6 6h5.12a6 6 0 0 0 6-6V7.61a6 6 0 0 0-6-6m-4.2 13.53a3.5 3.5 0 0 1 1.64-.43 3.5 3.5 0 0 1 1.64.43c-1.09.11-2.19.11-3.28 0M17 14.4l1.73-.57V7.61a4.17 4.17 0 0 0-4.17-4.17H9.44a4.17 4.17 0 0 0-4.16 4.17v6.22l1.69.57c.39.14.8.25 1.2.35A5.26 5.26 0 0 1 12 13.06a5.26 5.26 0 0 1 3.8 1.69c.4-.1.8-.21 1.2-.35" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M8 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0m1.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M15 2H9a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2.5 17a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 19V6A2.5 2.5 0 0 1 9 3.5h6A2.5 2.5 0 0 1 17.5 6z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" d="M15.75 6.65A6.76 6.76 0 0 1 12 7.79a6.76 6.76 0 0 1-3.75-1.14.822.822 0 0 1 .91-1.37 5.09 5.09 0 0 0 5.67 0 .83.83 0 1 1 .92 1.37" /><path fill="currentColor" fillRule="evenodd" d="M14.56 1.61H9.44a6 6 0 0 0-6 6v8.78a6 6 0 0 0 6 6h5.12a6 6 0 0 0 6-6V7.61a6 6 0 0 0-6-6M9.44 3.44h5.12a4.17 4.17 0 0 1 4.17 4.17v6.55l-1.92.55c-.193.055-.391.1-.591.147l-.27.063v-.09A5.22 5.22 0 0 0 12 13.06a5.22 5.22 0 0 0-3.9 1.77s0 .06-.06.09q-.15-.037-.3-.072-.277-.063-.55-.138l-1.92-.55V7.61a4.17 4.17 0 0 1 4.17-4.17M12 14.71a3.47 3.47 0 0 0-1.87.56c1.243.13 2.497.13 3.74 0a3.47 3.47 0 0 0-1.87-.56m2.56 5.85H9.44a4.17 4.17 0 0 1-4.17-4.17v-.52l1.47.42c1.712.479 3.482.718 5.26.71a19.2 19.2 0 0 0 5.26-.74l1.47-.42v.52a4.17 4.17 0 0 1-4.17 4.2" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Speaker;