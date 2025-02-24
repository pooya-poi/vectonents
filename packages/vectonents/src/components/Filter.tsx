import React from 'react';
interface FilterProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'filled-1' | 'filled-2' | 'outlined' | 'outlined-1' | 'outlined-2';
    size?: number;
}
const Filter: React.FC<FilterProps> = ({
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
                    <path fill="currentColor" d="M4.899 2h14.18a2.9 2.9 0 0 1 2.05 4.95l-4.77 4.77a3 3 0 0 0-.85 2.06v4.39a2.91 2.91 0 0 1-1.16 2.32l-1.24.94a2.9 2.9 0 0 1-4.64-2.33v-5.32a3 3 0 0 0-.85-2.06l-4.77-4.77A2.9 2.9 0 0 1 4.899 2" />
                </>
            ) : variants === 'filled-1' ? (
                <>
                    <path fill="currentColor" d="M10 7.39H4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2M8 14.16a2.23 2.23 0 0 0-2 1.23H4a1 1 0 0 0 0 2h2a2.22 2.22 0 1 0 2-3.23M13.72 10.46a2.21 2.21 0 0 0 1.89-1.07H20a1 1 0 1 0 0-2h-4.22a2.23 2.23 0 1 0-2.06 3.07M20 15.39h-8a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2" />
                </>
            ) : variants === 'filled-2' ? (
                <>
                    <path fill="currentColor" d="M4 7.39h6a1 1 0 1 0 0-2H4a1 1 0 0 0 0 2M4 13.28h2a2.23 2.23 0 1 0 0-2H4a1 1 0 0 0 0 2M13.72 8.46a2.21 2.21 0 0 0 1.89-1.07H20a1 1 0 1 0 0-2h-4.22a2.23 2.23 0 1 0-2.06 3.07M10 17.49H4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2M20 17.49h-3.94a2.24 2.24 0 1 0-.16 2H20a1 1 0 1 0 0-2M20 11.28h-8a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M4.961 2h14.18v.01a2.9 2.9 0 0 1 2.05 5l-4.77 4.77a2.9 2.9 0 0 0-.85 2v4.4a2.91 2.91 0 0 1-1.16 2.32l-1.24.93a2.89 2.89 0 0 1-4.64-2.32v-5.33a2.9 2.9 0 0 0-.85-2l-4.77-4.77A2.9 2.9 0 0 1 4.961 2m15.48 2.37a1.4 1.4 0 0 0-1.3-.87H4.961a1.4 1.4 0 0 0-1.3.87 1.38 1.38 0 0 0 .31 1.53l4.79 4.77a4.36 4.36 0 0 1 1.29 3.11v5.33a1.39 1.39 0 0 0 1.37 1.41 1.35 1.35 0 0 0 .83-.29l1.24-.93a1.4 1.4 0 0 0 .56-1.12v-4.4a4.36 4.36 0 0 1 1.31-3.11l4.77-4.77a1.38 1.38 0 0 0 .31-1.53" clipRule="evenodd" />
                </>
            ) : variants === 'outlined-1' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M13.77 10.618a2.29 2.29 0 0 0 2.056-1.399.7.7 0 0 0 .237.052h4.114a.771.771 0 1 0 0-1.543h-4.063a.5.5 0 0 0-.133 0 2.294 2.294 0 1 0-2.212 2.86zm0-3.034a.75.75 0 1 1 0 1.502.75.75 0 0 1 0-1.502" clipRule="evenodd" /><path fill="currentColor" d="M3.771 7.728h6.172a.771.771 0 1 1 0 1.543H3.77a.771.771 0 1 1 0-1.543" /><path fill="currentColor" fillRule="evenodd" d="M5.736 15.956a2.28 2.28 0 0 1 2.15-1.523v-.02a2.294 2.294 0 1 1-2.15 3.085H3.771a.771.771 0 1 1 0-1.543zm1.4.825a.75.75 0 0 0 .75.738v-.041a.75.75 0 0 0 .75-.751.75.75 0 0 0-1.5.054" clipRule="evenodd" /><path fill="currentColor" d="M12 15.956h8.229a.771.771 0 1 1 0 1.542H12a.771.771 0 1 1 0-1.543" />
                </>
            ) : variants === 'outlined-2' ? (
                <>
                    <path fill="currentColor" d="M9.77 5.71h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5" /><path fill="currentColor" fillRule="evenodd" d="M5.68 13.1H3.77a.75.75 0 0 1 0-1.5h1.91a2.23 2.23 0 1 1 0 1.5m2.09-.02a.73.73 0 1 0 0-1.46.73.73 0 0 0 0 1.46M15.49 7.17a2.23 2.23 0 0 1-2 1.36v-.07a2.23 2.23 0 1 1 2.15-2.79.5.5 0 0 1 .13 0h3.95a.75.75 0 0 1 0 1.5h-4a1 1 0 0 1-.23 0m-1.266-.943a.73.73 0 0 0-.734-.697v.04a.73.73 0 0 0-.72.78.73.73 0 0 0 1.454-.123" clipRule="evenodd" /><path fill="currentColor" d="M9.77 17.81h-6a.77.77 0 1 0 0 1.54h6a.75.75 0 0 0 0-1.5z" /><path fill="currentColor" fillRule="evenodd" d="M15.9 17.81h3.87v.04a.75.75 0 0 1 0 1.5h-4a2.22 2.22 0 1 1 .13-1.54m-2.812.877a.73.73 0 1 0 1.344-.573.73.73 0 0 0-1.344.573" clipRule="evenodd" /><path fill="currentColor" d="M19.77 11.6h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};
export default Filter;
