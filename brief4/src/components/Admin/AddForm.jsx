const AddForm = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0C2D48] rounded-3xl p-10 shadow-2xl max-w-lg w-full">
        <div className="space-y-6">
          <input
            type="text"
            className="w-full px-6 py-5 bg-white rounded-full text-gray-500 text-lg placeholder-gray-400"
            placeholder="Ajouter un titre"
          />

          <select className="w-full px-6 py-5 bg-white rounded-full text-gray-500 text-lg">
            <option>Sélectionnez une catégorie</option>
            <option>Artisanat</option>
            <option>Gastronomie</option>
            <option>Habits</option>
            <option>Architecture</option>
            <option>Musique</option>
            <option>Danse</option>
          </select>

          <input
            type="text"
            className="w-full px-6 py-5 bg-white rounded-full text-gray-500 text-lg placeholder-gray-400"
            placeholder="Région/Ville"
          />

          <textarea
            rows="3"
            className="w-full px-6 py-5 bg-white rounded-3xl text-gray-500 text-lg placeholder-gray-400 resize-none"
            placeholder="Description"
          />

          <button className="w-full px-6 py-5 bg-white rounded-full text-gray-800 text-lg font-medium flex items-center justify-center gap-3">
            <span className="material-icons text-2xl">cloud_upload</span>
            <span>Téléversez une image</span>
          </button>

          <button className="w-full bg-white text-gray-900 py-5 px-6 rounded-full text-2xl font-bold mt-8">
            Ajout
          </button>

          <button className="absolute top-4 right-4 text-white">
            <span className="material-icons text-2xl">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;