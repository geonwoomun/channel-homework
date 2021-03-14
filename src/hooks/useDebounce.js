import { useRef } from 'react';

export default function useDebounce(callback, time) {
  const timer = useRef(null);
  return (...params) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...params);
      timer.current = null;
    }, time);
  };
}
