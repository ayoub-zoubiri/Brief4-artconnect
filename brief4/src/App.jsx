import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Publier from './pages/Publier';
import Favoris from './pages/Favoris';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/publier" element={<Publier />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;