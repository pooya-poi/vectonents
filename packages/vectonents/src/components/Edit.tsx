import React from 'react';
interface EditProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Edit: React.FC<EditProps> = ({
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
                    <path fill="currentColor" d="m13.24 15.62-3.41.73a2 2 0 0 1-.4 0 1.75 1.75 0 0 1-1.26-.52 1.81 1.81 0 0 1-.47-1.66l.73-3.4a3.5 3.5 0 0 1 1-1.75l5.7-5.7h-9a4.14 4.14 0 0 0-4.19 4.19v10.35A4.14 4.14 0 0 0 6.08 22h10.36a4.14 4.14 0 0 0 4.14-4.14V9.07L15 14.66a3.5 3.5 0 0 1-1.76.96" /><path fill="currentColor" fillRule="evenodd" d="M16.77 3.11a3.22 3.22 0 0 1 4.51-.34 3.22 3.22 0 0 1-.34 4.56L14.27 14a2.5 2.5 0 0 1-1.27.64l-3.38.76a.77.77 0 0 1-.94-1l.73-3.4a2.55 2.55 0 0 1 .69-1.22zm.41 4.66 2.24-2.24a.75.75 0 0 0-1.06-1.06l-2.24 2.24a.75.75 0 0 0 1.06 1.06" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m7.79 15.27.73-3.41a2.55 2.55 0 0 1 .69-1.25L15.88 4a3.7 3.7 0 0 1 2.56-1.11 2.73 2.73 0 0 1 1.95.78 3.23 3.23 0 0 1-.33 4.51l-6.67 6.67a2.55 2.55 0 0 1-1.25.69l-3.41.73h-.19a.76.76 0 0 1-.75-1m2.48-3.59a1 1 0 0 0-.28.5l-.49 2.33 2.33-.5a1 1 0 0 0 .5-.28L19 7.06a1.76 1.76 0 0 0 .33-2.4 1.23 1.23 0 0 0-.89-.34 2.2 2.2 0 0 0-1.5.68z" clipRule="evenodd" /><path fill="currentColor" d="M19.91 10.93a.76.76 0 0 0-.75.75v5.69a3 3 0 0 1-3 3.05H6.63a3.06 3.06 0 0 1-3-3.05V7.88a3.05 3.05 0 0 1 3.05-3h5.69a.75.75 0 0 0 0-1.5H6.63a4.55 4.55 0 0 0-4.55 4.5v9.49a4.55 4.55 0 0 0 4.55 4.55h9.49a4.55 4.55 0 0 0 4.54-4.55v-5.69a.76.76 0 0 0-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};
export default Edit;
