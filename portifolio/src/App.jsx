import Header from './components/Header';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-rose-100 text-gray-900 font-sans">
      <Header />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
