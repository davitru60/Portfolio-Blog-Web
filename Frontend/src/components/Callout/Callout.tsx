import React from "react";

interface InfoCalloutProps {
  children: React.ReactNode;
}

const InfoCallout: React.FC<InfoCalloutProps> = ({ children }) => {
  return (
    <div className="p-4 mb-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-md shadow-md">
      {children}
    </div>
  );
};

export { InfoCallout };
