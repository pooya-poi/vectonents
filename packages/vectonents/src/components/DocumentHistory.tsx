import React from 'react';
interface DocumentHistoryProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const DocumentHistory: React.FC<DocumentHistoryProps> = ({
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
                    <path fill="currentColor" d="M12.68 3.08v4.57c0 .823.667 1.49 1.49 1.49h4.62a.55.55 0 0 0 .39-1l-5.55-5.5a.56.56 0 0 0-.95.44" /><path fill="currentColor" fillRule="evenodd" d="M7.16 15.522A2.64 2.64 0 0 1 9.6 13.89a2.63 2.63 0 0 1 2.64 2.63 2.64 2.64 0 1 1-5.08-.998m2.35 2.368.71-.71a.75.75 0 0 0 .22-.53v-1.41a.75.75 0 0 0-.75-.75.74.74 0 0 0-.75.75v1.1l-.49.49a.75.75 0 0 0 1.06 1.06" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M14.08 10.24h4.78a.5.5 0 0 1 .5.5v6.92a4 4 0 0 1-4 4H8.47a4 4 0 0 1-4-4V6.5a4 4 0 0 1 4-4h2.67a.51.51 0 0 1 .5.5v4.78a2.45 2.45 0 0 0 2.44 2.46m-8.62 6.28a4.14 4.14 0 0 0 4.14 4.14 4.13 4.13 0 0 0 4.14-4.14 4.14 4.14 0 0 0-8.28 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m20.86 9.22-7-7a.75.75 0 0 0-.53-.22h-3a4.75 4.75 0 0 0-4.75 4.78v3.62a.75.75 0 0 0 1.5 0V6.78a3.25 3.25 0 0 1 3.25-3.25h2.25v4.25a2.76 2.76 0 0 0 2.75 2.75h4.25v6.25a3.26 3.26 0 0 1-3.25 3.25h-3.06a.75.75 0 0 0 0 1.5h3.06a4.75 4.75 0 0 0 4.75-4.75v-7a.75.75 0 0 0-.22-.56m-6.78-1.44V4.56l4.47 4.47h-3.22c-.69 0-1.25-.56-1.25-1.25" clipRule="evenodd" /><path fill="currentColor" d="M8.19 13.92a.74.74 0 0 0-.75.75v1.8l-.8.85a.74.74 0 0 0 0 1.06c.14.14.331.22.53.22a.8.8 0 0 0 .47-.22l1.06-1.06a.77.77 0 0 0 .22-.53v-2.12a.75.75 0 0 0-.73-.75" /><path fill="currentColor" fillRule="evenodd" d="M3 16.55a5 5 0 1 1 10 0 5 5 0 0 1-10 0m1.572 1.426a3.68 3.68 0 1 0 6.776-2.872 3.68 3.68 0 0 0-6.776 2.872" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default DocumentHistory;
