const Footer = () => {
  return (
    <footer className="bg-[#0C2D48] text-white py-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div>
          <h3 className="text-lg font-bold">
            <span className="text-orange-500">Art</span>Connect
          </h3>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">About Us</h4>
          <p className="text-xs text-gray-300 leading-relaxed">
            ArtConnect Maroc est une plateforme web interactive destinée à promouvoir l'art et la culture marocaine pour mettre en valeur les talents locaux et transmettre la culture.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact Us</h4>
          <p className="text-xs text-gray-300">contact@artconnect.ma</p>
          <p className="text-xs text-gray-300">+212 66 88 66 66</p>
          <p className="text-xs text-gray-300">Casablanca, Grand Casablanca</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;