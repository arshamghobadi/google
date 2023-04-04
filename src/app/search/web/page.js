import CardSearch from '@/components/CardSearch';
import Pagination from '@/components/Pagination';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

async function SearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );
  const { data } = response;

  if (!response) {
    throw new Error('somthing went wrong please try again');
  }
  const { items } = data;
  if (!items) {
    return (
      <div>
        <h1>nothing found</h1>
        <p>Try to Search for somthing elese</p>
        <Link href="/">Home Page</Link>
      </div>
    );
  }

  return (
    <div className=" max-w-[60vw] ml-14 sm:ml-36 space-y-2">
      <div className=" text-gray-500">
        About {data.searchInformation.totalResults} results &#40;
        {data.searchInformation.searchTime.toFixed(2)}&#41;
      </div>
      <div className="flex flex-col space-y-3">
        {items.map((item, i) => (
          <CardSearch key={i} data={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default SearchPage;
