import { FaInfoCircle, FaExclamationTriangle, FaTimesCircle, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const blockStyles: Record<string, string> = {
  info: "border-l-4 border-blue-500 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-200",
  warning: "border-l-4 border-yellow-500 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  error: "border-l-4 border-red-500 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  success: "border-l-4 border-green-500 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  note: "border-l-4 border-gray-500 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
};


const iconMap: Record<string, JSX.Element> = {
  info: <FaInfoCircle className="h-6 w-6 text-blue-500 mr-3" />,
  warning: <FaExclamationTriangle className="h-6 w-6 text-yellow-500 mr-3" />,
  error: <FaTimesCircle className="h-6 w-6 text-red-500 mr-3" />,
  success: <FaCheckCircle className="h-6 w-6 text-green-500 mr-3" />,
  note: <FaLightbulb className="h-6 w-6 text-gray-500 mr-3" />,
};

interface CalloutProps {
  type?: string;
  title?: string;
  children: string;
}

const Callout = ({ type = "note", title, children }: CalloutProps) => {
  const styleClass = blockStyles[type] || blockStyles["note"];
  const icon = iconMap[type] || iconMap["note"];

  return (
    <div className={`${styleClass} p-4 rounded-md shadow-md mb-4`}>
      <div className="flex items-start">
        {icon}
        <div className="flex-1">
          {title && <strong className="block mb-2">{title}</strong>}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="ml-2">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              a: ({ children, href }) => (
                <a href={href} className="text-blue-500 underline">
                  {children}
                </a>
              ),
            }}
          >
            {children}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export { Callout };
