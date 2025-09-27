const categoryData = [
  { id: 1, name: "Artisanat", icon: "palette" },
  { id: 2, name: "Gastronomie", icon: "restaurant" },
  { id: 3, name: "Habits", icon: "checkroom" },
  { id: 4, name: "Architecture", icon: "architecture" },
  { id: 5, name: "Musique & Danse", icon: "music_note" },
];

const Categories = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-4">Catégories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="bg-[#C96F40] text-white rounded-xl flex flex-col items-center py-5 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C96F40] mb-3">
              <span className="material-icons text-xl">{category.icon}</span>
            </div>
            <p className="text-sm font-medium text-center px-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
