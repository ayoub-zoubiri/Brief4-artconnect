import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

export default function Favoris({ work }) {
  const { removeFavorite } = useGlobalContext();

  if (!work) {
    return (
      <div className="max-w-sm bg-white rounded-[20px] shadow-md overflow-hidden py-3 border border-[#C3714C]">
        <div className="p-5">
          <div className="w-full h-48 bg-gray-200 rounded-[20px]"></div>
        </div>
        <div className="flex items-center justify-between px-5">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Loading...</h3>
            <p className="text-sm text-gray-500 mt-1">Category</p>
          </div>
          <div className="rounded-full p-1.5 border border-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#EA3323"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm bg-white rounded-[20px] shadow-md overflow-hidden py-3 border border-[#C3714C] ">
      {/* Image */}
      <div className="p-5">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-48 object-cover rounded-[20px]"
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between px-5">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{work.city}</p>
        </div>
        <div
          className="rounded-full p-1.5 border border-red-600 cursor-pointer"
          onClick={() => removeFavorite(work.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#EA3323"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
