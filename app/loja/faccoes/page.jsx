'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import ProductCard from '../../components/ProductCard';

const faccoes = [
  {
    id: 1,
    nome: "BAÚ 5000kg",
    preco: "R$ 29,99",
    descricao: "Armazenamento extra para sua facção",
    beneficios: [
      "Capacidade de 5000kg",
      "Segurança reforçada",
      "Acesso compartilhado",
      "Organização otimizada"
    ],
    categoria: "utilidades"
  },
  {
    id: 2,
    nome: "01 SLOT DE PRODUÇÃO",
    preco: "R$ 149,99",
    descricao: "Slot adicional para produção",
    beneficios: [
      "Produção extra",
      "Aumento de lucros",
      "Slot permanente",
      "Ativação imediata"
    ],
    categoria: "utilidades"
  },
  {
    id: 3,
    nome: "VIP FACÇÃO BLACK",
    preco: "R$ 499,00",
    descricao: "Benefícios VIP premium para facções",
    beneficios: [
      "Vantagens exclusivas",
      "Bônus de produção",
      "Recursos especiais",
      "Suporte prioritário"
    ],
    categoria: "vip"
  },
  {
    id: 4,
    nome: "VIP FACÇÃO SUPREME",
    preco: "R$ 749,00",
    descricao: "Benefícios VIP supremos para facções",
    beneficios: [
      "Vantagens supremas",
      "Produção maximizada",
      "Recursos avançados",
      "Suporte VIP"
    ],
    categoria: "vip"
  },
  {
    id: 5,
    nome: "VIP FACÇÃO INFINITY",
    preco: "R$ 1.249,00",
    descricao: "O mais alto nível VIP para facções",
    beneficios: [
      "Vantagens ilimitadas",
      "Produção infinita",
      "Recursos únicos",
      "Suporte dedicado 24/7"
    ],
    categoria: "vip"
  }
];

export default function FaccoesPage() {
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
    'utilidades': 'Utilidades',
    'vip': 'VIP'
  };

  const itensFiltrados = categoria === 'todos' 
    ? faccoes 
    : faccoes.filter(item => item.categoria === categoria);

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="background" />
      <SecondaryNavbar carrinho={carrinho} />
      
      <div className="relative z-10 max-w-7xl mx-auto pt-48 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Facções</h1>
        
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
          {itensFiltrados.map((item) => (
            <ProductCard
              key={item.id}
              title={item.nome}
              price={item.preco}
              description={item.descricao}
              benefits={item.beneficios}
              isVip={item.premium}
              onAddToCart={() => adicionarAoCarrinho(item)}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 