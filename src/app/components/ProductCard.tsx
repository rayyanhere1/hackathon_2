import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<Product> = ({ name, image, price }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-lg text-gray-500">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
