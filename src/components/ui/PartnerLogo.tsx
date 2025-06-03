import React from 'react';

interface PartnerLogoProps {
  name: string;
  logoUrl?: string;
  altText: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({
  name,
  logoUrl,
  altText
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={altText} 
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          width="120"
          height="80"
        />
      ) : (
        <span className="text-gray-400 text-sm text-center">{name}</span>
      )}
    </div>
  );
};

export default PartnerLogo;
