import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-64 w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-color"></div>
      <p className="ml-4 text-lg text-gray-700 dark:text-gray-300">
        Loading news...
      </p>
    </div>
  );
};

export default Loading;
