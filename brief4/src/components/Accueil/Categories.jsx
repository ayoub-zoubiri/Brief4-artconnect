const Categories = () => {
  return (
    <section>
      <h2 className="text-sm font-semibold mb-4">Catégories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">palette</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">restaurant</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">checkroom</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">architecture</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">music_note</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
        <div className="bg-[#C96F40] text-white rounded-lg flex flex-col items-center py-4 shadow-sm">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#C96F40] mb-2">
            <span className="material-icons text-lg">sports_kabaddi</span>
          </div>
          <p className="text-xs text-center">Category 1</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;