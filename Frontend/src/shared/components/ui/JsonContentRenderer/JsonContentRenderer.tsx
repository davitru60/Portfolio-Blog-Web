interface ContentBlock {
  title: string;
  paragraphs: string[];
}

interface JsonContentRendererProps {
  contentJson: ContentBlock[];
}

const JsonContentRenderer = ({ contentJson }: JsonContentRendererProps) => {
  return (
    <div className="json-content-renderer">
      {contentJson.map((block, index) => (
        <section key={index}>
          <h2 className="text-base font-semibold">{block.title}</h2>
          {block.paragraphs.map((p, i) => (
            <p key={i} className="mb-2">{p}</p>
          ))}
        </section>
      ))}
    </div>
  );
};

export { JsonContentRenderer };
