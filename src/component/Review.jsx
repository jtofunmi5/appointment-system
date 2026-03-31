import React from 'react';

const Card = ({circle, name, review, text}) => {
  return (
    <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
          {circle}
        </div>
        <div>
          <div className="text-gray-900 font-medium">{name}</div>
        </div>
      </div>
      <div className="flex text-red-500 text-xl">{review}</div>
      <p className="text-gray-700">
       {text}
      </p>
      {/* <div className="text-red-500 font-medium cursor-pointer hover:underline">
        Read more
      </div> */}
    </div>
  );
}

export default Card;
