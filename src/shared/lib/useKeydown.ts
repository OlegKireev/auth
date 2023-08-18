import { useEffect } from 'react';

export const useKeydown = (
  code: string,
  callback: (e: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === code) {
        callback(event);
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [code, callback]);
};
