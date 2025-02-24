import React from 'react';
interface CreditCardProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const CreditCard: React.FC<CreditCardProps> = ({
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
                    <path fill="currentColor" d="M2 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /><path fill="currentColor" d="M17 21.75H9a.76.76 0 0 1-.75-.76.75.75 0 0 1 .75-.74h8a3.25 3.25 0 0 0 3.25-3.26v-8a.75.75 0 0 1 1.5 0v8A4.76 4.76 0 0 1 17 21.75" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M16.5 4.5v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4M2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8A2.5 2.5 0 0 0 2 4.5" clipRule="evenodd" /><path fill="currentColor" d="M19.5 6.75a.76.76 0 0 0-.75.75v8a3.26 3.26 0 0 1-3.25 3.25h-8a.75.75 0 0 0 0 1.5h8a4.75 4.75 0 0 0 4.75-4.75v-8a.76.76 0 0 0-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};
export default CreditCard;
