import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

export default function Form() {
  const { addOeuvre } = useGlobalContext();
  // Static categories data instead of accessing from global context
  const categories = [
    { id: "1", name: "Artisanat" },
    { id: "2", name: "Gastronomie" },
    { id: "3", name: "Habits" },
    { id: "4", name: "Architecture" },
    { id: "5", name: "Musique & Danse" },
  ];

  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    region: "",
    description: "",
    image: "",
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

    // Simple validation
    if (!formData.title || !formData.categoryId || !formData.region) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
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
        description: formData.description, // Include description
        createdAt: new Date().toISOString().split("T")[0],
      };

      await addOeuvre(newOeuvre);
      setMessage("Votre œuvre a été publiée avec succès!");

      // Reset form
      setFormData({
        title: "",
        categoryId: "",
        region: "",
        description: "",
        image: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error publishing work:", error);
      setMessage("Erreur lors de la publication. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F6F3EC] rounded-2xl shadow-[0_4px_6px_0_rgba(0,0,0,0.25)] w-full max-w-md p-6 space-y-4 flex flex-col
        transition-transform duration-200 ease-out hover:-translate-y-1"
      >
        {/* Titre */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Titre de l'œuvre</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ajouter un titre"
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Catégorie */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Catégorie</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className=" bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Région/Ville */}
        <div className="flex items-center space-x-4">
          <label className="w-32 font-medium">Région/Ville</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Région/Ville"
            className=" bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Description */}
        <div className="flex items-start space-x-4">
          <label className="w-32 font-medium mt-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Votre description..."
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 h-24 resize-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C46E4B]"
          />
        </div>

        {/* Upload image */}
        <div className="flex items-center space-x-4">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="bg-white flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[#C46E4B] file:text-white file:cursor-pointer"
          />
        </div>

        {/* Image preview */}
        {imagePreview && (
          <div className="flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-40 rounded-md"
            />
          </div>
        )}

        {/* Message */}
        {message && (
          <div
            className={`text-center p-2 rounded-md ${
              message.includes("succès")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Explorer les créations */}
        <div>
          <p className="bg-[#293B4F] text-white text-center rounded-md py-2 text-sm">
            Explorer les créations (peintures, artisanat, architecture)
          </p>
        </div>

        {/* Bouton*/}
        <button
          type="submit"
          className="w-32 bg-[#C46E4B] text-white font-semibold py-2 rounded-md hover:bg-[#a55739] mx-auto transition-colors duration-300"
        >
          Publier
        </button>
      </form>
    </div>
  );
}
