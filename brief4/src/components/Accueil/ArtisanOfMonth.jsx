const ArtisanOfMonth = () => {
  return (
    <section>
      <div className="bg-[#C96F40] rounded-lg p-4 flex flex-col md:flex-row items-start gap-4 shadow-sm">
        <img 
          src="https://picsum.photos/seed/artisan/300/300" 
          className="w-32 h-32 object-cover rounded-lg" 
          alt="Latifa Maschrys"
        />
        <div className="text-white">
          <h3 className="text-lg font-bold mb-2">Artisan du mois : Latifa Maschrys</h3>
          <p className="text-sm">
            Créé en 2025, ArtConnect Maroc a reçu plus de 200 traditions et oeuvres pour mettre en valeur les talents locaux et transmettre la culture. Faire rayonner Créé en 2025, ArtConnect Maroc a reçu plus de 200 traditions et oeuvres pour mettre en valeur les talents locaux et transmettre la culture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtisanOfMonth;