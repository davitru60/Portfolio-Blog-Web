/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CustomCodeBlockProps{
  node: string;
  inline: string;
  className:string;
  children: string;
  props: any []
}

const CustomCodeBlock = (customCodeBlockProps: CustomCodeBlockProps) => {
  const { inline, className, children, props } = customCodeBlockProps;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      style={atomDark}
      language={match[1]}
      PreTag="div"
      {...props}
      className="rounded-lg mb-4"
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-gray-100 dark:bg-gray-800 rounded p-1">{children}</code>
  );
};

export {CustomCodeBlock};
