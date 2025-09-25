import React from 'react'

function Mission() {
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
    </div>
  )
}

export default Mission
