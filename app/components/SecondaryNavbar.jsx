'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function SecondaryNavbar({ carrinho }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos os Itens', href: '/loja' },
    { id: 'vips', name: 'Planos VIPs', href: '/planos-vip' },
    { id: 'veiculos', name: 'Veículos', href: '/loja/veiculos' },
    { id: 'faccoes', name: 'Facções', href: '/loja/faccoes' },
    { id: 'dinheiro-armas', name: 'Dinheiro/Armas', href: '/loja/dinheiro-armas' },
    { id: 'punicao', name: 'Remoção de Punição', href: '/loja/punicao' },
    { id: 'outros', name: 'Outros', href: '/loja/outros' }
  ];

  const searchKeywords = {
    'vip': '/planos-vip',
    'plano': '/planos-vip',
    'premium': '/planos-vip',
    'carro': '/loja/veiculos',
    'veiculo': '/loja/veiculos',
    'veículo': '/loja/veiculos',
    'faccao': '/loja/faccoes',
    'facção': '/loja/faccoes',
    'fac': '/loja/faccoes',
    'dinheiro': '/loja/dinheiro-armas',
    'arma': '/loja/dinheiro-armas',
    'punicao': '/loja/punicao',
    'punição': '/loja/punicao',
    'ban': '/loja/punicao',
    'outros': '/loja/outros',
    'item': '/loja/outros'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchLower = searchTerm.toLowerCase();
    
    // Procura por correspondências exatas primeiro
    for (const [keyword, path] of Object.entries(searchKeywords)) {
      if (searchLower.includes(keyword)) {
        router.push(path);
        setSearchTerm('');
        return;
      }
    }
    
    // Se não encontrar correspondência exata, redireciona para a página principal da loja
    router.push('/loja');
    setSearchTerm('');
  };

  return (
    <nav className="fixed top-24 w-full z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none px-4 py-2 rounded-lg transition-colors"
            >
              <span className="font-medium">Categorias</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 w-48 mt-2 bg-black/95 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
                <div className="max-h-[144px] overflow-y-auto">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className={`block w-full text-left px-4 py-3 transition-colors ${
                        pathname === category.href
                          ? 'bg-white/20 text-white'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Barra de Pesquisa */}
          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Pesquisar itens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Carrinho de Compras */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaShoppingCart className="text-white text-2xl mr-2" />
              <span className="text-white text-lg">{Array.isArray(carrinho) ? carrinho.length : 0}</span>
            </div>
            <Link href="/loja/checkout" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors">
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 