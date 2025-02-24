import React from 'react';
interface ShredderProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Shredder: React.FC<ShredderProps> = ({
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
                    <path fill="currentColor" d="M21 12.8h-1.93v-1.92a.46.46 0 0 0-.46-.46h-4.42a2.26 2.26 0 0 1-2.25-2.28v-4.4a.47.47 0 0 0-.47-.46H9A3.7 3.7 0 0 0 5.31 7v5.8H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5M6 14.8a.76.76 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2A.76.76 0 0 0 6 14.8M18 14.8a.76.76 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.76.76 0 0 0-.75-.75M14.75 18.38v-2.83a.75.75 0 0 0-1.5 0v3a.8.8 0 0 0 .08.34l1 2a.75.75 0 0 0 .67.41.8.8 0 0 0 .34-.07.75.75 0 0 0 .33-1zM10 14.8a.76.76 0 0 0-.75.75v2.83l-.92 1.84a.75.75 0 0 0 .34 1c.37.17.81.02 1-.34l1-2a.8.8 0 0 0 .08-.34v-3a.76.76 0 0 0-.75-.74" /><path fill="currentColor" d="M14.27 9.4h4.27a.52.52 0 0 0 .37-.88l-5.13-5.08a.52.52 0 0 0-.88.36V8a1.38 1.38 0 0 0 1.37 1.4" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21 12.63h-2.23V9.27a.8.8 0 0 0-.22-.54l-6-6a.76.76 0 0 0-.55-.21H9.41a4.2 4.2 0 0 0-4.19 4.19v5.92H3a.75.75 0 0 0 0 1.5h18a.75.75 0 1 0 0-1.5m-8.25-7.54 3.45 3.44h-2.49a1 1 0 0 1-1-1zm-5.233-.287A2.68 2.68 0 0 0 6.75 6.71l-.02 5.92h10.52v-2.58h-3.54a2.49 2.49 0 0 1-2.48-2.48V4H9.41a2.68 2.68 0 0 0-1.893.803" clipRule="evenodd" /><path fill="currentColor" d="M6 14.63a.75.75 0 0 0-.75.75v2a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-.75-.75M18 14.63a.75.75 0 0 0-.75.75v2a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-.75-.75M14.75 18.2v-2.82a.75.75 0 0 0-1.5 0v3a.8.8 0 0 0 .08.33l1 2a.76.76 0 0 0 .67.42.8.8 0 0 0 .34-.08.75.75 0 0 0 .33-1zM10 14.63a.75.75 0 0 0-.75.75v2.82L8.33 20a.75.75 0 0 0 .911 1.04.74.74 0 0 0 .429-.38l1-2a.8.8 0 0 0 .08-.33v-3a.75.75 0 0 0-.75-.7" />
                </>
            ) : null}
        </svg>
    );
};
export default Shredder;
