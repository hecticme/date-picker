import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(
  options?: IntersectionObserverInit,
) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState<null | boolean>(null);
  // State will be null onload, so that the UI doesn't flash if the node has not intersected yet.
  // For this you have to check whatever logic you use with === false, not Boolean(value).

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref, isIntersecting };
}
