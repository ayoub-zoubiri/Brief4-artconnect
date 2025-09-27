import React, { useState, useEffect, createContext, useContext } from "react";

// Create the context
const GlobalContext = createContext();

// Custom hook to use the global context - this is easier than importing useContext and GlobalContext separately
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  // This check ensures the hook is used within the GlobalProvider
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// Provider component - this wraps our app and provides the data to all components
export const GlobalProvider = ({ children }) => {
  // State variables - these are like containers that hold our data
  // When the data changes, React automatically updates the parts of our app that use this data
  const [oeuvres, setOeuvres] = useState([]); // This will hold all our artworks
  const [categories, setCategories] = useState([]); // This will hold all categories
  const [artisans, setArtisans] = useState([]); // This will hold all artisans
  const [events, setEvents] = useState([]); // This will hold all events
  const [favorites, setFavorites] = useState([]); // This will hold our favorite artworks
  const [loading, setLoading] = useState(true); // This tracks if we're still loading data
  const [error, setError] = useState(null); // This holds any error messages
  const [showAddForm, setShowAddForm] = useState(false); // This controls if we show the add form

  // Function to fetch all data from our server when the app starts
  const fetchData = async () => {
    try {
      // Show loading spinner while we get data
      setLoading(true);

      // Get all artworks from the server
      const oeuvresRes = await fetch("http://localhost:3000/oeuvres");
      const oeuvresData = await oeuvresRes.json();
      setOeuvres(oeuvresData); // Save artworks to our state

      // Get all categories from the server
      const categoriesRes = await fetch("http://localhost:3000/categories");
      const categoriesData = await categoriesRes.json();
      setCategories(categoriesData); // Save categories to our state

      // Get all artisans from the server
      const artisansRes = await fetch("http://localhost:3000/artisans");
      const artisansData = await artisansRes.json();
      setArtisans(artisansData); // Save artisans to our state

      // Get all events from the server
      const eventsRes = await fetch("http://localhost:3000/events");
      const eventsData = await eventsRes.json();
      setEvents(eventsData); // Save events to our state

      // Get all favorites from the server
      const favoritesRes = await fetch("http://localhost:3000/favorites");
      const favoritesData = await favoritesRes.json();
      setFavorites(favoritesData); // Save favorites to our state

      // Hide loading spinner
      setLoading(false);
    } catch (error) {
      // If something goes wrong, save the error message
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to add a new artwork
  const addOeuvre = async (oeuvre) => {
    try {
      // Send the new artwork to the server
      const response = await fetch("http://localhost:3000/oeuvres", {
        method: "POST", // POST means we're creating something new
        headers: {
          "Content-Type": "application/json", // Tell the server we're sending JSON data
        },
        body: JSON.stringify(oeuvre), // Convert our artwork object to a JSON string
      });

      if (response.ok) {
        // If the server successfully saved our artwork
        const newOeuvre = await response.json(); // Get the artwork back from the server
        // Add the new artwork to our list (this updates what users see)
        setOeuvres([...oeuvres, newOeuvre]);
        return newOeuvre;
      }
    } catch (error) {
      // If something goes wrong, save the error message
      setError(error.message);
    }
  };

  // Function to update an existing artwork
  const updateOeuvre = async (id, updatedOeuvre) => {
    try {
      // Send the updated artwork to the server
      const response = await fetch(`http://localhost:3000/oeuvres/${id}`, {
        method: "PUT", // PUT means we're updating something that already exists
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOeuvre),
      });

      if (response.ok) {
        // If the server successfully updated our artwork
        const updated = await response.json(); // Get the updated artwork back
        // Update our list to show the changes
        setOeuvres(oeuvres.map((oeuvre) =>
          oeuvre.id === id ? updated : oeuvre
        ));
        return updated;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to delete an artwork
  const deleteOeuvre = async (id) => {
    try {
      // Tell the server to delete the artwork
      const response = await fetch(`http://localhost:3000/oeuvres/${id}`, {
        method: "DELETE", // DELETE means we want to remove something
      });

      if (response.ok) {
        // If the server successfully deleted our artwork
        // Remove the artwork from our list (this updates what users see)
        setOeuvres(oeuvres.filter((oeuvre) => oeuvre.id !== id));
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to add a new category
  const addCategory = async (category) => {
    try {
      // Send the new category to the server
      const response = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      if (response.ok) {
        const newCategory = await response.json();
        setCategories([...categories, newCategory]);
        return newCategory;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to update an existing category
  const updateCategory = async (id, updatedCategory) => {
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });

      if (response.ok) {
        const updated = await response.json();
        setCategories(categories.map((category) =>
          category.id === id ? updated : category
        ));
        return updated;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to delete a category
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCategories(categories.filter((category) => category.id !== id));
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to add a new artisan
  const addArtisan = async (artisan) => {
    try {
      const response = await fetch("http://localhost:3000/artisans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artisan),
      });

      if (response.ok) {
        const newArtisan = await response.json();
        setArtisans([...artisans, newArtisan]);
        return newArtisan;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to update an existing artisan
  const updateArtisan = async (id, updatedArtisan) => {
    try {
      const response = await fetch(`http://localhost:3000/artisans/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedArtisan),
      });

      if (response.ok) {
        const updated = await response.json();
        setArtisans(artisans.map((artisan) =>
          artisan.id === id ? updated : artisan
        ));
        return updated;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to delete an artisan
  const deleteArtisan = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/artisans/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setArtisans(artisans.filter((artisan) => artisan.id !== id));
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to add a new event
  const addEvent = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        const newEvent = await response.json();
        setEvents([...events, newEvent]);
        return newEvent;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to update an existing event
  const updateEvent = async (id, updatedEvent) => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEvent),
      });

      if (response.ok) {
        const updated = await response.json();
        setEvents(events.map((event) =>
          event.id === id ? updated : event
        ));
        return updated;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to delete an event
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEvents(events.filter((event) => event.id !== id));
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to add an artwork to favorites
  const addFavorite = async (oeuvre) => {
    try {
      // Check if the artwork is already in favorites
      const isAlreadyFavorite = favorites.some(
        (fav) => fav.id === oeuvre.id
      );
      // If it's already a favorite, don't add it again
      if (isAlreadyFavorite) return;

      // Send the favorite to the server
      const response = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oeuvre),
      });

      if (response.ok) {
        // If the server successfully saved our favorite
        const newFavorite = await response.json(); // Get the favorite back from the server
        // Add the favorite to our list (this updates what users see)
        setFavorites([...favorites, newFavorite]);
        return newFavorite;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to remove an artwork from favorites
  const removeFavorite = async (id) => {
    try {
      // Find the favorite in our list
      const favoriteToRemove = favorites.find((fav) => fav.id === id);
      // If we can't find it, stop here
      if (!favoriteToRemove) return;

      // Tell the server to delete the favorite
      const response = await fetch(
        `http://localhost:3000/favorites/${favoriteToRemove.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // If the server successfully deleted our favorite
        // Remove the favorite from our list (this updates what users see)
        setFavorites(favorites.filter((fav) => fav.id !== id));
        return true;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to check if an artwork is in favorites
  const isFavorite = (id) => {
    // Look through our favorites list to see if we can find this artwork
    return favorites.some((fav) => fav.id === id);
  };

  // This runs when our app first loads (because of the empty array [])
  useEffect(() => {
    fetchData(); // Load our data when the app starts
  }, []);

  // This is the data and functions we want to make available to all components
  const value = {
    oeuvres,          // All artworks
    categories,       // All categories
    artisans,         // All artisans
    events,           // All events
    favorites,        // All favorites
    loading,          // Are we still loading data?
    error,            // Any error messages?
    fetchData,        // Function to reload all data
    addOeuvre,        // Function to add a new artwork
    updateOeuvre,     // Function to update an artwork
    deleteOeuvre,     // Function to delete an artwork
    addCategory,      // Function to add a new category
    updateCategory,   // Function to update a category
    deleteCategory,   // Function to delete a category
    addArtisan,       // Function to add a new artisan
    updateArtisan,    // Function to update an artisan
    deleteArtisan,    // Function to delete an artisan
    addEvent,         // Function to add a new event
    updateEvent,      // Function to update an event
    deleteEvent,      // Function to delete an event
    addFavorite,      // Function to add to favorites
    removeFavorite,   // Function to remove from favorites
    isFavorite,       // Function to check if something is a favorite
    showAddForm,      // Should we show the add form?
    setShowAddForm,   // Function to change showAddForm
  };

  // This provides the value to all child components
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};