import React from 'react'

function Histoire() {
  return (
    <div className='px-5'>
      {/* Card Ce que vous pouvez faire */}
            <section className="bg-[#1a2b3b] p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-[#C3714C] transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg my-5 ">
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
    </div>
  )
}

export default Histoire
