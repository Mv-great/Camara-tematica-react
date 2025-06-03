import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/ui/HeroSection';
import SectionTitle from './components/ui/SectionTitle';
import NewsCard from './components/ui/NewsCard';
import PartnerLogo from './components/ui/PartnerLogo';
import ContactForm from './components/ui/ContactForm';
import AccessibilityButton from './components/ui/AccessibilityButton';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  // Aplicar tamanho de fonte ao elemento raiz
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Aplicar alto contraste
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const handleIncreaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const handleDecreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const handleResetFontSize = () => {
    setFontSize(16);
  };

  const handleToggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const handleContactSubmit = (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    // Em um cenário real, aqui enviaríamos os dados para um backend
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  };

  return (
    <div className={`flex flex-col min-h-screen ${highContrast ? 'high-contrast' : ''}`}>
      <Header />
      <main className="flex-grow">
        <HeroSection 
          title="Câmara Temática de Inovação" 
          subtitle="Promovendo o desenvolvimento científico, tecnológico e inovador em Assis Chateaubriand"
        />
        
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <SectionTitle 
                title="Bem-vindo ao Portal da Inovação"
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                A Câmara Temática de Ciência, Tecnologia e Inovação de Assis Chateaubriand 
                foi instituída após a lei 3398/2023, que estabeleceu a política Municipal 
                de Inovação, Ciência e Tecnologia. Nosso objetivo é promover o desenvolvimento 
                científico, tecnológico e inovador do município através da união de diferentes 
                setores e entidades.
              </p>
              <p className="text-gray-700">
                Conheça nossos projetos, acompanhe nossas ações e participe desta 
                importante iniciativa para o futuro de Assis Chateaubriand.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <SectionTitle 
              title="Notícias Recentes"
              subtitle="Acompanhe as últimas atividades e conquistas da Câmara Temática"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NewsCard 
                title="Eleita diretoria da Câmara Temática"
                date="13 de dezembro de 2023"
                summary="Foi eleita a nova diretoria da Câmara Temática, composta por Joaquim José Honório de Lima como presidente, Willian Bosquette Rosa como vice-presidente e Ana Paula Pereira Frohlich como secretária."
                link="/noticias/eleita-diretoria"
              />
              
              <NewsCard 
                title="Aprovado Regimento Interno"
                date="23 de novembro de 2023"
                summary="Durante reunião realizada na UNIMEO/CTESOP, foi aprovada a proposta do regimento interno da Câmara Temática, que será publicado no Diário Oficial do município."
                link="/noticias/aprovado-regimento"
              />
              
              <NewsCard 
                title="Plano de Ação em Desenvolvimento"
                date="5 de abril de 2024"
                summary="Com a eleição realizada, o próximo passo é colocar em prática o plano de ação da Câmara Temática, que visa implementar a política Municipal de Inovação."
                link="/noticias/plano-acao"
              />
            </div>
          </section>
          
          <section className="mb-16">
            <SectionTitle 
              title="Entidades Participantes"
              subtitle="Conheça as instituições que compõem a Câmara Temática de Inovação"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <PartnerLogo name="IFPR" altText="Logo do Instituto Federal do Paraná" />
              <PartnerLogo name="UNIMEO/CTESOP" altText="Logo da UNIMEO/CTESOP" />
              <PartnerLogo name="Prefeitura Municipal" altText="Logo da Prefeitura Municipal de Assis Chateaubriand" />
              <PartnerLogo name="ACIAC" altText="Logo da Associação Comercial de Assis Chateaubriand" />
              <PartnerLogo name="OAB" altText="Logo da Ordem dos Advogados do Brasil" />
              <PartnerLogo name="Núcleo Regional de Educação" altText="Logo do Núcleo Regional de Educação" />
            </div>
          </section>
          
          <section className="mb-16">
            <SectionTitle 
              title="Entre em Contato"
              subtitle="Tem interesse em participar ou saber mais sobre a Câmara Temática de Inovação?"
            />
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <ContactForm onSubmit={handleContactSubmit} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
      
      {/* Botão de Acessibilidade */}
      <AccessibilityButton 
        onToggleHighContrast={handleToggleHighContrast}
        onIncreaseFontSize={handleIncreaseFontSize}
        onDecreaseFontSize={handleDecreaseFontSize}
        onResetFontSize={handleResetFontSize}
      />
      
      {/* Botão "Voltar ao Topo" */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Voltar ao topo da página"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
