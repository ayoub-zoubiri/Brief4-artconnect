import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

function Mission() {
  const { oeuvres } = useGlobalContext();

  return (
    <div>
      {/* En-tête avec titre principal */}
      <div className="py-6 px-6 my-10">
        <h1
          className="text-3xl md:text-4xl font-bold text-black text-center"
          style={{ fontFamily: "Philosopher, sans-serif" }}
        >
          À propos d'ArtConnect
        </h1>
      </div>
      {/* Section Notre mission avec image à gauche */}
      <section className="flex flex-col md:flex-row gap-6 transform transition duration-300 ease-in-out hover:-translate-y-1 my-10 px-5">
        {/* Card Notre mission */}
        <div className="bg-[#C3714C] shadow-md rounded-xl p-4 md:p-6 border-l-4 border-[#1a2b3b] md:w-2/3">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
            Notre mission:
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Promouvoir et préserver l'art et la culture marocaine, en connectant
            artistes, artisans et passionnés pour partager et célébrer le
            patrimoine marocain.
          </p>
        </div>

        {/* Image séparée */}
        <img
          src="https://i.pravatar.cc/300?u=mission"
          alt="Mission"
          className="w-full md:w-1/3 rounded-lg pt-0"
        />
      </section>

      {/* Statistics */}
      <section className="my-10 px-5">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Nos réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
              <p className="text-3xl font-bold text-[#C3714C]">
                {oeuvres.length}+
              </p>
              <p className="text-gray-600">Œuvres référencées</p>
            </div>
            <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
              <p className="text-3xl font-bold text-[#C3714C]">5+</p>
              <p className="text-gray-600">Catégories d'art</p>
            </div>
            <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
              <p className="text-3xl font-bold text-[#C3714C]">2025</p>
              <p className="text-gray-600">Année de création</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
