'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import ProductCard from '../../components/ProductCard';

const outrosItens = [
  {
    id: 1,
    nome: "COMBO VALE CASA / VALE GARAGEM",
    preco: "R$ 129,99",
    descricao: "Combo completo para sua moradia",
    beneficios: [
      "Vale Casa incluso",
      "Vale Garagem incluso",
      "Economia no combo",
      "Ativação imediata"
    ],
    caracteristicas: ["Combo premium", "Melhor custo-benefício"]
  },
  {
    id: 2,
    nome: "Vale Casa",
    preco: "R$ 99,99",
    descricao: "Garanta sua moradia própria",
    beneficios: [
      "Escolha flexível",
      "Localização premium",
      "Processo rápido",
      "Suporte dedicado"
    ],
    caracteristicas: ["Premium", "Garantido"]
  },
  {
    id: 3,
    nome: "Vale Garagem",
    preco: "R$ 49,99",
    descricao: "Espaço seguro para seus veículos",
    beneficios: [
      "Garagem privativa",
      "Localização exclusiva",
      "Ativação rápida",
      "Suporte prioritário"
    ],
    caracteristicas: ["Seguro", "Exclusivo"]
  },
  {
    id: 4,
    nome: "Paredão",
    preco: "R$ 49,99",
    descricao: "Sistema de som personalizado",
    beneficios: [
      "Som potente",
      "Instalação inclusa",
      "Qualidade premium",
      "Suporte técnico"
    ],
    caracteristicas: ["Alta potência", "Premium"]
  },
  {
    id: 5,
    nome: "Paredao2",
    preco: "R$ 99,99",
    descricao: "Sistema de som avançado",
    beneficios: [
      "Som profissional",
      "Instalação premium",
      "Máxima qualidade",
      "Suporte VIP"
    ],
    caracteristicas: ["Profissional", "Superior"]
  },
  {
    id: 6,
    nome: "COMBO Yahama E Volkenrad",
    preco: "R$ 49,99",
    descricao: "Combo exclusivo de veículos",
    beneficios: [
      "2 veículos premium",
      "Entrega imediata",
      "Documentação inclusa",
      "Suporte dedicado"
    ],
    caracteristicas: ["Exclusivo", "Premium"]
  },
  {
    id: 7,
    nome: "Neon",
    preco: "R$ 19,99",
    descricao: "Kit de iluminação neon",
    beneficios: [
      "Neon personalizado",
      "Instalação inclusa",
      "Várias cores",
      "Suporte técnico"
    ],
    caracteristicas: ["Personalizado", "Moderno"]
  },
  {
    id: 8,
    nome: "Iate",
    preco: "R$ 499,99",
    descricao: "Iate luxuoso para navegação",
    beneficios: [
      "Embarcação premium",
      "Interior luxuoso",
      "Documentação inclusa",
      "Suporte VIP"
    ],
    caracteristicas: ["Luxo", "Exclusivo"]
  },
  {
    id: 9,
    nome: "Iate 2",
    preco: "R$ 499,99",
    descricao: "Iate premium com diferenciais",
    beneficios: [
      "Modelo exclusivo",
      "Acabamento premium",
      "Documentação completa",
      "Suporte especial"
    ],
    caracteristicas: ["Premium", "Único"]
  },
  {
    id: 10,
    nome: "Verificado Fusiongram",
    preco: "R$ 99,99",
    descricao: "Selo de verificação exclusivo",
    beneficios: [
      "Selo oficial",
      "Status premium",
      "Ativação imediata",
      "Suporte dedicado"
    ],
    caracteristicas: ["Oficial", "Exclusivo"]
  }
];

export default function OutrosPage() {
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

  return (
    <main className="min-h-screen pt-32 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <SecondaryNavbar carrinho={carrinho} />
      <div className="max-w-7xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Outros Itens</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {outrosItens.map((item) => (
            <ProductCard
              key={item.id}
              title={item.nome}
              price={item.preco}
              description={item.descricao}
              benefits={item.beneficios}
              characteristics={item.caracteristicas}
              onAddToCart={() => adicionarAoCarrinho(item)}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 