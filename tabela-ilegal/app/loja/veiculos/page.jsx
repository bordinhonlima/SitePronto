'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '@/app/components/SecondaryNavbar';
import ProductCard from '@/app/components/ProductCard';

const veiculos = [
  // Carros Comuns
  {
    id: 1,
    nome: "Fit Doro",
    preco: "R$ 49,99",
    descricao: "Carro compacto e econômico",
    caracteristicas: [
      "Design moderno",
      "Econômico",
      "Fácil manutenção",
      "Ideal para cidade"
    ],
    categoria: "comum"
  },
  {
    id: 2,
    nome: "Volkenrad Savana Sport",
    preco: "R$ 49,99",
    descricao: "Esportivo versátil",
    caracteristicas: [
      "Performance balanceada",
      "Design esportivo",
      "Interior confortável",
      "Ótimo custo-benefício"
    ],
    categoria: "comum"
  },
  {
    id: 3,
    nome: "Chevron Zelta",
    preco: "R$ 49,99",
    descricao: "Carro popular confiável",
    caracteristicas: [
      "Econômico",
      "Baixo custo de manutenção",
      "Prático",
      "Versátil"
    ],
    categoria: "comum"
  },
  {
    id: 4,
    nome: "Volkenrad Bolinha",
    preco: "R$ 49,99",
    categoria: "comum"
  },
  {
    id: 5,
    nome: "Chevron Kardeti",
    preco: "R$ 49,99",
    categoria: "comum"
  },
  {
    id: 6,
    nome: "Koenizeg",
    preco: "R$ 99,99",
    categoria: "comum"
  },
  {
    id: 7,
    nome: "Nissin GTX",
    preco: "R$ 99,99",
    categoria: "comum"
  },
  {
    id: 8,
    nome: "BN M4 Sport",
    preco: "R$ 99,99",
    categoria: "comum"
  },
  // ... continuar com todos os carros comuns ...

  // Motos
  {
    id: 100,
    nome: "Hironda Wildcat",
    preco: "R$ 49,99",
    descricao: "Moto versátil para cidade",
    caracteristicas: [
      "Ágil",
      "Econômica",
      "Fácil pilotagem",
      "Manutenção simples"
    ],
    categoria: "motos"
  },
  {
    id: 101,
    nome: "Triumphe Tigre",
    preco: "R$ 49,99",
    descricao: "Moto aventureira para todos os terrenos",
    caracteristicas: [
      "Robusta",
      "Versátil",
      "Alta performance",
      "Ideal para aventuras"
    ],
    categoria: "motos"
  },
  {
    id: 102,
    nome: "Durata 1200",
    preco: "R$ 49,99",
    descricao: "Moto esportiva de alta cilindrada",
    caracteristicas: [
      "Potente",
      "Design agressivo",
      "Tecnologia avançada",
      "Performance superior"
    ],
    categoria: "motos"
  },
  {
    id: 103,
    nome: "MT-09",
    preco: "R$ 69,99",
    descricao: "Naked bike de alto desempenho",
    caracteristicas: [
      "Motor tricilíndrico",
      "Controle de tração",
      "Design agressivo",
      "Performance superior"
    ],
    categoria: "motos"
  },
  {
    id: 104,
    nome: "R1",
    preco: "R$ 89,99",
    descricao: "Superbike de competição",
    caracteristicas: [
      "Máxima performance",
      "Tecnologia de ponta",
      "Aerodinâmica avançada",
      "Sistema eletrônico completo"
    ],
    categoria: "motos"
  },
  // ... continuar com todas as motos ...

  // Carros Exclusivos
  {
    id: 200,
    nome: "Mule 1500KG",
    preco: "R$ 299,99",
    descricao: "Veículo utilitário de alta capacidade",
    caracteristicas: [
      "Capacidade 1500KG",
      "Robusto",
      "Versátil",
      "Alta durabilidade"
    ],
    categoria: "exclusivos"
  },
  {
    id: 201,
    nome: "Mule 3500KG",
    preco: "R$ 499,99",
    descricao: "Veículo utilitário de capacidade extra",
    caracteristicas: [
      "Capacidade 3500KG",
      "Extra robusto",
      "Ideal para grandes cargas",
      "Máxima durabilidade"
    ],
    categoria: "exclusivos"
  },
  {
    id: 202,
    nome: "Mule 5000KG",
    preco: "R$ 699,99",
    descricao: "O maior utilitário da categoria",
    caracteristicas: [
      "Capacidade 5000KG",
      "Suprema robustez",
      "Capacidade máxima",
      "Durabilidade incomparável"
    ],
    categoria: "exclusivos"
  },
  // ... continuar com todos os carros exclusivos ...

  // Carros Blindados
  {
    id: 300,
    nome: "Mercena A45MG (BLINDADO)",
    preco: "R$ 99,00",
    descricao: "Versão blindada do clássico A45MG",
    caracteristicas: [
      "Blindagem reforçada",
      "Proteção premium",
      "Interior luxuoso",
      "Máxima segurança"
    ],
    categoria: "blindados"
  },
  {
    id: 301,
    nome: "Kuruma (BLINDADO)",
    preco: "R$ 99,00",
    descricao: "Sedan esportivo com blindagem",
    caracteristicas: [
      "Blindagem de alta performance",
      "Design agressivo",
      "Interior esportivo",
      "Proteção completa"
    ],
    categoria: "blindados"
  }
  // ... continuar com todos os carros blindados ...
];

export default function VeiculosPage() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  const adicionarAoCarrinho = (item) => {
    const novoCarrinho = [...carrinho, item];
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  // Função para criar bolhas
  function createBubble() {
    const section = document.querySelector('.background');
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    
    section.appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 15000);
  }

  useEffect(() => {
    const interval = setInterval(createBubble, 3000);
    return () => clearInterval(interval);
  }, []);

  // Agrupar veículos por categoria
  const veiculosPorCategoria = veiculos.reduce((acc, veiculo) => {
    if (!acc[veiculo.categoria]) {
      acc[veiculo.categoria] = [];
    }
    acc[veiculo.categoria].push(veiculo);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="background fixed inset-0 pointer-events-none overflow-hidden z-0" />
      <SecondaryNavbar />
      <div className="container mx-auto px-4 py-8 relative z-10">
        {Object.entries(veiculosPorCategoria).map(([categoria, veiculos]) => (
          <div key={categoria} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center capitalize">
              {categoria === 'comum' ? 'Carros Comuns' :
               categoria === 'motos' ? 'Motos' :
               categoria === 'exclusivos' ? 'Veículos Exclusivos' :
               categoria === 'blindados' ? 'Veículos Blindados' : categoria}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {veiculos.map((veiculo) => (
                <ProductCard
                  key={veiculo.id}
                  item={veiculo}
                  onAddToCart={adicionarAoCarrinho}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 