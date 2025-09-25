const About = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#0C2D48] mb-8">À propos</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            ArtConnect Maroc est une plateforme web interactive destinée à promouvoir l'art et la culture marocaine.
          </p>
          <p className="text-gray-600">
            Notre mission est de connecter les artisans, artistes et amateurs d'art marocain à travers une plateforme moderne et accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;