'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const BackgroundGradient: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {resolvedTheme === 'dark' ? (
        <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : resolvedTheme === 'light' ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      ) : null}
    </div>
  );
};

BackgroundGradient.displayName = 'pageComponents';
export default BackgroundGradient;