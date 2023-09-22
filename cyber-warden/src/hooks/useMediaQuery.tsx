import React, { useEffect, useState } from 'react';

export const useMediaQuery = (breakpoint?: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window object is defined
    if (typeof window !== 'undefined' && breakpoint) {
      const mediaQueryList = window.matchMedia(breakpoint);
      setMatches(mediaQueryList.matches);

      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQueryList.addEventListener('change', handler);
      
      // Clean up the listener on component unmount
      return () => mediaQueryList.removeEventListener('change', handler);
    }
  }, [breakpoint]);

  return matches;
};
