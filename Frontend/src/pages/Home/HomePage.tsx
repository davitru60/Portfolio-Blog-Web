import { HomeHero } from './HomeHero';
import { LatestArticles } from './LatestArticles';
import { Projects } from './Projects';
import { Skills } from './Skills';

const HomePage = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <Projects></Projects>
      <Skills></Skills>
      <LatestArticles></LatestArticles>
    </>
  );
};

export { HomePage };
