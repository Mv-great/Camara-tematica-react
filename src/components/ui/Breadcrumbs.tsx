import React from 'react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-100">
      <ol className="flex flex-wrap items-center text-sm text-gray-600">
        <li className="flex items-center">
          <a href="/" className="hover:text-blue-600 transition-colors">
            Início
          </a>
          {items.length > 0 && (
            <span className="mx-2" aria-hidden="true">
              /
            </span>
          )}
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === items.length - 1 ? (
              <span className="font-medium text-blue-800" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <a href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </a>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
