import axios from 'axios';
import Link from 'next/link';
import React from 'react';

async function SearchPage({ searchParams }) {
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
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
    <div>
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
}

export default SearchPage;
