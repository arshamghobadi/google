export const dynamic = 'force-dynamic';
import ImageSearch from '@/components/ImageSearch';
import Pagination from '@/components/Pagination';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

async function ImagePage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
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
    <div className="space-y-2 p-2 mb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
        {items.map((item, i) => (
          <ImageSearch key={i} data={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default ImagePage;
