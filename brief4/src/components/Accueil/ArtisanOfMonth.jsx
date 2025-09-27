const artisanData = {
  id: 1,
  name: "Latifa Maschrys",
  speciality: "Tapisserie Berbère",
  city: "Marrakech",
  image: "https://picsum.photos/seed/artisan/300/300",
  description:
    "Maître artisan spécialisée dans les tapisseries berbères traditionnelles. Avec plus de 20 ans d'expérience, elle perpétue l'art ancestral des tissages marocains en formant les jeunes générations.",
};

const ArtisanOfMonth = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-4 text-[#C96F40]">Artisan du mois</h2>
      <div className="bg-[#C96F40] rounded-xl p-5 flex flex-col md:flex-row items-center gap-6 shadow-md">
        <img
          src={artisanData.image}
          className="w-36 h-36 object-cover rounded-xl border-4 border-white shadow-lg"
          alt={artisanData.name}
        />
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">{artisanData.name}</h3>
          <p className="text-lg font-semibold mb-3">
            {artisanData.speciality} - {artisanData.city}
          </p>
          <p className="text-base leading-relaxed">{artisanData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtisanOfMonth;
