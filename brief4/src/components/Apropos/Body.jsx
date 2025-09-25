import React from "react";
import Footer from "../Publier/Footer";
export default function Body() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* En-tête avec titre principal */}
        <div className="py-6 px-6">
          <h1
            className="text-3xl md:text-4xl font-bold text-black text-center"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            À propos d'ArtConnect
          </h1>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            {/* Section Notre mission avec image à gauche */}
            <section className="flex flex-col md:flex-row gap-6 transform transition duration-300 ease-in-out hover:-translate-y-1">
            {/* Card Notre mission */}
            <div className="bg-[#C3714C] shadow-md rounded-xl p-4 md:p-6 border-l-4 border-[#1a2b3b] md:w-2/3">
                <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Notre mission:
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed">
                Promouvoir et préserver l'art et la culture marocaine, en
                connectant artistes, artisans et passionnés pour partager et
                célébrer le patrimoine marocain.
                </p>
            </div>

            {/* Image séparée */}
            <img
                src='./public/artisanat.webp'
                alt="Mission"
                className="w-full md:w-1/3 rounded-lg pt-0"
            />
            </section>


        {/* Card Ce que vous pouvez faire */}
            <section className="bg-[#1a2b3b] p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-[#C3714C] transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            <h2 className=" text-white text-xl md:text-2xl font-semibold mb-4">
                Ce que vous pouvez faire:
            </h2>
            <ul className="space-y-3 text-white ">
                <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span className="text-base md:text-lg">
                    Explore les créations (peintures, artisanat, architecture, gastronomie, habits traditionnels).
                </span>
                </li>
                <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span className="text-base md:text-lg">
                    Participer aux événements culturels.
                </span>
                </li>
                <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span className="text-base md:text-lg">
                    Sauvegarder vos favoris (œuvres et traditions préférées).
                </span>
                </li>
            </ul>
            </section>

            {/* Card Notre histoire */}
            <section className="bg-[#C3714C] p-4 md:p-6 rounded-xl shadow-md border-l-4 border-[#1a2b3b]
            transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
            Notre histoire:
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed">
                Créé en 2025, ArtConnect Maroc a recensé plus de 200 traditions et œuvres, 
                pour mettre en lumière les talents locaux et transmettre le savoir-faire marocain.
            </p>
            </section>



          {/* Section Nos valeurs */}
          <section>
            <h2
              className="text-xl md:text-2xl font-semibold mb-4 pb-2 text-center"
              style={{ fontFamily: "Philosopher, sans-serif" }}
            >
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a2b3b] p-4 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Authenticité:
                </h3>
                <p className="text-white text-sm md:text-base">
                  Respecter et valoriser l'héritage culturel marocain.
                </p>
              </div>
              <div className="bg-[#1a2b3b] p-4 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Innovation:
                </h3>
                <p className="text-white text-sm md:text-base">
                  Encourager de nouvelles créations et formes artistiques.
                </p>
              </div>
              <div className="bg-[#1a2b3b] p-4 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Communauté:
                </h3>
                <p className="text-white text-sm md:text-base">
                  Créer un espace où artistes et amateurs partagent leurs passions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
