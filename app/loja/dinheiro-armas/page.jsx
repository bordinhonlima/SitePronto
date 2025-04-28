'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import ProductCard from '../../components/ProductCard';

const itens = [
  // Salários
  {
    id: 1,
    nome: "Salário em Promoção",
    preco: "R$ 2,00",
    descricao: "Salário básico para iniciantes",
    beneficios: [
      "Pagamento automático",
      "Valor fixo",
      "Sem requisitos",
      "Ativação imediata"
    ],
    caracteristicas: ["Recorrente", "Automático"]
  },
  {
    id: 2,
    nome: "Salário em Funcionário",
    preco: "R$ 15,00",
    descricao: "Salário para funcionários regulares",
    beneficios: [
      "Pagamento periódico",
      "Valor garantido",
      "Benefícios básicos",
      "Suporte prioritário"
    ],
    caracteristicas: ["Recorrente", "Confiável"]
  },
  {
    id: 3,
    nome: "Salário do Gerente",
    preco: "R$ 25,00",
    descricao: "Salário para cargo de gerência",
    beneficios: [
      "Pagamento elevado",
      "Benefícios exclusivos",
      "Prioridade no suporte",
      "Bônus especiais"
    ],
    caracteristicas: ["Premium", "Vantagens exclusivas"]
  },
  {
    id: 4,
    nome: "Salário do Patrão",
    preco: "R$ 30,00",
    descricao: "Salário para líderes e proprietários",
    beneficios: [
      "Alto rendimento",
      "Benefícios VIP",
      "Suporte dedicado",
      "Vantagens especiais"
    ],
    caracteristicas: ["VIP", "Benefícios premium"]
  },
  {
    id: 5,
    nome: "Salário velho da lancha",
    preco: "R$ 100,00",
    descricao: "Salário luxuoso e diferenciado",
    beneficios: [
      "Rendimento superior",
      "Benefícios exclusivos",
      "Atendimento VIP",
      "Vantagens únicas"
    ],
    caracteristicas: ["Luxo", "Exclusividade"]
  },
  {
    id: 6,
    nome: "Salário pensionista do inss",
    preco: "R$ 140,00",
    descricao: "Salário garantido e estável",
    beneficios: [
      "Pagamento garantido",
      "Benefícios especiais",
      "Suporte premium",
      "Vantagens exclusivas"
    ],
    caracteristicas: ["Garantido", "Estável"]
  },
  {
    id: 7,
    nome: "Salário ADM",
    preco: "R$ 180,00",
    descricao: "Salário para administradores",
    beneficios: [
      "Pagamento premium",
      "Benefícios administrativos",
      "Suporte prioritário",
      "Vantagens especiais"
    ],
    caracteristicas: ["Administrativo", "Premium"]
  },
  {
    id: 8,
    nome: "Salário das do Job",
    preco: "R$ 240,00",
    descricao: "Salário especial para jobs",
    beneficios: [
      "Alto rendimento",
      "Benefícios exclusivos",
      "Suporte VIP",
      "Vantagens únicas"
    ],
    caracteristicas: ["Especial", "Job exclusivo"]
  },
  {
    id: 9,
    nome: "Salário do Owner",
    preco: "R$ 400,00",
    descricao: "Salário para proprietários",
    beneficios: [
      "Máximo rendimento",
      "Benefícios supremos",
      "Suporte dedicado",
      "Vantagens exclusivas"
    ],
    caracteristicas: ["Owner", "Supremo"]
  },
  {
    id: 10,
    nome: "Salário dos Deuses",
    preco: "R$ 600,00",
    descricao: "O mais alto nível de salário",
    beneficios: [
      "Rendimento divino",
      "Benefícios únicos",
      "Suporte especial",
      "Vantagens supremas"
    ],
    caracteristicas: ["Divino", "Supremo"]
  },
  // Packs de Dinheiro
  {
    id: 11,
    nome: "Pack de $600.000",
    preco: "R$ 39,99",
    descricao: "Pack inicial de dinheiro",
    beneficios: [
      "$600.000 in-game",
      "Entrega imediata",
      "Processo seguro",
      "Suporte dedicado"
    ],
    caracteristicas: ["Instantâneo", "Seguro"]
  },
  {
    id: 12,
    nome: "Pack de $1.000.000",
    preco: "R$ 69,99",
    descricao: "Pack intermediário de dinheiro",
    beneficios: [
      "$1.000.000 in-game",
      "Entrega rápida",
      "100% seguro",
      "Suporte prioritário"
    ],
    caracteristicas: ["Rápido", "Garantido"]
  },
  {
    id: 13,
    nome: "Pack de $2.000.000",
    preco: "R$ 99,99",
    descricao: "Pack avançado de dinheiro",
    beneficios: [
      "$2.000.000 in-game",
      "Entrega expressa",
      "Processo verificado",
      "Suporte VIP"
    ],
    caracteristicas: ["Premium", "Verificado"]
  },
  {
    id: 14,
    nome: "Pack de $5.000.000",
    preco: "R$ 224,99",
    descricao: "Pack premium de dinheiro",
    beneficios: [
      "$5.000.000 in-game",
      "Entrega instantânea",
      "Máxima segurança",
      "Suporte especial"
    ],
    caracteristicas: ["VIP", "Ultra seguro"]
  },
  {
    id: 15,
    nome: "Pack de $30.000.000",
    preco: "R$ 1.349,99",
    descricao: "Pack supremo de dinheiro",
    beneficios: [
      "$30.000.000 in-game",
      "Entrega imediata",
      "Processo exclusivo",
      "Suporte dedicado"
    ],
    caracteristicas: ["Supremo", "Exclusivo"]
  },
  // Pacotes de Armas
  {
    id: 16,
    nome: "Pacotão Armas Brancas",
    preco: "R$ 49,99",
    descricao: "Conjunto completo de armas brancas",
    beneficios: [
      "Variedade de armas",
      "Entrega rápida",
      "Kit completo",
      "Suporte dedicado"
    ],
    caracteristicas: ["Kit básico", "Garantido"]
  },
  {
    id: 17,
    nome: "Pacotão de Armas",
    preco: "R$ 49,99",
    descricao: "Arsenal completo de armas",
    beneficios: [
      "Arsenal variado",
      "Entrega expressa",
      "Kit premium",
      "Suporte prioritário"
    ],
    caracteristicas: ["Arsenal completo", "Premium"]
  },
  {
    id: 18,
    nome: "Pacotão Armas Especiais",
    preco: "R$ 99,99",
    descricao: "Armas exclusivas e especiais",
    beneficios: [
      "Armas raras",
      "Entrega VIP",
      "Kit especial",
      "Suporte exclusivo"
    ],
    caracteristicas: ["Especial", "Exclusivo"]
  }
];

