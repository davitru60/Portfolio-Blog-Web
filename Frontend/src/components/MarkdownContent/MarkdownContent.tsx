/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; 
import { CustomCodeBlock } from "../CustomCodeBlock/CustomCodeBlock";
import { Callout } from "../Callout/Callout";
import { CustomImage } from "../CustomImage/CustomImage";
import remarkGfm from "remark-gfm";


interface MarkdownContentProps {
  content?: string;
}

const MarkdownContent = (markdownContentProps: MarkdownContentProps) => {
  const { content } = markdownContentProps;
  const modifiedContent = content?.replace(
    /:::(\w+)\s*([^:\n]+)?\s*([\s\S]*?):::/g,
    (_match, type, title, body) => {
      return `<div class="custom-block type-${type}" data-title="${title?.trim() ?? ""}">${body.trim()}</div>`;
    },
  );

 
  const customRenderers = {
    h1: (props: any) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
    h2: (props: any) => (
      <h2 className="mb-4 mt-6 text-2xl font-bold" {...props} />
    ),
    h3: (props: any) => <h3 className="mb-2 text-xl font-medium mt-5" {...props} />,
    p: (props: any) => (
      <p className="text-md mb-4 text-gray-700 dark:text-gray-300" {...props} />
    ),
    code: (props: any) => <CustomCodeBlock {...props} />,
    img: (props: any) => <CustomImage {...props} />,
    ul: (props: any) => <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300" {...props} />,
    ol: (props: any) => <ol className="text-md mb-4 list-decimal pl-6 text-gray-700 dark:text-gray-300" {...props} />,
    li: (props: any) => <li className="text-md mb-2">{props.children}</li>,
    div: (props: any) => {
      const match = props.className && /type-(\w+)/.exec(props.className);
      if (match) {
        const blockType = match[1];
        const title = props["data-title"];
        return <Callout type={blockType} title={title}>{props.children}</Callout>;
      }
      return <div {...props} />;
    },
  
  
    table: (props: any) => (
      <table
        className="mb-4 w-full table-auto text-left text-gray-700 dark:text-gray-300"
        {...props}
      />
    ),

    thead: (props: any) => (
      <thead className="bg-gray-200 dark:bg-gray-800">{props.children}</thead>
    ),
    tbody: (props: any) => <tbody>{props.children}</tbody>,
    tr: (props: any) => <tr className="border-b">{props.children}</tr>,

    th: (props: any) => (
      <th className="px-4 py-2 text-center font-semibold text-gray-900 dark:text-white">
        {props.children}
      </th>
    ),

    td: (props: any) => <td className="px-4 py-2">{props.children}</td>,

    
  };

  return (
    <ReactMarkdown
      children={modifiedContent}
      components={customRenderers}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]} 
    />
  );
};

export { MarkdownContent };