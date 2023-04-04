'use client';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  return (
    <div className="text-blue-700 flex justify-center space-x-10">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTrem=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <HiChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTrem=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <HiChevronRight />
            <p>next</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