export default function DinheiroArmasPage() {
  const [carrinho, setCarrinho] = useState([]);
  const [categoria, setCategoria] = useState('todos');

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

  const itensFiltrados = categoria === 'todos' ? itens : 
    categoria === 'salarios' ? itens.slice(0, 10) :
    categoria === 'dinheiro' ? itens.slice(10, 15) :
    itens.slice(15);

  return (
    <main className="min-h-screen pt-32 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <SecondaryNavbar carrinho={carrinho} />
      <div className="max-w-7xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Dinheiro e Armas</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setCategoria('todos')}
            className={`px-4 py-2 rounded-lg ${categoria === 'todos' ? 'bg-green-500 text-white' : 'bg-white/10 text-white'}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setCategoria('salarios')}
            className={`px-4 py-2 rounded-lg ${categoria === 'salarios' ? 'bg-green-500 text-white' : 'bg-white/10 text-white'}`}
          >
            Salários
          </button>
          <button 
            onClick={() => setCategoria('dinheiro')}
            className={`px-4 py-2 rounded-lg ${categoria === 'dinheiro' ? 'bg-green-500 text-white' : 'bg-white/10 text-white'}`}
          >
            Packs de Dinheiro
          </button>
          <button 
            onClick={() => setCategoria('armas')}
            className={`px-4 py-2 rounded-lg ${categoria === 'armas' ? 'bg-green-500 text-white' : 'bg-white/10 text-white'}`}
          >
            Pacotes de Armas
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {itensFiltrados.map((item) => (
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