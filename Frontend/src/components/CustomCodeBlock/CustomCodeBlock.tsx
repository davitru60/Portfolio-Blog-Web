/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CustomCodeBlockProps {
  node: string;
  inline: string;
  className: string;
  children: string;
  props: any[];
}

const CustomCodeBlock = (customCodeBlockProps: CustomCodeBlockProps) => {
  const { inline, className, children, props } = customCodeBlockProps;
  const match = /language-(\w+)/.exec(className || '');

  if(!inline && match){
    return (
      <SyntaxHighlighter
      style={atomDark}
      language={match[1]}
      PreTag="div"
      {...props}
      className="mb-4 rounded-lg text-sm"
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
    )
  }else{
    return  <code className="rounded bg-gray-100 p-1 dark:bg-gray-800">{children}</code>
  }
};

export { CustomCodeBlock };
