import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div
      className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mx-auto max-w-2xl"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};

export default ErrorMessage;
