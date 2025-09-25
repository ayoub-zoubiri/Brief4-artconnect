import LastAdd from './LastAdd'

const LatestAdditions = () => {
  return (
    <section>
      <h2 className="text-sm font-semibold mb-4 text-blue-600 underline">Derniers ajouts</h2>
      <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2">
        <LastAdd/>
        <LastAdd/>
        <LastAdd/>
        <LastAdd/>
        <LastAdd/>
       
        
        
        
      </div>
    </section>
  );
};

export default LatestAdditions;