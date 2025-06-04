// src/hooks/useScrollPosition.ts

import { useEffect } from "react";

interface ScrollPositions {
  [key: string]: number;
}

const scrollPositions: ScrollPositions = {};

const useScrollPosition = (page: string, isReady?: boolean): void => {
  useEffect(() => {
    if (!isReady) return;

    const pageScrollPosition = scrollPositions[page];
    if (pageScrollPosition !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, pageScrollPosition);
      }, 0);
    }

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener("scroll", save);
    return () => {
      window.removeEventListener("scroll", save);
    };
  }, [page, isReady]);
};

export default useScrollPosition;
