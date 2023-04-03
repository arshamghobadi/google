import axios from 'axios';
import React from 'react';

async function SearchPage({ searchParams }) {
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const { data } = response;

  return (
    <div>
      {data?.items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
}

export default SearchPage;
