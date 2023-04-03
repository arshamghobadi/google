import Link from 'next/link';
import React from 'react';
import Parser from 'html-react-parser';
function CardSearch({ data }) {
  return (
    <Link className=" group" href={data.link}>
      <p className=" text-sm font-semibold text-gray-700">{data.displayLink}</p>
      <p className=" text-blue-800 font-semibold group-hover:underline decoration-blue-800">
        {data.title}
      </p>
      <p className="text-sm text-gray-500">{Parser(data.htmlSnippet)}</p>
    </Link>
  );
}

export default CardSearch;
