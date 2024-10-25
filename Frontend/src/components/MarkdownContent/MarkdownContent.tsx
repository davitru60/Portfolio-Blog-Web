/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Importa rehype-raw
import { CustomCodeBlock } from "../CustomCodeBlock/CustomCodeBlock";
import { Callout } from "../Callout/Callout";
import { CustomImage } from "../CustomImage/CustomImage";


interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = (markdownContentProps:MarkdownContentProps) => {
  const {content} = markdownContentProps
  const modifiedContent = content.replace(
    /:::(info|warning|error)\s*(.*?)\s*:::/gs,
    '<div class="callout type-$1">$2</div>' // Convierte el marcador a una div con la clase de callout
  );

  // Renderizadores personalizados para Markdown
  const customRenderers = {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mb-4 mt-6" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium mb-2" {...props} />,
    p: (props: any) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
    code: (props: any) => <CustomCodeBlock {...props} />,
    img: (props: any) => <CustomImage {...props} />,
    div: (props: any) => {
      const match = props.className && /type-(info|warning|error)/.exec(props.className);
      if (match) {
        const calloutType = match[1];
        switch (calloutType) {
          case 'info':
            return <Callout>{props.children}</Callout>;
          case 'error':
            return <Callout>{props.children}</Callout>;
          default:
            return <div {...props} />;
        }
      }
      return <div {...props} />;
    },
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
    li: (props: any) => <li className="mb-2">{props.children}</li>,
  };

  return (
    <ReactMarkdown
      children={modifiedContent}
      components={customRenderers}
      rehypePlugins={[rehypeRaw]} 
    />
  );
};

export {MarkdownContent};