import React from 'react';

interface AccessibilityButtonProps {
  onToggleHighContrast: () => void;
  onIncreaseFontSize: () => void;
  onDecreaseFontSize: () => void;
  onResetFontSize: () => void;
}

const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({
  onToggleHighContrast,
  onIncreaseFontSize,
  onDecreaseFontSize,
  onResetFontSize
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Opções de acessibilidade"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Acessibilidade</h3>
          
          <div className="space-y-3">
            <button
              onClick={onToggleHighContrast}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              aria-label="Alternar alto contraste"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2v20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Alto Contraste
            </button>
            
            <button
              onClick={onIncreaseFontSize}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              aria-label="Aumentar tamanho da fonte"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M6 9l6-6 6 6"></path>
                <path d="M12 3v18"></path>
              </svg>
              Aumentar Fonte
            </button>
            
            <button
              onClick={onDecreaseFontSize}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              aria-label="Diminuir tamanho da fonte"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M6 15l6 6 6-6"></path>
                <path d="M12 3v18"></path>
              </svg>
              Diminuir Fonte
            </button>
            
            <button
              onClick={onResetFontSize}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              aria-label="Resetar tamanho da fonte"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M3 12h18"></path>
                <path d="M12 3v18"></path>
              </svg>
              Resetar Fonte
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
