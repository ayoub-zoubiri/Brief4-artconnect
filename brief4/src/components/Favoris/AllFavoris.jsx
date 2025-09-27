import React from "react";
import Favoris from "./Favoris";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

function AllFavoris() {
  const { favorites } = useGlobalContext();

  return (
    <div className="@container mt-10">
      <div className="grid gap-5 mt-10 mb-10 px-5 @3xs:grid-cols-1 @xl:grid-cols-2 @3xl:grid-cols-3 @7xl:grid-cols-4">
        {favorites.map((favorite) => (
          <Favoris key={favorite.id} work={favorite} />
        ))}
        {favorites.length === 0 && (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Vous n'avez pas encore de favoris.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllFavoris;
