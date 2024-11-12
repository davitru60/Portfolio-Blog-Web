interface CalloutProps {
  children: React.ReactNode;
}

const Callout = (calloutProps: CalloutProps) => {
  const { children } = calloutProps;
  return (
    <div className="mb-4 rounded border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-700">
      {children}
    </div>
  );
};

export { Callout };
