import { useGlobalContext } from "../../contexts/GlobalContext";

const Events = () => {
  const { events } = useGlobalContext();

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <section>
      <h2 className="text-sm font-semibold mb-4">Évènements à venir</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <img
              src={event.image}
              className="w-full h-32 object-cover"
              alt={event.title}
            />
            <div className="p-3">
              <h4 className="text-sm font-semibold mb-2">{event.title}</h4>
              <p className="text-xs text-gray-600">
                {formatDate(event.startDate)} - {event.location}
              </p>
              <p className="text-xs text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <div className="col-span-full text-center py-4">
            <p className="text-gray-500">Aucun événement à venir pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;