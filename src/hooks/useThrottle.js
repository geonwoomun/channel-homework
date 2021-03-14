import { useRef } from 'react';

export default function useThrottle(callback, time) {
  const timer = useRef(null);

  return (...params) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...params);
        timer.current = null;
      }, time);
    }
  };
}
