'use client';
import React from 'react';
import Image from 'next/image';

interface PopularDestinationThumbnailProps {
  imageUrl: string;
  title: string;
  imageAlt?: string;
}

const PopularDestinationThumbnail: React.FC<PopularDestinationThumbnailProps> = ({
  imageUrl,
  title,
  imageAlt = `Thumbnail for ${title}`,
}) => {
  return (
    // Using art-deco-card for consistency, but applying specific styles from mock
    <div className="art-deco-card rounded-none text-center p-4">
      <div className="relative w-full h-32 mb-2"> {/* Container with fixed height */}
        <Image 
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/300x200/cccccc/ffffff?text=Error'
          }}
        />
      </div>
      <h4 className="font-heading text-lg text-yellow-400">{title}</h4>
    </div>
  );
};

export default PopularDestinationThumbnail; 