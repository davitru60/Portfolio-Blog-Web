import { About } from "../../components/About/About";
import { HomeHero } from "./Hero";
import { Skills } from "./Skills";

const Home = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <About></About>
      <Skills></Skills>
    </>
  );
};

export { Home };
