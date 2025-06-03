import { useEffect } from "react";

interface ScrollPositions {
  [key: string]: number;
}

const scrollPositions: ScrollPositions = {};

const useScrollPosition = (page: string): void => {
  useEffect(() => {
    const pageScrollPosition = scrollPositions[page];

    if (pageScrollPosition !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, pageScrollPosition);
      }, 50);
    }

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener("scroll", save);

    return () => {
      window.removeEventListener("scroll", save);
    };
  }, [page]);
};

export default useScrollPosition;
