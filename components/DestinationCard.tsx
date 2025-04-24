import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

interface DestinationCardProps {
  imageUrl: string;
  title: string;
  price: string;
  imageAlt?: string; // Optional alt text
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageUrl,
  title,
  price,
  imageAlt = `Image of ${title}`, // Default alt text
}) => {
  return (
    <div className="art-deco-card rounded-none">
      <div className="relative w-full h-48"> {/* Container for aspect ratio and relative positioning */} 
        <Image 
          src={imageUrl}
          alt={imageAlt}
          layout="fill" // Use fill layout
          objectFit="cover" // Corresponds to object-cover
          onError={(e) => {
            // Optional: Fallback image handling if needed
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/cccccc/ffffff?text=Error'
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-heading text-yellow-400 mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard; 