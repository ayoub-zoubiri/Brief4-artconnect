import Articles from   "../components/Accueil/Articles";
import Categories from "../components/Accueil/Categories";
import Events from "../components/Accueil/Events";
import LatestAdditions from "../components/Accueil/LatestAdditions";
import SearchSection from "../components/Accueil/SearchSection";
import ArtisanOfMonth from "../components/Accueil/ArtisanOfMonth";

const Accueil = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <SearchSection />

      <main className="container mx-auto px-6 py-6 space-y-8">
        <LatestAdditions />
        <Categories />
        <Articles />
        <Events />
        <ArtisanOfMonth />
      </main>
    </div>
  );
};

export default Accueil;
