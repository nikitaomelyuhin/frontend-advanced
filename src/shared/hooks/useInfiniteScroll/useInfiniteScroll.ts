import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement | null>;
  wrapperRef: MutableRefObject<HTMLElement | null>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const trigger = triggerRef.current;
    const wrapper = wrapperRef.current;

    if (trigger && callback) {
      const options = {
        root: wrapper,
        rootMargin: '1px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(trigger);
    }

    return () => {
      if (observer && trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
