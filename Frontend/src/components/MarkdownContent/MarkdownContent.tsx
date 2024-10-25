/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Importa rehype-raw
import { CustomCodeBlock } from "../CustomCodeBlock/CustomCodeBlock";
import { InfoCallout } from "../Callout/Callout";
import { ErrorCallout } from "../Callout/ErrorCallout";


interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Modificar el contenido de Markdown para incluir los callouts
  const modifiedContent = content.replace(
    /:::(info|warning|error)\s*(.*?)\s*:::/gs,
    '<div class="callout type-$1">$2</div>' // Convierte el marcador a una div con la clase de callout
  );

  // Renderizadores personalizados para Markdown
  const customRenderers = {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium mb-2" {...props} />,
    p: (props: any) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
    code: (props: any) => <CustomCodeBlock {...props} />,
    div: (props: any) => {
      // Comprobamos si el contenido contiene callouts
      const match = props.className && /type-(info|warning|error)/.exec(props.className);
      if (match) {
        const calloutType = match[1]; // Obtiene el tipo de callout
        switch (calloutType) {
          case 'info':
            return <InfoCallout>{props.children}</InfoCallout>;
          case 'error':
            return <ErrorCallout>{props.children}</ErrorCallout>;
          default:
            return <div {...props} />;
        }
      }
      return <div {...props} />;
    },
  };

  return (
    <ReactMarkdown
      children={modifiedContent}
      components={customRenderers}
      rehypePlugins={[rehypeRaw]} // Añade rehype-raw aquí
    />
  );
};

export default MarkdownContent;