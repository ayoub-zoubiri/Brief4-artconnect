import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

const Card = ({ item, type }) => {
  const {
    updateOeuvre,
    deleteOeuvre,
    updateCategory,
    deleteCategory,
    updateArtisan,
    deleteArtisan,
    updateEvent,
    deleteEvent
  } = useGlobalContext();

  // Static categories data
  const categories = [
    { id: "1", name: "Artisanat" },
    { id: "2", name: "Gastronomie" },
    { id: "3", name: "Habits" },
    { id: "4", name: "Architecture" },
    { id: "5", name: "Musique & Danse" },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...item });
  const [imagePreview, setImagePreview] = useState(item.image || null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      switch (type) {
        case "oeuvres":
          await updateOeuvre(item.id, editData);
          break;
        case "catégories":
          await updateCategory(item.id, editData);
          break;
        case "artisans":
          await updateArtisan(item.id, editData);
          break;
        case "événements":
          await updateEvent(item.id, editData);
          break;
        default:
          break;
      }
      setIsEditing(false);
    } catch (error) {
      console.error(`Error updating ${type}:`, error);
    }
  };

  const handleDelete = async () => {
    const typeName = type === "événements" ? "événement" : 
                    type === "catégories" ? "catégorie" : 
                    type.slice(0, -1); // Remove 's' for singular form
    
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ce/la ${typeName} ?`)) {
      try {
        switch (type) {
          case "oeuvres":
            await deleteOeuvre(item.id);
            break;
          case "catégories":
            await deleteCategory(item.id);
            break;
          case "artisans":
            await deleteArtisan(item.id);
            break;
          case "événements":
            await deleteEvent(item.id);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        // Also update form data with the image data URL
        setEditData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Render edit form based on type
  if (isEditing) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        {type === "oeuvres" && (
          <>
            {/* Image Preview */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-3xl mb-4"
              />
            )}

            {/* Image Upload */}
            <div className="mb-4">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id={`image-upload-${item.id}`}
              />
              <label
                htmlFor={`image-upload-${item.id}`}
                className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Changer l'image</span>
              </label>
            </div>

            {/* City and Title */}
            <div className="flex items-center gap-4 mb-2">
              <input
                type="text"
                name="city"
                value={editData.city}
                onChange={handleChange}
                placeholder="Ville"
                className="text-base font-bold text-gray-900 border-b border-gray-300 focus:outline-none w-1/2"
              />
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Titre"
                className="text-base font-bold text-gray-900 border-b border-gray-300 focus:outline-none w-1/2"
              />
            </div>

            {/* Category */}
            <div className="mb-2">
              <select
                name="categoryId"
                value={editData.categoryId}
                onChange={handleChange}
                className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              >
                <option value="">Sélectionnez une catégorie</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              rows="3"
            />
          </>
        )}

        {type === "catégories" && (
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              placeholder="Nom de la catégorie"
              className="w-full text-base font-bold text-gray-900 border-b border-gray-300 focus:outline-none"
            />
          </div>
        )}

        {type === "artisans" && (
          <>
            {/* Image Preview */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-3xl mb-4"
              />
            )}

            {/* Image Upload */}
            <div className="mb-4">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id={`artisan-image-upload-${item.id}`}
              />
              <label
                htmlFor={`artisan-image-upload-${item.id}`}
                className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Changer l'image</span>
              </label>
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                placeholder="Nom de l'artisan"
                className="w-full text-base font-bold text-gray-900 border-b border-gray-300 focus:outline-none"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="speciality"
                value={editData.speciality}
                onChange={handleChange}
                placeholder="Spécialité"
                className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="city"
                value={editData.city}
                onChange={handleChange}
                placeholder="Ville"
                className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              />
            </div>

            {/* Description */}
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              rows="3"
            />
          </>
        )}

        {type === "événements" && (
          <>
            {/* Image Preview */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-40 object-cover rounded-3xl mb-4"
              />
            )}

            {/* Image Upload */}
            <div className="mb-4">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id={`event-image-upload-${item.id}`}
              />
              <label
                htmlFor={`event-image-upload-${item.id}`}
                className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Changer l'image</span>
              </label>
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Titre de l'événement"
                className="w-full text-base font-bold text-gray-900 border-b border-gray-300 focus:outline-none"
              />
            </div>

            <div className="flex gap-2 mb-2">
              <input
                type="date"
                name="startDate"
                value={editData.startDate}
                onChange={handleChange}
                className="w-1/2 text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              />
              <input
                type="date"
                name="endDate"
                value={editData.endDate}
                onChange={handleChange}
                className="w-1/2 text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleChange}
                placeholder="Lieu"
                className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              />
            </div>

            {/* Description */}
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
              rows="3"
            />
          </>
        )}

        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 px-4 py-2 bg-[#C46E4B] text-white rounded-full text-sm font-medium"
            onClick={handleSave}
          >
            Sauvegarder
          </button>
          <button
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700"
            onClick={() => setIsEditing(false)}
          >
            Annuler
          </button>
        </div>
      </div>
    );
  }

  // Render view mode based on type
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
      {(type === "oeuvres" || type === "artisans" || type === "événements") && item.image && (
        <img
          src={item.image}
          alt={type === "oeuvres" ? item.title : type === "artisans" ? item.name : item.title}
          className="w-full h-40 object-cover rounded-3xl mb-4"
        />
      )}
      
      <div className="mb-4">
        {type === "oeuvres" && (
          <>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-base font-bold text-gray-900">{item.city}</span>
              <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {item.description || "Aucune description disponible"}
            </p>
          </>
        )}

        {type === "catégories" && (
          <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
        )}

        {type === "artisans" && (
          <>
            <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.speciality}</p>
            <p className="text-sm text-gray-500">{item.city}</p>
            <p className="text-sm text-gray-600 mt-2">
              {item.description || "Aucune description disponible"}
            </p>
          </>
        )}

        {type === "événements" && (
          <>
            <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">
              {item.startDate} {item.endDate && ` - ${item.endDate}`}
            </p>
            <p className="text-sm text-gray-500">{item.location}</p>
            <p className="text-sm text-gray-600 mt-2">
              {item.description || "Aucune description disponible"}
            </p>
          </>
        )}
      </div>
      
      <div className="flex gap-3">
        <button
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700"
          onClick={handleEdit}
        >
          Modifier
        </button>
        <button
          className="flex-1 px-4 py-2 border border-red-300 text-red-600 rounded-full text-sm font-medium"
          onClick={handleDelete}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Card;