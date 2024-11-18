interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

const Callout = (calloutProps: CalloutProps) => {
  const { title, children } = calloutProps;
  return (
    <div className="mb-4 rounded border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-700">
      {title && <h4 className="mb-2 font-bold text-blue-800">{title}</h4>}
      <div>{children}</div>
    </div>
  );
};

export { Callout };
