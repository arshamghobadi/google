import Link from 'next/link';
import React from 'react';

function ImageSearch({ data }) {
  return (
    <Link href={data.image.contextLink} className="group ">
      <img
        className=" object-contain transition rounded-lg min-w-[120px] min-h-[120px] max-w-[250px] max-h-[250px] hover:shadow-xl hover:shadow-slate-300"
        src={data.link}
        alt={data.tite}
      />
      <p className=" hover:underline">{data.title}</p>
      <p className=" hover:underline">{data.displayLink}</p>
    </Link>
  );
}

export default ImageSearch;
