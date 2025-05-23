
import React from 'react';

interface KeyboardCloseProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const KeyboardClose: React.FC<KeyboardCloseProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = '',
  variants = 'filled'
}) => (
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
        <path fill="currentColor" fillRule="evenodd" d="M19.143 2H4.857C3.28 2 2 3.343 2 5v10c0 1.657 1.28 3 2.857 3h14.286C20.721 18 22 16.657 22 15V5c0-1.657-1.279-3-2.857-3m-6.2 3.96c0-.552.427-1 .953-1s.952.448.952 1v.08c0 .552-.426 1-.952 1s-.953-.448-.953-1zm.953 3c-.526 0-.953.448-.953 1v.08c0 .552.427 1 .953 1s.952-.448.952-1v-.08c0-.552-.426-1-.952-1m-4.762-3c0-.552.426-1 .952-1s.953.448.953 1v.08c0 .552-.427 1-.953 1s-.952-.448-.952-1zm.952 3c-.526 0-.952.448-.952 1v.08c0 .552.426 1 .952 1s.953-.448.953-1v-.08c0-.552-.427-1-.953-1M7.23 10.04c0 .552-.426 1-.952 1s-.953-.448-.953-1v-.08c0-.552.427-1 .953-1s.952.448.952 1zm-.952-3c.526 0 .952-.448.952-1v-.08c0-.552-.426-1-.952-1s-.953.448-.953 1v.08c0 .552.427 1 .953 1m10 7c0 .552-.427 1-.953 1H8.62c-.526 0-.952-.448-.952-1v-.08c0-.552.426-1 .952-1h6.743c.526 0 .953.448.953 1zm1.428-3c.526 0 .953-.448.953-1v-.08c0-.552-.427-1-.953-1s-.952.448-.952 1v.08c0 .552.426 1 .952 1m.953-5c0 .552-.427 1-.953 1s-.952-.448-.952-1v-.08c0-.552.426-1 .952-1s.953.448.953 1z" clipRule="evenodd"/><path fill="currentColor" d="m11.99 20.36 2.144-.93a.703.703 0 0 1 .914.41.78.78 0 0 1 .007.587.73.73 0 0 1-.397.413l-2.41 1a.67.67 0 0 1-.552 0l-2.41-1a.73.73 0 0 1-.398-.413.78.78 0 0 1 .008-.587.73.73 0 0 1 .393-.418.68.68 0 0 1 .559.008z"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="m14.133 19.76-2.142.91-2.143-.91a.69.69 0 0 0-.71.1.77.77 0 0 0-.27.696.75.75 0 0 0 .437.594l2.41 1c.176.08.376.08.552 0l2.41-1c.365-.157.54-.596.39-.98a.704.704 0 0 0-.934-.41"/><path fill="currentColor" fillRule="evenodd" d="M4.857 2h14.286C20.721 2 22 3.343 22 5v10c0 1.657-1.279 3-2.857 3H4.857C3.28 18 2 16.657 2 15V5c0-1.657 1.28-3 2.857-3m15.29 14.054c.266-.28.415-.659.415-1.054V4.99c0-.399-.152-.78-.422-1.06a1.38 1.38 0 0 0-1.016-.43H4.838c-.38 0-.743.16-1.01.443a1.53 1.53 0 0 0-.409 1.067v10c.003.397.156.776.426 1.054s.634.431 1.012.426h14.286c.376 0 .737-.157 1.003-.436" clipRule="evenodd"/><path fill="currentColor" d="M5.324 9.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM9.134 9.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM12.943 9.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM16.753 9.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM5.324 5.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM9.134 5.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM12.943 5.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM16.753 5.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM7.705 13.96c0-.53.43-.96.96-.96h6.652c.53 0 .96.43.96.96v.08c0 .53-.43.96-.96.96H8.665a.96.96 0 0 1-.96-.96z"/>
      </>
    ) : null}
  </svg>
);

export default KeyboardClose;