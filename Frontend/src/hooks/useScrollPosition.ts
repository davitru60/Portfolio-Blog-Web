// src/hooks/useScrollPosition.ts

import { useEffect } from "react";

interface ScrollPositions {
  [key: string]: number;
}

const scrollPositions: ScrollPositions = {};

//Este hook guarda la posición del scroll de cada página
const useScrollPosition = (page: string, isReady?: boolean): void => {
  useEffect(() => {
    if (!isReady) return;

    // Si la página ya tiene una posición guardada, la restauramos
    const pageScrollPosition = scrollPositions[page];
    if (pageScrollPosition !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, pageScrollPosition);
      }, 0);
    }

    // Guardamos la posición del scroll cada vez que se desplaza
    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    // Guardamos la posición del scroll al cambiar de página
    window.addEventListener("scroll", save);
    return () => {
      // Limpiamos el listener al desmontar el componente
      window.removeEventListener("scroll", save);
    };
  }, [page, isReady]);
};

export default useScrollPosition;
