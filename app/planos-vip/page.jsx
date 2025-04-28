'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '../components/SecondaryNavbar';
import ProductCard from '../components/ProductCard';

const vipItems = [
  {
    id: 1,
    title: '🐰VIP PASCOA🐰',
    price: 'R$ 199,99',
    description: 'EXCLUSIVO',
    benefits: ['Benefícios exclusivos de Páscoa', 'Itens temáticos únicos', 'Vantagens especiais']
  },
  {
    id: 2,
    title: '🚚VIP FARMADOR🚚',
    price: 'R$ 249,99',
    description: 'POR TEMPO LIMITADO',
    benefits: ['Bônus de farming', 'Acesso a áreas especiais', 'Multiplicadores de recursos']
  },
  {
    id: 3,
    title: '💸VIP MAGNATA💸',
    price: 'R$ 149,99',
    description: 'ATÉ O WIPE',
    benefits: ['Benefícios premium', 'Vantagens econômicas', 'Status exclusivo']
  },
  {
    id: 4,
    title: '🎉VIP ANO NOVO 2025🎉',
    price: 'R$ 149,99',
    description: 'NOVO',
    benefits: ['Comemore 2025 com estilo', 'Itens exclusivos', 'Eventos especiais']
  },
  {
    id: 5,
    title: '🚀VIP BLACK🚀',
    price: 'R$ 249,99',
    description: 'NOVO',
    benefits: ['Benefícios premium black', 'Acesso VIP exclusivo', 'Status diferenciado']
  },
  {
    id: 6,
    title: '⭐VIP EXCLUSIVE⭐',
    price: 'R$ 199,99',
    description: 'ATÉ O WIPE',
    benefits: ['Benefícios exclusivos', 'Acesso prioritário', 'Recursos premium']
  },
  {
    id: 7,
    title: 'VIP WIPE',
    price: 'R$ 249,99',
    description: 'DURAÇÃO ATÉ O WIPE',
    benefits: ['Benefícios completos', 'Duração máxima', 'Vantagens especiais']
  },
  {
    id: 8,
    title: 'VIP BRONZE',
    price: 'R$ 29,99',
    description: 'Plano inicial',
    benefits: ['Benefícios básicos', 'Acesso VIP', 'Recursos iniciais']
  },
  {
    id: 9,
    title: 'VIP PRATA',
    price: 'R$ 49,99',
    description: 'Plano intermediário',
    benefits: ['Benefícios aprimorados', 'Acesso VIP+', 'Recursos extras']
  },
  {
    id: 10,
    title: 'VIP OURO',
    price: 'R$ 69,99',
    description: 'Plano avançado',
    benefits: ['Benefícios premium', 'Acesso VIP++', 'Recursos especiais']
  },
  {
    id: 11,
    title: 'VIP PLATINA',
    price: 'R$ 99,99',
    description: 'Plano superior',
    benefits: ['Benefícios elite', 'Acesso VIP+++', 'Recursos exclusivos']
  },
  {
    id: 12,
    title: 'VIP COMPLEXO',
    price: 'R$ 149,99',
    description: 'Plano premium',
    benefits: ['Benefícios complexos', 'Acesso total', 'Recursos premium']
  },
  {
    id: 13,
    title: 'VIP SUPREMO COMPLEXO',
    price: 'R$ 349,99',
    description: 'Plano supremo',
    benefits: ['Benefícios supremos', 'Acesso ilimitado', 'Recursos supremos']
  },
  {
    id: 14,
    title: 'VIP MONSTER',
    price: 'R$ 449,99',
    description: 'Plano monstruoso',
    benefits: ['Benefícios monstruosos', 'Acesso monster', 'Recursos especiais']
  },
  {
    id: 15,
    title: 'VIP GOD',
    price: 'R$ 549,99',
    description: 'Plano divino',
    benefits: ['Benefícios divinos', 'Acesso god', 'Recursos únicos']
  },
  {
    id: 16,
    title: 'VIP RUBI',
    price: 'R$ 799,99',
    description: 'DURAÇÃO ATÉ O WIPE',
    benefits: ['Benefícios rubi', 'Acesso premium total', 'Recursos exclusivos']
  },
  {
    id: 17,
    title: 'VIP ESMERALDA',
    price: 'R$ 999,99',
    description: 'DURAÇÃO ATÉ O WIPE',
    benefits: ['Benefícios esmeralda', 'Acesso máximo', 'Recursos supremos']
  }
];

export default function PlanosVipPage() {
  const [carrinho, setCarrinho] = useState([]);
  const [categoria, setCategoria] = useState('todos');

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }

    // Efeito de bolhas
    const createBubble = () => {
      const background = document.querySelector('.background');
      if (!background) return;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      const size = Math.random() * 100 + 50;
      const left = Math.random() * 100;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      background.appendChild(bubble);
      
      setTimeout(() => {
        bubble.remove();
      }, 20000);
    };

    const interval = setInterval(createBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  const adicionarAoCarrinho = (item) => {
    const novoCarrinho = [...carrinho, item];
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const categorias = {
    'todos': 'Todos',
    'exclusivo': 'Exclusivos',
    'limitado': 'Limitados',
    'novo': 'Novos',
    'wipe': 'Até o Wipe',
    'padrao': 'Padrão',
    'premium': 'Premium'
  };

  const getCategoria = (vip) => {
    if (vip.description === 'EXCLUSIVO') return 'exclusivo';
    if (vip.description === 'POR TEMPO LIMITADO') return 'limitado';
    if (vip.description === 'NOVO') return 'novo';
    if (vip.description.includes('WIPE')) return 'wipe';
    if (['BRONZE', 'PRATA', 'OURO', 'PLATINA'].some(tier => vip.title.includes(tier))) return 'padrao';
    return 'premium';
  };

  const itensFiltrados = categoria === 'todos' 
    ? vipItems 
    : vipItems.filter(vip => getCategoria(vip) === categoria);

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="background" />
      <SecondaryNavbar carrinho={carrinho} />
      
      <div className="relative z-10 max-w-7xl mx-auto pt-48 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Planos VIP</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categorias).map(([key, label]) => (
            <button 
              key={key}
              onClick={() => setCategoria(key)}
              className={`px-4 py-2 rounded-lg ${categoria === key ? 'bg-green-500 text-white' : 'bg-white/10 text-white'}`}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {itensFiltrados.map((vip) => (
            <ProductCard
              key={vip.id}
              title={vip.title}
              price={vip.price}
              description={vip.description}
              benefits={vip.benefits}
              onAddToCart={() => adicionarAoCarrinho(vip)}
              isVip={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 