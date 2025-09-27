import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

const AdminSidebar = () => {
  const { addOeuvre, addCategory, addArtisan, addEvent } = useGlobalContext();
  const [activeSection, setActiveSection] = useState("oeuvres");

  // Static categories data for form options
  const categories = [
    { id: "1", name: "Artisanat" },
    { id: "2", name: "Gastronomie" },
    { id: "3", name: "Habits" },
    { id: "4", name: "Architecture" },
    { id: "5", name: "Musique & Danse" },
  ];

  const [formData, setFormData] = useState({
    // For oeuvres
    title: "",
    categoryId: "",
    region: "",
    description: "",
    image: "",
    // For categories
    name: "",
    // For artisans
    speciality: "",
    city: "",
    // For events
    startDate: "",
    endDate: "",
    location: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeSection === "oeuvres") {
        // Simple validation
        if (!formData.title || !formData.categoryId || !formData.region) {
          setMessage("Veuillez remplir tous les champs obligatoires.");
          return;
        }

        // In a real app, you would upload the image to a service and get a URL
        // For now, we'll use the data URL or a placeholder
        const imageUrl =
          formData.image || "https://picsum.photos/seed/new/400/300";

        const newOeuvre = {
          title: formData.title,
          categoryId: parseInt(formData.categoryId),
          region: formData.region,
          city: formData.region,
          image: imageUrl,
          description: formData.description,
          createdAt: new Date().toISOString().split("T")[0],
        };

        await addOeuvre(newOeuvre);
        setMessage("Votre œuvre a été ajoutée avec succès!");
      } 
      else if (activeSection === "catégories") {
        if (!formData.name) {
          setMessage("Veuillez remplir le nom de la catégorie.");
          return;
        }

        const newCategory = {
          name: formData.name,
        };

        await addCategory(newCategory);
        setMessage("Votre catégorie a été ajoutée avec succès!");
      } 
      else if (activeSection === "artisans") {
        if (!formData.name || !formData.speciality || !formData.city) {
          setMessage("Veuillez remplir tous les champs obligatoires.");
          return;
        }

        const imageUrl =
          formData.image || "https://picsum.photos/seed/artisan/200/200";

        const newArtisan = {
          name: formData.name,
          speciality: formData.speciality,
          city: formData.city,
          image: imageUrl,
          description: formData.description,
        };

        await addArtisan(newArtisan);
        setMessage("Votre artisan a été ajouté avec succès!");
      } 
      else if (activeSection === "événements") {
        if (!formData.title || !formData.startDate || !formData.location) {
          setMessage("Veuillez remplir tous les champs obligatoires.");
          return;
        }

        const imageUrl =
          formData.image || "https://picsum.photos/seed/event/400/300";

        const newEvent = {
          title: formData.title,
          startDate: formData.startDate,
          endDate: formData.endDate,
          location: formData.location,
          image: imageUrl,
          description: formData.description,
        };

        await addEvent(newEvent);
        setMessage("Votre événement a été ajouté avec succès!");
      }

      // Reset form
      setFormData({
        title: "",
        categoryId: "",
        region: "",
        description: "",
        image: "",
        name: "",
        speciality: "",
        city: "",
        startDate: "",
        endDate: "",
        location: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error(`Error adding ${activeSection}:`, error);
      setMessage(`Erreur lors de l'ajout. Veuillez réessayer.`);
    }
  };

  return (
    <div className="w-64 bg-[#0C2D48] min-h-screen p-6">
      {/* Navigation Menu */}
      <div className="space-y-2 mb-6">
        <button 
          className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium ${
            activeSection === "oeuvres" 
              ? "bg-[#C96F40] text-white" 
              : "text-white"
          }`}
          onClick={() => setActiveSection("oeuvres")}
        >
          Gestion des œuvres
        </button>
        <button 
          className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium ${
            activeSection === "catégories" 
              ? "bg-[#C96F40] text-white" 
              : "text-white"
          }`}
          onClick={() => setActiveSection("catégories")}
        >
          Gestion des catégories
        </button>
        <button 
          className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium ${
            activeSection === "artisans" 
              ? "bg-[#C96F40] text-white" 
              : "text-white"
          }`}
          onClick={() => setActiveSection("artisans")}
        >
          Gestion des artisans
        </button>
        <button 
          className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium ${
            activeSection === "événements" 
              ? "bg-[#C96F40] text-white" 
              : "text-white"
          }`}
          onClick={() => setActiveSection("événements")}
        >
          Gestion des événements
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        {/* Conditional form fields based on active section */}
        {activeSection === "oeuvres" && (
          <>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ajouter un titre"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 text-sm"
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              placeholder="Région/Ville"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="3"
              className="w-full px-4 py-3 bg-white rounded-2xl text-gray-600 placeholder-gray-400 text-sm resize-none"
            />

            {/* Image Upload */}
            <div className="flex items-center justify-center">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="w-full px-4 py-3 bg-white rounded-full text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-icons text-base">cloud_upload</span>
                <span>Téléversez une image</span>
              </label>
            </div>

            {/* Image preview */}
            {imagePreview && (
              <div className="flex justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-20 rounded-md"
                />
              </div>
            )}
          </>
        )}

        {activeSection === "catégories" && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom de la catégorie"
            className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
          />
        )}

        {activeSection === "artisans" && (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom de l'artisan"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <input
              type="text"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              placeholder="Spécialité"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Ville"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="3"
              className="w-full px-4 py-3 bg-white rounded-2xl text-gray-600 placeholder-gray-400 text-sm resize-none"
            />

            {/* Image Upload */}
            <div className="flex items-center justify-center">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id="artisan-image-upload"
              />
              <label
                htmlFor="artisan-image-upload"
                className="w-full px-4 py-3 bg-white rounded-full text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-icons text-base">cloud_upload</span>
                <span>Téléversez une image</span>
              </label>
            </div>

            {/* Image preview */}
            {imagePreview && (
              <div className="flex justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-20 rounded-md"
                />
              </div>
            )}
          </>
        )}

        {activeSection === "événements" && (
          <>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Titre de l'événement"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 text-sm"
            />

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 text-sm"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Lieu"
              className="w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400 text-sm"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="3"
              className="w-full px-4 py-3 bg-white rounded-2xl text-gray-600 placeholder-gray-400 text-sm resize-none"
            />

            {/* Image Upload */}
            <div className="flex items-center justify-center">
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id="event-image-upload"
              />
              <label
                htmlFor="event-image-upload"
                className="w-full px-4 py-3 bg-white rounded-full text-gray-700 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-icons text-base">cloud_upload</span>
                <span>Téléversez une image</span>
              </label>
            </div>

            {/* Image preview */}
            {imagePreview && (
              <div className="flex justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-20 rounded-md"
                />
              </div>
            )}
          </>
        )}

        {/* Message */}
        {message && (
          <div
            className={`text-center p-2 rounded-md text-xs ${
              message.includes("succès")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Bottom Ajout Button */}
        <button
          type="submit"
          className="w-full bg-white text-gray-900 py-3 px-4 rounded-full text-sm font-bold"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AdminSidebar;