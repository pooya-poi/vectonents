
import React from 'react';

interface KeyboardProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Keyboard: React.FC<KeyboardProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M4.857 4h14.286C20.72 4 22 5.343 22 7v10c0 1.657-1.28 3-2.857 3H4.857C3.28 20 2 18.657 2 17V7c0-1.657 1.28-3 2.857-3m9.039 3c-.527 0-.953.448-.953 1s.427 1 .953 1c.525 0 .952-.448.952-1s-.427-1-.953-1m-.953 5c0-.552.427-1 .953-1 .525 0 .952.448.952 1s-.427 1-.953 1c-.525 0-.952-.448-.952-1m-2.857-5c-.526 0-.952.448-.952 1s.426 1 .952 1 .952-.448.952-1-.426-1-.952-1m-.952 5c0-.552.426-1 .952-1s.952.448.952 1-.426 1-.952 1-.952-.448-.952-1m-2.858 1c.526 0 .953-.448.953-1s-.427-1-.953-1-.952.448-.952 1 .426 1 .952 1m.953-5c0 .552-.427 1-.953 1s-.952-.448-.952-1 .426-1 .952-1 .953.448.953 1m8.095 9c.526 0 .952-.448.952-1h.038c0-.552-.426-1-.952-1H8.62c-.526 0-.952.448-.952 1s.426 1 .952 1zm3.333-5c0 .552-.426 1-.952 1s-.952-.448-.952-1 .426-1 .952-1 .952.448.952 1m-.952-3c.526 0 .952-.448.952-1s-.426-1-.952-1-.952.448-.952 1 .426 1 .952 1" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M4.857 4h14.286C20.721 4 22 5.343 22 7v10c0 1.657-1.279 3-2.857 3H4.857C3.28 20 2 18.657 2 17V7c0-1.657 1.28-3 2.857-3m14.286 14.49c.784 0 1.419-.667 1.419-1.49V7c.002-.4-.149-.785-.419-1.067a1.39 1.39 0 0 0-1.02-.433H4.839c-.378 0-.74.158-1.007.44A1.53 1.53 0 0 0 3.42 7v10c0 .399.152.78.422 1.06s.637.435 1.016.43z" clipRule="evenodd"/><path fill="currentColor" d="M5.324 11.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM9.134 11.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM12.943 11.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM16.753 11.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 1 1-1.905 0zM5.324 7.952a.952.952 0 1 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM9.134 7.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM12.943 7.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM16.753 7.952a.952.952 0 0 1 1.905 0v.096a.952.952 0 0 1-1.905 0zM7.705 15.96c0-.53.43-.96.96-.96h6.652c.53 0 .96.43.96.96v.08c0 .53-.43.96-.96.96H8.665a.96.96 0 0 1-.96-.96z"/>
      </>
    ) : null}
  </svg>
);

export default Keyboard;