import { useEffect } from 'react';
import { HomeHero } from './HomeHero';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import useScrollPosition from '../../hooks/useScrollPosition';


const HomePage = () => {
  // Llamar al hook para mantener la posición del scroll en la página
  
  useScrollPosition('home'); // Pasar un identificador único para esta página

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <HomeHero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export { HomePage };
