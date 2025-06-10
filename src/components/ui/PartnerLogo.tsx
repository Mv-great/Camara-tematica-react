import React from 'react';

interface PartnerLogoProps {
  name: string;
  altText: string;
  imageUrl?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, altText, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 transition-transform hover:scale-105">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={altText} 
          className="max-w-full h-auto object-contain"
          loading="lazy"
          width="150"
          height="100"
        />
      ) : (
        <div className="w-full h-24 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 font-medium">
          {name}
        </div>
      )}
    </div>
  );
};

export default PartnerLogo;
