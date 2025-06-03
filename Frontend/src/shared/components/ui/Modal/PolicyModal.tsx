import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import policy from "../../../data/policy.json";

const PolicyContentModal = () => (
    <div className="space-y-6 text-sm">
      {policy.politica.map((seccion, index) => (
        <div key={index}>
          <h1 className="mb-2 text-base font-bold">{seccion.titulo}</h1>

          {/* Párrafos iniciales */}
          {seccion.parrafos?.map((parrafo, i) => (
            <div key={`p-${i}`} className="mb-2">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {parrafo}
              </ReactMarkdown>
            </div>
          ))}

          {/* Listas (arrays de arrays) */}
          {seccion.listas?.map((lista, j) => (
            <ul key={`ul-${j}`} className="mb-2 list-disc pl-5">
              {lista.map((item, k) => (
                <li key={`li-${j}-${k}`}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {item}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          ))}

          {/* Párrafos finales */}
          {seccion.parrafosFinales?.map((parrafo, i) => (
            <div key={`pf-${i}`} className="mb-2">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {parrafo}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

export { PolicyContentModal };