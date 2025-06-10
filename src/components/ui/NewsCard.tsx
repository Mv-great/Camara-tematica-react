import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  link: string;
  imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, summary, link, imageUrl }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="bg-gray-200 aspect-video relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Imagem ilustrativa da notícia: ${title}`} 
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="225"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Imagem da Notícia
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{date}</p>
        <p className="text-gray-700 mb-4 flex-grow">{summary}</p>
        <a 
          href={link} 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center w-full sm:w-auto"
          aria-label={`Leia mais sobre: ${title}`}
        >
          Leia mais
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
