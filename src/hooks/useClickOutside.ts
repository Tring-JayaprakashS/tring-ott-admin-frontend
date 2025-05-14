import { useEffect, RefObject } from 'react';

type Callback = () => void;

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: Callback
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

export default useClickOutside;
