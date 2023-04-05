import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { HiPhoto } from 'react-icons/hi2';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
function SearchHeaderOption() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get('searchTerm' || '');
  function selectTab(tab) {
    router.push(
      `/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${search}`
    );
  }
  return (
    <>
      <div className=" ml-8 sm:ml-36 md:ml-40  max-w-5xl">
        <ul className="flex p-2 space-x-3 ">
          <li
            onClick={() => selectTab('All')}
            className={`flex space-x-1 items-center cursor-pointer hover:text-blue-600 ${
              pathName === '/search/web' &&
              'text-blue-600 underline underline-offset-8'
            }`}
          >
            <IoSearchOutline />
            <p>All</p>
          </li>
          <li
            onClick={() => selectTab('Images')}
            className={`flex space-x-1 items-center cursor-pointer hover:text-blue-600 ${
              pathName === '/search/image' &&
              'text-blue-600 underline underline-offset-8'
            }`}
          >
            <HiPhoto />
            <p>Images</p>
          </li>
        </ul>
      </div>
      <div className="w-full border-b-2"></div>
    </>
  );
}

export default SearchHeaderOption;
