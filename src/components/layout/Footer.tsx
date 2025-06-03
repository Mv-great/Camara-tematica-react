import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Câmara Temática de Inovação</h3>
            <p className="text-gray-300">
              Promovendo o desenvolvimento científico, tecnológico e inovador 
              no município de Assis Chateaubriand.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/composicao" className="text-gray-300 hover:text-white transition-colors">Composição</a></li>
              <li><a href="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic text-gray-300">
              <p>Assis Chateaubriand, Paraná</p>
              <p>Email: contato@camarainovacao.com.br</p>
              <p>Telefone: (44) 3528-8455</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Câmara Temática de Ciência, Tecnologia e Inovação de Assis Chateaubriand. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido como parte do Projeto Integrador - Aplicando Responsividade e Otimização de Sites
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
