'use client';
import Image from 'next/image';
import { RxGear } from 'react-icons/rx';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { HiBars3 } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMic, MdOutlinePhotoCamera } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
function SearchHeader() {
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState('');
  const [screenSize, setScreenSize] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams.get('searchTerm' || '');

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    router.push(`/search/web?searchTerm=${valueSearch}`);
  };
  return (
    <>
      {screenSize < 640 && (
        <header className="h-[25vh]">
          <div className="flex items-center justify-between p-3">
            <div>
              <HiBars3 />
            </div>
            <div>
              <Image
                priority={true}
                src="/Google_2015_logo.svg.png"
                width={100}
                height={100}
                alt="google logo"
              />
            </div>
            <div>avatar</div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center "
          >
            <div className="flex justify-between items-center border-2 w-5/6 p-2 rounded-full max-w-lg shadow-lg">
              <div>
                <IoSearchOutline />
              </div>
              <input
                defaultValue={search}
                onChange={(e) => setValueSearch(e.currentTarget.value)}
                className=" outline-none flex-grow px-2"
              />

              <div className="flex space-x-2">
                <MdOutlineMic />
                <MdOutlinePhotoCamera />
              </div>
            </div>
          </form>
          <div>
            <ul className="flex p-2 space-x-3">
              <li>All</li>
              <li>Images</li>
            </ul>
          </div>
        </header>
      )}
      {screenSize >= 640 && (
        <header className="h-[25vh] w-screen">
          <div className="flex w-full items-center justify-between p-4">
            <div>
              <Image
                priority={true}
                src="/Google_2015_logo.svg.png"
                width={100}
                height={100}
                alt="google logo"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex-grow text-gray-500"
            >
              <div className="flex flex-col items-center justify-center ">
                <div className="flex justify-between items-center border-2 w-5/6 p-2 rounded-full max-w-lg shadow-lg">
                  <div>
                    <IoSearchOutline />
                  </div>
                  <input
                    defaultValue={search}
                    onChange={(e) => setValueSearch(e.currentTarget.value)}
                    className=" outline-none flex-grow px-2 text-black text-sm"
                  />
                  <AiOutlineClose
                    onClick={() => setValueSearch('')}
                    className="flex border-r2 cursor-pointer"
                  />
                  <div className=" border-r-2 mx-2"> &nbsp;</div>
                  <div className="flex space-x-2">
                    <MdOutlineMic />
                    <MdOutlinePhotoCamera />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex items-center space-x-2 text-gray-500">
              <RxGear />
              <CgMenuGridR className="" size={30} />
              <p>avatar</p>
            </div>
          </div>
          <div>
            <div>
              <ul className="flex p-2 space-x-3">
                <li className=" cursor-pointer hover:underline">All</li>
                <li className=" cursor-pointer hover:underline">Images</li>
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default SearchHeader;
