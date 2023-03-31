'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMic, MdOutlinePhotoCamera } from 'react-icons/md';
import { useRouter } from 'next/navigation';
function Mian() {
  const [value, setValue] = useState('');
  const [randomWordData, setRandomWordData] = useState('');

  const router = useRouter();
  async function randomWord() {
    const { data } = await axios.get(
      'https://random-word-api.herokuapp.com/word'
    );
    const pickWord = data[0];

    setRandomWordData(pickWord);
  }
  if (randomWordData) {
    router.push(`/search/web?searchTerm=${randomWordData}`);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    router.push(`/search/web?searchTerm=${value}`);
  };

  return (
    <main className=" h-[40.7rem]">
      <div className="h-full flex flex-col items-center justify-center">
        <Image
          priority={true}
          src="/Google_2015_logo.svg.png"
          width={250}
          height={100}
          alt="google logo"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-4 flex flex-col items-center "
        >
          <div className="flex justify-between items-center border-2 w-5/6 p-4 rounded-full max-w-lg">
            <div>
              <IoSearchOutline />
            </div>
            <input
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              className=" outline-none flex-grow px-2"
            />
            <div className="flex space-x-2">
              <MdOutlineMic />
              <MdOutlinePhotoCamera />
            </div>
          </div>
          <div className=" pt-3 space-x-3">
            <button onClick={handleSubmit} className="btn ">
              Google Search
            </button>
            <button onClick={randomWord} className="btn ">
              Im Felling Lucky{' '}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Mian;
