import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";
import { useNavigate } from "react-router-dom";

const LastAdd = ({ work }) => {
  const { addFavorite, isFavorite } = useGlobalContext();
  const navigate = useNavigate();

  if (!work) {
    return (
      <div className="text-center bg-white py-4 px-4 rounded-xl shadow-md min-w-[140px] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
        <p className="mt-2 text-xs text-gray-700">Loading...</p>
      </div>
    );
  }

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    if (!isFavorite(work.id)) {
      addFavorite(work);
    }
  };

  const handleCardClick = () => {
    navigate("/details", { state: { work } });
  };

  return (
    <div
      className="text-center bg-white py-4 px-4 rounded-xl shadow-md min-w-[140px] border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={work.image}
          className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#C96F40]"
          alt={work.title}
        />
        
      </div>
      <h3 className="mt-2 text-xs font-bold text-gray-800 line-clamp-1">
        {work.title}
      </h3>
      <p className="text-xs text-gray-600 mt-1">{work.city}</p>
      
     
    </div>
  );
};

export default LastAdd;
