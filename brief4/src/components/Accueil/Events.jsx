const Events = () => {
  return (
    <section>
      <h2 className="text-sm font-semibold mb-4">Évènements à venir</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://picsum.photos/seed/event1/400/200" 
            className="w-full h-32 object-cover" 
            alt="Event De city here"
          />
          <div className="p-3">
            <h4 className="text-sm font-semibold mb-2">Event De city here</h4>
            <p className="text-xs text-gray-600">Date ici 2025. ArtConnect Maroc a reçu plus de 200 traditions et oeuvres pour mettre en valeur les talents locaux et transmettre la culture.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://picsum.photos/seed/event2/400/200" 
            className="w-full h-32 object-cover" 
            alt="Event De city here"
          />
          <div className="p-3">
            <h4 className="text-sm font-semibold mb-2">Event De city here</h4>
            <p className="text-xs text-gray-600">Date ici 2025. ArtConnect Maroc a reçu plus de 200 traditions et oeuvres pour mettre en valeur les talents locaux et transmettre la culture.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://picsum.photos/seed/event3/400/200" 
            className="w-full h-32 object-cover" 
            alt="Event De city here"
          />
          <div className="p-3">
            <h4 className="text-sm font-semibold mb-2">Event De city here</h4>
            <p className="text-xs text-gray-600">Date ici 2025. ArtConnect Maroc a reçu plus de 200 traditions et oeuvres pour mettre en valeur les talents locaux et transmettre la culture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;