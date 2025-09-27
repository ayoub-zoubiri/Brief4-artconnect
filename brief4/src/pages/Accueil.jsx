import Articles from "../components/Accueil/Articles";
import Categories from "../components/Accueil/Categories";
import Events from "../components/Accueil/Events";
import LatestAdditions from "../components/Accueil/LatestAdditions";
import SearchSection from "../components/Accueil/SearchSection";
import ArtisanOfMonth from "../components/Accueil/ArtisanOfMonth";

const Accueil = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <SearchSection />

      <main className="container mx-auto px-4 sm:px-6 py-8 space-y-12">
        <div className="transition-all duration-300 hover:scale-[1.01]">
          <LatestAdditions />
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <Categories />
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <Articles />
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <Events />
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <ArtisanOfMonth />
        </div>
      </main>
    </div>
  );
};

export default Accueil;
