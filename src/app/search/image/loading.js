import React from 'react';

function loading() {
  return (
    <div
      className="flex flex-col sm:flex-row  
       sm:h-[54.6vh] lg:h-[60vh] gap-5 max-w-6xl sm:pl-40 lg:pl-52 
       pl-12 animate-pulse "
    >
      <div className="space-y-1">
        <div className="w-[200px] h-[200px] bg-gray-200"></div>
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb2"></div>
        <div className="h-2.5 w-40 bg-gray-200 rounded-full mb2"></div>
      </div>
      <div className="space-y-1">
        <div className="w-[200px] h-[200px] bg-gray-200"></div>
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb2"></div>
        <div className="h-2.5 w-40 bg-gray-200 rounded-full mb2"></div>
      </div>
      <div className="space-y-1">
        <div className="w-[200px] h-[200px] bg-gray-200"></div>
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb2"></div>
        <div className="h-2.5 w-40 bg-gray-200 rounded-full mb2"></div>
      </div>
      <div className="space-y-1">
        <div className="w-[200px] h-[200px] bg-gray-200"></div>
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb2"></div>
        <div className="h-2.5 w-40 bg-gray-200 rounded-full mb2"></div>
      </div>
    </div>
  );
}

export default loading;
