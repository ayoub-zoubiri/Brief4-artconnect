import { useGlobalContext } from "../../contexts/GlobalContext.jsx";
import { Link, useNavigate } from "react-router-dom";

const Articles = () => {
  const { oeuvres, addFavorite, isFavorite } = useGlobalContext();
  const navigate = useNavigate();

  const handleAddFavorite = (work) => {
    if (!isFavorite(work.id)) {
      addFavorite(work);
    }
  };

  const handleCardClick = (work) => {
    navigate("/details", { state: { work } });
  };

  return (
    <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-4">Articles/Oeuvres</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {oeuvres.map((work) => (
          <article
            key={work.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handleCardClick(work)}
          >
            <div className="relative">
              <img
                src={work.image}
                className="w-full h-40 object-cover"
                alt={work.title}
              />
              
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-1">
                {work.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2">{work.city}</p>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                {work.description || "Aucune description disponible"}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-[#C96F40] bg-opacity-10 text-[#C96F40] px-2 py-1 rounded-full">
                  #{work.categoryId || "Art"}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddFavorite(work);
                  }}
                  disabled={isFavorite(work.id)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors duration-300 ${
                    isFavorite(work.id)
                      ? "bg-gray-200 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {isFavorite(work.id) ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
