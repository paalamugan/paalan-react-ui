import { useIsomorphicEffect } from '../use-isomorphic-effect';

export const useDocumentTitle = (title: string) => {
  useIsomorphicEffect(() => {
    if (typeof title === 'string' && title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
};
