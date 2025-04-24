import React from 'react';
import { IconType } from 'react-icons'; // Import IconType for typing

interface ToolCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon: IconComponent, // Rename prop for clarity
  title,
  description,
}) => {
  return (
    <div className="art-deco-card p-6 text-center rounded-none">
      {/* Render the passed icon component */}
      <IconComponent size={48} className="text-yellow-400 mb-4 mx-auto" />
      <h3 className="text-xl font-heading text-yellow-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default ToolCard; 