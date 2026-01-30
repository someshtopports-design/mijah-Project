
import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-sm group">
          <img
            src="lifestyle-collage.jpg"
            alt="mijah usage in various living spaces"
            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x800?text=Upload+lifestyle-collage.jpg';
            }}
          />
        </div>
        <div className="grid grid-rows-2 gap-8">
          <div className="overflow-hidden rounded-sm group">
            <img
              src="product-close-box.jpg"
              alt="mijah product close-up"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x400?text=Upload+product-close-box.jpg';
              }}
            />
          </div>
          <div className="overflow-hidden rounded-sm group">
            <img
              src="lifestyle-wardrobe.jpg"
              alt="mijah in wardrobe"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x400?text=Upload+lifestyle-wardrobe.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
