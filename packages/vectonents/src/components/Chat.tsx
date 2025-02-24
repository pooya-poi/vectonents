import React from 'react';
interface ChatProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined' | 'filled-1' | 'outlined-1';
    size?: number;
}
const Chat: React.FC<ChatProps> = ({
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
                    <path fill="currentColor" d="M21.08 12.92c-.6 4.59-5.14 8.31-9.77 8.31H4.64a1.61 1.61 0 0 1-1.42-2.37l.27-.51a1.58 1.58 0 0 0 0-1.6 9.61 9.61 0 1 1 17.64-3.83z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M9.5 2.22A10 10 0 0 1 11.57 2a9.61 9.61 0 0 1 9.57 10.9c-.6 4.6-5.14 8.32-9.78 8.32H4.7a1.61 1.61 0 0 1-1.42-2.37l.27-.52a1.59 1.59 0 0 0-.05-1.59 9.6 9.6 0 0 1 6-14.52m1.78 17.49a8.57 8.57 0 0 0 8.29-7 8 8 0 0 0-1.91-6.44 8.1 8.1 0 0 0-6.09-2.77 9 9 0 0 0-1.76.18 8.11 8.11 0 0 0-5.1 12.24c.598.94.64 2.13.11 3.11l-.27.51a.1.1 0 0 0 0 .11c.04.06.1.06.1.06z" clipRule="evenodd" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M17.562 2H6.442a4.6 4.6 0 0 0-4.44 4.71v13.73a1.11 1.11 0 0 0 1.9.84l2.37-2.53a2.42 2.42 0 0 1 1.73-.75h9.52a4.6 4.6 0 0 0 4.48-4.77V6.71A4.6 4.6 0 0 0 17.562 2m-9.31 5.22h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5m0 5.5h7.5a.75.75 0 1 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6.442 2h11.12a4.6 4.6 0 0 1 4.44 4.74v6.52a4.6 4.6 0 0 1-4.48 4.74h-9.52a2.42 2.42 0 0 0-1.73.78l-2.37 2.53a1.08 1.08 0 0 1-.78.35 1.15 1.15 0 0 1-1.12-1.19V6.74A4.6 4.6 0 0 1 6.442 2m11.12 14.5a3.1 3.1 0 0 0 2.94-3.24V6.74a3.1 3.1 0 0 0-2.94-3.24H6.442a3.1 3.1 0 0 0-2.94 3.24v12.8l1.63-1.78a4 4 0 0 1 2.87-1.26z" clipRule="evenodd" /><path fill="currentColor" d="M8.252 8.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5M15.752 11.25h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5" />
                </>
            ) : variants === 'filled-2' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M7.1 2.001h10.05a5 5 0 0 1 5.04 4.85v7.28a5 5 0 0 1-5.05 4.85h-1.56a1.29 1.29 0 0 0-1 .48l-1.48 1.88a1.3 1.3 0 0 1-2 0l-1.49-1.88a1.29 1.29 0 0 0-1-.48H7.1a5 5 0 0 1-5.1-4.85v-7.28a5 5 0 0 1 5.1-4.85m1.25 10.48a.75.75 0 0 0 .75-.75v-2.4a.75.75 0 1 0-1.5 0v2.4c0 .414.336.75.75.75m4.5-.75a.75.75 0 0 1-1.5 0v-2.4a.75.75 0 0 1 1.5 0zm3 .75a.75.75 0 0 0 .75-.75v-2.4a.75.75 0 0 0-1.5 0v2.4c0 .414.336.75.75.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-2' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6.24 2.002h10.5a5.14 5.14 0 0 1 5.29 5.04v7.59a5.15 5.15 0 0 1-5.24 5h-1.62a1.36 1.36 0 0 0-1.05.5l-1.53 1.95a1.35 1.35 0 0 1-2.1 0l-1.58-1.99a1.36 1.36 0 0 0-1.05-.5H6.24a5.15 5.15 0 0 1-5.24-5v-7.59a5.14 5.14 0 0 1 5.24-5m10.51 16.13a3.65 3.65 0 0 0 3.74-3.54v-7.55a3.65 3.65 0 0 0-3.75-3.54H6.24a3.65 3.65 0 0 0-3.75 3.54v7.55a3.65 3.65 0 0 0 3.75 3.54h1.62a2.86 2.86 0 0 1 2.23 1.07l1.4 1.78 1.4-1.78a2.86 2.86 0 0 1 2.23-1.07z" clipRule="evenodd" /><path fill="currentColor" d="M7.74 8.962a.75.75 0 0 0-.75.75v2.4a.75.75 0 0 0 1.5 0v-2.4a.75.75 0 0 0-.75-.75M11.49 8.962a.75.75 0 0 0-.75.75v2.4a.75.75 0 0 0 1.5 0v-2.4a.75.75 0 0 0-.75-.75M15.24 8.962a.75.75 0 0 0-.75.75v2.4a.75.75 0 0 0 1.5 0v-2.4a.75.75 0 0 0-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};
export default Chat;
