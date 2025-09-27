import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";
import Card from "./Card";

const AdminContentList = () => {
  const { oeuvres, categories, artisans, events } = useGlobalContext();
  const [activeSection, setActiveSection] = useState("oeuvres");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term and active section
  const getFilteredData = () => {
    let data = [];
    switch (activeSection) {
      case "oeuvres":
        data = oeuvres;
        break;
      case "catégories":
        data = categories;
        break;
      case "artisans":
        data = artisans;
        break;
      case "événements":
        data = events;
        break;
      default:
        data = oeuvres;
    }

    if (!searchTerm) return data;

    return data.filter((item) => {
      switch (activeSection) {
        case "oeuvres":
          return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.city.toLowerCase().includes(searchTerm.toLowerCase())
          );
        case "catégories":
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        case "artisans":
          return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.city.toLowerCase().includes(searchTerm.toLowerCase())
          );
        case "événements":
          return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.location.toLowerCase().includes(searchTerm.toLowerCase())
          );
        default:
          return true;
      }
    });
  };

  const filteredData = getFilteredData();

  // Get section title
  const getSectionTitle = () => {
    switch (activeSection) {
      case "oeuvres":
        return "Gestion des œuvres";
      case "catégories":
        return "Gestion des catégories";
      case "artisans":
        return "Gestion des artisans";
      case "événements":
        return "Gestion des événements";
      default:
        return "Gestion des œuvres";
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {getSectionTitle()}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSection === "oeuvres"
                ? "bg-[#C46E4B] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("oeuvres")}
          >
            Œuvres
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSection === "catégories"
                ? "bg-[#C46E4B] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("catégories")}
          >
            Catégories
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSection === "artisans"
                ? "bg-[#C46E4B] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("artisans")}
          >
            Artisans
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSection === "événements"
                ? "bg-[#C46E4B] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSection("événements")}
          >
            Événements
          </button>
        </div>
        <input
          type="text"
          placeholder={`Rechercher des ${activeSection}...`}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <Card 
            key={item.id} 
            item={item} 
            type={activeSection} 
          />
        ))}
        {filteredData.length === 0 && (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Aucun {activeSection} trouvé.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContentList;