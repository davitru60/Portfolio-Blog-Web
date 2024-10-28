import { Card } from "../../components/Card/Card";
import { FaCode, FaMobileAlt, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="px-6 py-6 md:px-24">
      <h1 className="py-4 text-start text-3xl font-bold md:py-8 bg-gradient-text">
        Habilidades
      </h1>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        <Card
          icon={<FaCode />}
          title="Diseño web"
          description={
            <div>
              <ul className="list-inside list-disc px-3">
                <li>Diseño responsivo</li>
                <li>UI/UX</li>
              </ul>
            </div>
          }
        />
        <Card
          icon={<FaMobileAlt />}
          title="Tecnologías"
          description={
            <div>
              <ul className="list-inside list-disc px-3">
                <li>React</li>
                <li>Angular</li>
                <li>Node.js</li>
                <li>Laravel</li>
              </ul>
            </div>
          }
        />
        <Card
          icon={<FaTools />}
          title="Habilidades blandas"
          description={
            <div>
              <ul className="list-inside list-disc px-3">
                <li>Colaboración</li>
                <li>Compromiso</li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
};

export { Skills };
