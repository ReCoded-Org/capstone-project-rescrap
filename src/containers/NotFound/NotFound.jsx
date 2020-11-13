import React from 'react';

const NotFound = (props) => {

  const requestPage = props.match.url;
  // console.log(requestPage);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-green-100 text-5xl w-11/12 shadow-md px-2 py-2 rounded-lg text-center bg-gray-100">
        Error 404 requested resource "{requestPage}" not found!!! ......... :C{' '}
      </h1>
    </div>
  );
};
NotFound.defaultProps = {

    match:{url:""},
  };

export default NotFound;
