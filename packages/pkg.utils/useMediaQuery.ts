import { useCallback, useSyncExternalStore } from 'react';

const getServerSnapshot = () => false;

/**
 * @example
 * const matches = useMediaQuery('(max-width: 768px)');
 */

export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);
      return () => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query],
  );

  const getSnapshot = () => window.matchMedia(query).matches;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
