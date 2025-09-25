import React from 'react'

function Valeurs() {
  return (
    <div className='my-10 px-5'>
      {/* Section Nos valeurs */}
          <section>
            <h2
              className="text-xl md:text-2xl font-semibold mb-4 pb-2 text-center"
              style={{ fontFamily: "Philosopher, sans-serif" }}
            >
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center bg-[#1a2b3b] px-4 py-20 mx-10 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Authenticité:
                </h3>
                <p className="text-white text-sm md:text-base">
                  Respecter et valoriser l'héritage culturel marocain.
                </p>
              </div>
              <div className="bg-[#1a2b3b] px-4 py-20 mx-10 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Innovation:
                </h3>
                <p className="text-white text-sm md:text-base">
                  Encourager de nouvelles créations et formes artistiques.
                </p>
              </div>
              <div className="bg-[#1a2b3b] px-4 py-20 mx-10 rounded-lg border-l-4 border-[#C3714C] transition-transform duration-300 ease-in-out hover:scale-105">
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
  )
}

export default Valeurs
