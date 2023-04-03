'use client';

import { useEffect } from 'react';

function Error({ error, rest }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className=" h-screen flex flex-col items-center space-y-2">
      <h1 className=" font-bold text-xl">Somthing went wrong</h1>
      <button
        className=" bg-red-500 px-6 py-2 rounded-md"
        onClick={() => rest()}
      >
        rest
      </button>
    </div>
  );
}

export default Error;
