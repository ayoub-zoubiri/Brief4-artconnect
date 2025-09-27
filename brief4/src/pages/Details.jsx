import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext.jsx";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { work } = location.state || {};
  const { addFavorite, isFavorite } = useGlobalContext();

  if (!work) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Oeuvre non trouvée
            </h1>
            <p className="text-gray-600 mb-6">
              Désolé, nous n'avons pas pu trouver l'oeuvre que vous recherchez.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#C96F40] text-white px-6 py-2 rounded-full hover:bg-[#a55739] transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddFavorite = () => {
    if (!isFavorite(work.id)) {
      addFavorite(work);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
          {/* Header with back button */}
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-[#C96F40] hover:text-[#a55739] transition-colors"
            >
              <span className="material-icons mr-2">arrow_back</span>
              Retour
            </button>
          </div>

          {/* Title */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {work.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>{work.city}</span>
              <span className="mx-2">•</span>
              <span>{work.createdAt || "Date inconnue"}</span>
            </div>
          </div>

          {/* Image */}
          <div className="px-6 pb-6">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Description */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {work.description ||
                "Aucune description disponible pour cette œuvre."}
            </p>
          </div>

          {/* Actions */}
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <button
              onClick={handleAddFavorite}
              disabled={isFavorite(work.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                isFavorite(work.id)
                  ? "bg-red-500 text-white"
                  : "bg-[#C96F40] text-white hover:bg-[#a55739]"
              }`}
            >
              <span className="material-icons mr-2">
                {isFavorite(work.id) ? "favorite" : "favorite_border"}
              </span>
              {isFavorite(work.id) ? "Dans les favoris" : "Ajouter aux favoris"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
