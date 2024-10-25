import React from "react";

const ErrorCallout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4">
      <p>{children}</p>
    </div>
  );
};

export { ErrorCallout };
