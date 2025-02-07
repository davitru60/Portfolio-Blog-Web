/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react'; 
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';

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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(String(children)).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Resetea el estado después de 2 segundos
      });
    }
  };

  if (!inline && match) {
    return (
      <div className="relative">
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
          className="mb-4 rounded-lg text-sm"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>

        {/* Botón de copiar */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded bg-gray-800 text-white text-sm shadow-md hover:bg-gray-700"
        >
          {copied ? (
            <FaClipboardCheck className="h-4 w-4" />
          ) : (
            <FaClipboard className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  } else {
    return <code className="rounded bg-gray-100 p-1 dark:bg-gray-800">{children}</code>;
  }
};

export { CustomCodeBlock };
