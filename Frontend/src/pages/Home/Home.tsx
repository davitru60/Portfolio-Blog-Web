import { HomeHero } from './HomeHero';
import { LatestArticles } from './LatestArticles';
import { Skills } from './Skills';

const Home = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <Skills></Skills>
      <LatestArticles></LatestArticles>
    </>
  );
};

export { Home };
