import React from 'react';
import Button from './Button';

const Card = ({title, text, link, image}) => {
  return (
    <div className="group before:hover:scale-95 before: hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 flex items-center justify-center overflow-hidden">
  <img
    src={image}
    alt="icon"
    className="w-full h-full object-cover"
  />
</div>
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500 flex flex-col gap-2">
        <span className="text-2xl font-semibold">{title}</span>
        {text}</div>
      <a className="bg-blue-500 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">{link}</a>
    </div>
  );
}

export default Card;
