import { useEffect, useRef, useState, RefObject } from 'react';

type UseIntersectionObserverOptionsT = {
  root?: Element | Document | RefObject<Element | Document>;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
  onChange?: (entry: IntersectionObserverEntry) => void;
  externalRef?: RefObject<Element | null>;
};

type UseIntersectionObserverResultT = {
  ref: (element: Element | null) => void;
  entry: IntersectionObserverEntry | null;
  inView: boolean;
};

export const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0,
  enabled = true,
  onChange,
  externalRef,
}: UseIntersectionObserverOptionsT): UseIntersectionObserverResultT => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [element, setElement] = useState<Element | null>(null);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const ref = useRef(null);

  const currentRef = externalRef || ref;

  useEffect(() => {
    if (!enabled || !currentRef?.current) return;

    const observerRoot = root && 'current' in root ? root.current : root || null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        onChangeRef.current?.(entry);
      },
      { root: observerRoot, rootMargin, threshold },
    );

    observer.observe(currentRef.current);

    return () => {
      observer.disconnect();
    };
  }, [currentRef, root, rootMargin, threshold, enabled]);

  return {
    ref: setElement,
    entry,
    inView: !!entry?.isIntersecting,
  };
};
