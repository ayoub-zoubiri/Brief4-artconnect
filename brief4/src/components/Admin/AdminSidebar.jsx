const AdminSidebar = () => {
    return (
        <div className="w-64 bg-[#0C2D48] min-h-screen p-6">
            {/* Navigation Menu */}
            <div className="space-y-2 mb-6">
                <button className="w-full text-left px-4 py-3 rounded-full text-sm font-medium bg-[#C96F40] text-white">
                    oeuvres
                </button>
                <button className="w-full text-left px-4 py-3 rounded-full text-sm font-medium text-white">
                    catégories
                </button>
                <button className="w-full text-left px-4 py-3 rounded-full text-sm font-medium text-white">
                    artisans
                </button>
                <button className="w-full text-left px-4 py-3 rounded-full text-sm font-medium text-white">
                    événements
                </button>
            </div>

            {/* Ajout Button */}
            <button className="w-full bg-[#C96F40] text-white py-3 px-4 rounded-full text-sm font-bold mb-6">
                Ajout
            </button>

            {/* Form Inputs */}
            <div className="space-y-3 mb-6">
                <input
                    type="text"
                    placeholder="Ajouter un titre"
                    className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
                />

                <select className="w-full px-4 py-3 bg-white rounded-full text-gray-600 text-sm">
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
                    placeholder="Région/Ville"
                    className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
                />

                <textarea
                    placeholder="Description"
                    rows="3"
                    className="w-full px-4 py-3 bg-white rounded-2xl text-gray-600 placeholder-gray-400 text-sm resize-none"
                />

                {/* Image Upload */}
                <button className="w-full px-4 py-3 bg-white rounded-full text-gray-700 text-sm font-medium flex items-center justify-center gap-2">
                    <span className="material-icons text-base">cloud_upload</span>
                    <span>Téléversez une image</span>
                </button>
            </div>

            {/* Bottom Ajout Button */}
            <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-full text-sm font-bold">
                Ajout
            </button>
        </div>
    );
};

export default AdminSidebar;