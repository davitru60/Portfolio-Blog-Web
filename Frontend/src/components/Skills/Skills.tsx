import { Card } from "../Card/Card";
import { FaCode, FaMobileAlt, FaTools } from "react-icons/fa";

const Skills = () => {
    return (
      <div className="py-6 px-6 md:px-24">
        <h1 className="text-start py-4 md:py-8 text-3xl font-bold">Habilidades</h1>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<FaCode />}
            title="Diseño web"
            description={
              <div>
                <ul className="list-disc list-inside px-3">
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
                <ul className="list-disc list-inside px-3">
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
                <ul className="list-disc list-inside px-3">
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
