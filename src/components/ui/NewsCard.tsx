import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  summary,
  imageUrl,
  link
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Imagem da notícia: ${title}`} 
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="200"
          />
        ) : (
          <span className="text-gray-500">Imagem da Notícia</span>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{date}</p>
        <p className="text-gray-700 flex-grow">{summary}</p>
        <a 
          href={link} 
          className="inline-block mt-4 text-blue-600 hover:underline"
          aria-label={`Leia mais sobre: ${title}`}
        >
          Leia mais
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
