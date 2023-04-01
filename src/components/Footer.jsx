'use client';
import { useState, useEffect } from 'react';

function Footer() {
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(screenSize);

  return (
    <footer className=" h-[25vh] sm:h-[20vh] lg:h-[15vh] bg-gray-200">
      <div className=" border-b-2 border-gray-300 p-3">
        <span className=" ml-4 text-gray-600">Uk</span>
      </div>
      {screenSize <= 640 && (
        <div className="flex flex-col  space-y-5 py-5 ">
          <ul className="flex items-center justify-center text-sm text-gray-600">
            <li>carbon neutral since 2007</li>
          </ul>
          <div className=" space-y-5 ">
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600">
              <li>advertising</li>
              <li>Business</li>
              <li>How search works</li>
            </ul>
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      )}
      {screenSize > 640 && screenSize <= 1024 && (
        <div className="flex flex-col  space-y-5 py-5 ">
          <ul className="flex items-center justify-center text-sm text-gray-600">
            <li>carbon neutral since 2007</li>
          </ul>
          <div className="  flex justify-evenly items-center">
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600">
              <li>advertising</li>
              <li>Business</li>
              <li>How search works</li>
            </ul>
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600 ">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      )}
      {screenSize > 1024 && (
        <div className="flex flex-col  space-y-5 py-5 ">
          <div className="  flex justify-between items-center mx-7">
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600">
              <li>advertising</li>
              <li>Business</li>
              <li>How search works</li>
            </ul>
            <ul className="flex items-center justify-center text-sm text-gray-600">
              <li>carbon neutral since 2007</li>
            </ul>
            <ul className="flex space-x-5 items-center justify-center text-sm text-gray-600 ">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
