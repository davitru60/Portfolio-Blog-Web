import { HomeHero } from './HomeHero';
import { LatestArticles } from './LatestArticles';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';

const HomePage = () => {

  return (
    <>
      <HomeHero />
      <Projects />
      <Skills />
      <LatestArticles />
      <Contact></Contact>
    </>
  );
};

export { HomePage };
