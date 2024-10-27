import React from "react";

interface NotFoundProps {
  errorCode: string;
  message: string;
}

const NotFound: React.FC<NotFoundProps> = ({ errorCode, message }) => {
  return (
    <div>
      <h1>Error Code : {errorCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export default NotFound;
