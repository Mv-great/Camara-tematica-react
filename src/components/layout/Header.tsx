import { useState, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Fecha o menu quando a tela é redimensionada para desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Previne scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Câmara Temática de Inovação
          </h1>
          <p className="text-sm md:text-base">Assis Chateaubriand - PR</p>
        </div>

        {/* Menu para desktop */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-6">
            <a 
              href="/" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página inicial"
            >
              Início
            </a>
            <a 
              href="/sobre" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página sobre"
            >
              Sobre
            </a>
            <a 
              href="/composicao" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página de composição"
            >
              Composição
            </a>
            <a 
              href="/projetos" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página de projetos"
            >
              Projetos
            </a>
            <a 
              href="/noticias" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página de notícias"
            >
              Notícias
            </a>
            <a 
              href="/contato" 
              className="hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 rounded px-2 py-1"
              aria-label="Ir para página de contato"
            >
              Contato
            </a>
          </nav>
        )}

        {/* Botão de menu hambúrguer para mobile */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Menu mobile */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-blue-800 bg-opacity-95 z-50 pt-20">
          <nav className="container mx-auto px-4 flex flex-col space-y-6 text-center text-xl">
            <a 
              href="/" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página inicial"
            >
              Início
            </a>
            <a 
              href="/sobre" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página sobre"
            >
              Sobre
            </a>
            <a 
              href="/composicao" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página de composição"
            >
              Composição
            </a>
            <a 
              href="/projetos" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página de projetos"
            >
              Projetos
            </a>
            <a 
              href="/noticias" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página de notícias"
            >
              Notícias
            </a>
            <a 
              href="/contato" 
              className="py-3 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ir para página de contato"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
