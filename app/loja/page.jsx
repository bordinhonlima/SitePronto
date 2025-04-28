'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SecondaryNavbar from '@/app/components/SecondaryNavbar';
import ProductCard from '@/app/components/ProductCard';

// Dados dos produtos por categoria
const produtos = {
  vips: [
    {
      id: 'vip-1',
      nome: '🐰VIP PASCOA🐰',
      preco: 'R$ 199,99',
      descricao: 'EXCLUSIVO',
      beneficios: ['Benefícios exclusivos de Páscoa', 'Itens temáticos únicos', 'Vantagens especiais'],
      premium: true
    },
    {
      id: 'vip-2',
      nome: '🚚VIP FARMADOR🚚',
      preco: 'R$ 249,99',
      descricao: 'POR TEMPO LIMITADO',
      beneficios: ['Bônus de farming', 'Acesso a áreas especiais', 'Multiplicadores de recursos'],
      premium: true
    },
    {
      id: 'vip-3',
      nome: '💸VIP MAGNATA💸',
      preco: 'R$ 149,99',
      descricao: 'ATÉ O WIPE',
      beneficios: ['Benefícios premium', 'Vantagens econômicas', 'Status exclusivo'],
      premium: true
    }
  ],
  faccoes: [
    {
      id: 'fac-1',
      nome: "BAÚ 5000kg",
      preco: "R$ 29,99",
      descricao: "Armazenamento extra para sua facção",
      beneficios: [
        "Capacidade de 5000kg",
        "Segurança reforçada",
        "Acesso compartilhado",
        "Organização otimizada"
      ],
      premium: false
    },
    {
      id: 'fac-2',
      nome: "VIP FACÇÃO BLACK",
      preco: "R$ 499,00",
      descricao: "Benefícios VIP premium para facções",
      beneficios: [
        "Vantagens exclusivas",
        "Bônus de produção",
        "Recursos especiais",
        "Suporte prioritário"
      ],
      premium: true
    },
    {
      id: 'fac-3',
      nome: "VIP FACÇÃO SUPREME",
      preco: "R$ 749,00",
      descricao: "Benefícios VIP supremos para facções",
      beneficios: [
        "Vantagens supremas",
        "Produção maximizada",
        "Recursos avançados",
        "Suporte VIP"
      ],
      premium: true
    }
  ],
  veiculos: [
    {
      id: 'car-1',
      nome: "Fit Doro",
      preco: "R$ 49,99",
      descricao: "Carro compacto e econômico",
      beneficios: [
        "Design moderno",
        "Econômico",
        "Fácil manutenção",
        "Ideal para cidade"
      ],
      premium: false
    },
    {
      id: 'car-2',
      nome: "Volkenrad Savana Sport",
      preco: "R$ 49,99",
      descricao: "Esportivo versátil",
      beneficios: [
        "Performance balanceada",
        "Design esportivo",
        "Interior confortável",
        "Ótimo custo-benefício"
      ],
      premium: false
    },
    {
      id: 'car-3',
      nome: "Hironda Wildcat",
      preco: "R$ 49,99",
      descricao: "Moto versátil para cidade",
      beneficios: [
        "Ágil",
        "Econômica",
        "Fácil pilotagem",
        "Manutenção simples"
      ],
      premium: false
    }
  ],
  armas: [
    {
      id: 'arma-1',
      nome: "Pack de $600.000",
      preco: "R$ 39,99",
      descricao: "Pack inicial de dinheiro",
      beneficios: [
        "$600.000 in-game",
        "Entrega imediata",
        "Processo seguro",
        "Suporte dedicado"
      ],
      premium: false
    },
    {
      id: 'arma-2',
      nome: "Pack de $1.000.000",
      preco: "R$ 69,99",
      descricao: "Pack intermediário de dinheiro",
      beneficios: [
        "$1.000.000 in-game",
        "Entrega rápida",
        "100% seguro",
        "Suporte prioritário"
      ],
      premium: true
    },
    {
      id: 'arma-3',
      nome: "Pack de $2.000.000",
      preco: "R$ 99,99",
      descricao: "Pack avançado de dinheiro",
      beneficios: [
        "$2.000.000 in-game",
        "Entrega instantânea",
        "Processo VIP",
        "Suporte dedicado"
      ],
      premium: true
    }
  ],
  punicoes: [
    {
      id: 'pun-1',
      nome: "🎯 Remoção de Ban",
      preco: "R$ 99,99",
      descricao: "Remova seu banimento permanente",
      beneficios: [
        "Remoção imediata",
        "Análise do caso",
        "Suporte prioritário",
        "Orientações"
      ],
      premium: true
    },
    {
      id: 'pun-2',
      nome: "⚠️ Remoção de Advertência",
      preco: "R$ 49,99",
      descricao: "Limpe seu histórico de advertências",
      beneficios: [
        "Remoção de strikes",
        "Histórico limpo",
        "Processo rápido",
        "Sem burocracia"
      ],
      premium: false
    }
  ],
  outros: [
    {
      id: 'out-1',
      nome: "COMBO VALE CASA / VALE GARAGEM",
      preco: "R$ 129,99",
      descricao: "Combo completo para sua moradia",
      beneficios: [
        "Vale Casa incluso",
        "Vale Garagem incluso",
        "Economia no combo",
        "Ativação imediata"
      ],
      premium: true
    },
    {
      id: 'out-2',
      nome: "Vale Casa",
      preco: "R$ 99,99",
      descricao: "Garanta sua moradia própria",
      beneficios: [
        "Escolha flexível",
        "Localização premium",
        "Processo rápido",
        "Suporte dedicado"
      ],
      premium: true
    },
    {
      id: 'out-3',
      nome: "Vale Garagem",
      preco: "R$ 49,99",
      descricao: "Espaço seguro para seus veículos",
      beneficios: [
        "Garagem privativa",
        "Localização exclusiva",
        "Ativação rápida",
        "Suporte prioritário"
      ],
      premium: false
    }
  ]
};

export default function Loja() {
  const [carrinho, setCarrinho] = useState([]);

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

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="background" />
      <SecondaryNavbar carrinho={carrinho} />
      
      <div className="relative z-10 max-w-7xl mx-auto pt-48 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Loja Complexo RJ</h1>

        {/* Seção VIP */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Planos VIP</h2>
            <Link href="/planos-vip" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.vips.map((item) => (
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
        </section>

        {/* Seção Facções */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Facções</h2>
            <Link href="/loja/faccoes" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.faccoes.map((item) => (
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
        </section>

        {/* Seção Veículos */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Veículos</h2>
            <Link href="/loja/veiculos" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.veiculos.map((item) => (
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
        </section>

        {/* Seção Dinheiro/Armas */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dinheiro & Armas</h2>
            <Link href="/loja/dinheiro-armas" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.armas.map((item) => (
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
        </section>

        {/* Seção Punições */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Remoção de Punições</h2>
            <Link href="/loja/punicao" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.punicoes.map((item) => (
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
        </section>

        {/* Seção Outros */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Outros Itens</h2>
            <Link href="/loja/outros" className="text-green-500 hover:text-green-400 transition-colors">
              Ver Todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.outros.map((item) => (
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
        </section>

        {/* Seção de Informações */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Por que escolher a Loja Complexo RJ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-gray-300">Todas as transações são seguras e protegidas</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-300">Receba seus itens instantaneamente após a compra</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Itens Exclusivos</h3>
              <p className="text-gray-300">Produtos únicos e diferenciados</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-gray-300">Assistência completa para todas as suas dúvidas</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 