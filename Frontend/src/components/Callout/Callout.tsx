interface CalloutProps {
  children: React.ReactNode;
}

const Callout= (calloutProps:CalloutProps) => {
  const {children} = calloutProps
  return (
    <div className="p-4 mb-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded">
      {children}
    </div>
  );
};

export { Callout };
