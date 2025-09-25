import React from "react";
export default function Form() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <form
      className="bg-[#F6F3EC] rounded-2xl shadow-[0_4px_6px_0_rgba(0,0,0,0.25)] w-full max-w-md p-6 space-y-4 flex flex-col
      transition-transform duration-200 ease-out hover:-translate-y-1"
      >
        {/* Titre */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Titre de l'œuvre</label>
          <input
            type="text"
            placeholder="Ajouter un titre"
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Catégorie */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Catégorie</label>
          <select className=" bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]">
            <option>Sélectionnez une catégorie</option>
            <option>Peinture</option>
            <option>Artisanat</option>
            <option>Architecture</option>
          </select>
        </div>

        {/* Région/Ville */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Région/Ville</label>
          <input
            type="text"
            placeholder="Région/Ville"
            className=" bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Description */}
        <div className="flex items-start space-x-4">
          <label className="w-32 font-medium mt-2">Description</label>
          <textarea
            placeholder="Votre description..."
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 h-24 resize-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Upload image */}
        <div className="flex items-center space-x-4">
          <input
            type="file"
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[#C46E4B] file:text-white file:cursor-pointer"
          />
        </div>

        {/* Explorer les créations */}
        <div>
          <p className="bg-[#293B4F] text-white text-center rounded-md py-2 text-sm">
            Explorer les créations (peintures, artisanat, architecture)
          </p>
        </div>

        {/* Bouton*/}
        <button
          type="submit"
          className="w-32 bg-[#C46E4B] text-white font-semibold py-2 rounded-md hover:bg-[#a55739] mx-auto transition-colors duration-300"
        >
          Publier
        </button>
      </form>
    </div>
  );
}
