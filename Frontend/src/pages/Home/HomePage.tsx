import { HomeHero } from './HomeHero';
import { LatestArticles } from './LatestArticles';
import { Skills } from './Skills';

const HomePage = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <Skills></Skills>
      <LatestArticles></LatestArticles>
    </>
  );
};

export { HomePage };
