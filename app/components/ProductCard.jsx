'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard({ title, price, description, benefits, isVip, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="product-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 h-full flex flex-col justify-between">
        {isVip && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
            PREMIUM
          </span>
        )}
        
        <div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          {benefits && benefits.length > 0 && (
            <ul className="space-y-1 mb-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center">
                  <span className="mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto">
          <p className="text-2xl font-bold text-green-400">{price}</p>
          <button 
            onClick={() => onAddToCart()}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
} 