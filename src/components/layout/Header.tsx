import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold">
              Câmara Temática de Inovação
              <div className="text-sm font-normal text-blue-200">Assis Chateaubriand - PR</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-200 transition-colors">Início</a>
            <a href="/sobre" className="hover:text-blue-200 transition-colors">Sobre</a>
            <a href="/composicao" className="hover:text-blue-200 transition-colors">Composição</a>
            <a href="/projetos" className="hover:text-blue-200 transition-colors">Projetos</a>
            <a href="/noticias" className="hover:text-blue-200 transition-colors">Notícias</a>
            <a href="/contato" className="hover:text-blue-200 transition-colors">Contato</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a href="/" className="hover:text-blue-200 transition-colors py-2">Início</a>
              <a href="/sobre" className="hover:text-blue-200 transition-colors py-2">Sobre</a>
              <a href="/composicao" className="hover:text-blue-200 transition-colors py-2">Composição</a>
              <a href="/projetos" className="hover:text-blue-200 transition-colors py-2">Projetos</a>
              <a href="/noticias" className="hover:text-blue-200 transition-colors py-2">Notícias</a>
              <a href="/contato" className="hover:text-blue-200 transition-colors py-2">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
