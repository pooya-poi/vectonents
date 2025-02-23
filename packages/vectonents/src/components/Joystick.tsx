import React from 'react';

interface JoystickProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Joystick: React.FC<JoystickProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M12.75 8.8H20a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h7.25V6.75c0-.967.784-1.75 1.75-1.75a.25.25 0 0 0 .25-.25.75.75 0 0 1 1.5 0A1.75 1.75 0 0 1 13 6.5a.25.25 0 0 0-.25.25zm-5 6.75H9a.75.75 0 0 0 0-1.5H7.75V12.8a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0zM16 11.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M12.75 8.75H20a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h7.25v-2c0-.966.784-1.75 1.75-1.75a.25.25 0 0 0 .25-.25.75.75 0 0 1 1.5 0A1.76 1.76 0 0 1 13 6.48a.25.25 0 0 0-.25.27zM20 19.25a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.47H4a1.5 1.5 0 0 0-1.5 1.47v6a1.5 1.5 0 0 0 1.5 1.5z" clipRule="evenodd" /><path fill="currentColor" d="M9 14.02H7.75v-1.27a.75.75 0 0 0-1.5 0V14H5a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0v-1.23H9a.75.75 0 0 0 0-1.5M17 12.77a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 16.77a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 14.77a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 14.77a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </>
            ) : null}
        </svg>
    );
};

export default Joystick;
