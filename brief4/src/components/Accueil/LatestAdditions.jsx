import LastAdd from "./LastAdd";
import { useGlobalContext } from "../../contexts/GlobalContext.jsx";

const LatestAdditions = () => {
  const { oeuvres } = useGlobalContext();

  // Get the 5 latest works
  const latestWorks = oeuvres.slice(-5);

  return (
    <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-4">Derniers ajouts</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 overflow-x-auto pb-2">
        {latestWorks.map((work) => (
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <LastAdd key={work.id} work={work} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestAdditions;
