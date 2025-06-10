import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar se o dispositivo corresponde a uma media query específica
 * @param query - A media query CSS a ser verificada (ex: '(max-width: 768px)')
 * @returns boolean - Retorna true se a media query corresponder, false caso contrário
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Cria um objeto MediaQueryList para monitorar a media query
    const mediaQuery = window.matchMedia(query);
    
    // Define o estado inicial com base na correspondência atual
    setMatches(mediaQuery.matches);

    // Função de callback para atualizar o estado quando a correspondência mudar
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Adiciona o listener para mudanças na media query
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup: remove o listener quando o componente for desmontado
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]); // Re-executa o efeito apenas se a query mudar

  return matches;
}
