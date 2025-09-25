import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#0C2D48] text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/">
            <span className="text-orange-500">Art</span>Connect
          </Link>
        </div>
        <nav className="space-x-6 hidden md:flex pr-20">
          <Link to="/" className="hover:text-orange-400">Accueil</Link>
          <Link to="/publier" className="hover:text-orange-400">Publier</Link>
          <Link to="/favoris" className="hover:text-orange-400">Favoris</Link>
          <Link to="/about" className="hover:text-orange-400">À propos</Link>
          <Link to="/admin" className="hover:text-orange-400">Admin</Link>
        </nav>
        <button className="md:hidden text-xl">☰</button>
      </div>
    </header>
  );
};

export default Navbar;