'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '@/app/components/SecondaryNavbar';
import ProductCard from '@/app/components/ProductCard';

const punicoes = [
  {
    id: 1,
    nome: "REMOVER ADV VERBAL",
    preco: "R$ 29,99",
    descricao: "Remova sua advertência verbal do registro",
    beneficios: [
      "Remoção imediata",
      "Processo simplificado",
      "Sem burocracia",
      "Suporte dedicado"
    ],
    caracteristicas: ["Instantâneo", "Garantido"]
  },
  {
    id: 2,
    nome: "REMOVER ADV 1",
    preco: "R$ 59,99",
    descricao: "Remova sua primeira advertência",
    beneficios: [
      "Remoção rápida",
      "Processo seguro",
      "Ficha limpa",
      "Atendimento prioritário"
    ],
    caracteristicas: ["Rápido", "Eficiente"]
  },
  {
    id: 3,
    nome: "REMOVER ADV 2",
    preco: "R$ 99,99",
    descricao: "Remova sua segunda advertência",
    beneficios: [
      "Remoção garantida",
      "Processo discreto",
      "Histórico atualizado",
      "Suporte VIP"
    ],
    caracteristicas: ["Premium", "Discreto"]
  },
  {
    id: 4,
    nome: "Remover 3 (três) Advertências (desban)",
    preco: "R$ 199,99",
    descricao: "Remova três advertências e recupere seu acesso",
    beneficios: [
      "Remoção completa",
      "Desbanimento incluso",
      "Processo premium",
      "Suporte especial"
    ],
    caracteristicas: ["Completo", "Premium"]
  },
  {
    id: 5,
    nome: "Remover Prisão",
    preco: "R$ 29,99",
    descricao: "Liberte-se da prisão instantaneamente",
    beneficios: [
      "Liberação imediata",
      "Processo rápido",
      "Sem espera",
      "Suporte prioritário"
    ],
    caracteristicas: ["Instantâneo", "Garantido"]
  }
];

export default function PunicoesPage() {
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
      <div className="max-w-7xl mx-auto mt-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Remoção de Punições</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {punicoes.map((punicao) => (
            <ProductCard
              key={punicao.id}
              title={punicao.nome}
              price={punicao.preco}
              description={punicao.descricao}
              benefits={punicao.beneficios}
              characteristics={punicao.caracteristicas}
              onAddToCart={() => adicionarAoCarrinho(punicao)}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 