import { useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

const SearchSection = () => {
  const { oeuvres } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you would filter the works based on the search term
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="bg-[#C96F40] py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 px-6 justify-center">
        <form onSubmit={handleSearch} className="w-full md:w-2/3">
          <input
            type="text"
            placeholder="Rechercher des œuvres, artisans, catégories..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm bg-amber-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium"
          onClick={handleSearch}
        >
          Rechercher
        </button>
      </div>

      {/* Search stats */}
      <div className="container mx-auto px-6 mt-2 text-center">
        <p className="text-white text-xs">
          {oeuvres.length} œuvres référencées | 5 catégories | 2 artisans
        </p>
      </div>
    </section>
  );
};

export default SearchSection;
