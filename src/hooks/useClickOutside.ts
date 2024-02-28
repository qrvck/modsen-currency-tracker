import { useEffect } from 'react';

function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => document.addEventListener('click', handleClick), 0);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}

export { useClickOutside };
