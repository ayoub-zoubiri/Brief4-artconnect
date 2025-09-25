const SearchSection = () => {
  return (
    <section className="bg-[#C96F40] py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 px-6 justify-center">
        <input
          type="text"
          placeholder="DKSDLK SDKDKS SDLK"
          className="w-full md:w-2/3 px-4 py-2 rounded-full border border-gray-300 text-sm bg-amber-50"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
          Régions
        </button>
      </div>
    </section>
  );
};

export default SearchSection;