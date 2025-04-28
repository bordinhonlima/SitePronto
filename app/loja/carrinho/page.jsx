import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    // Simular a recuperação dos itens do carrinho do armazenamento local ou de um contexto global
    const itensNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(itensNoCarrinho);
  }, []);

  return (
    <main className="min-h-screen pt-32 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Carrinho de Compras</h1>
        {carrinho.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carrinho.map((item, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title || item.nome}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-6">{item.price || item.preco}</p>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition-colors">
                  Remover
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Seu carrinho está vazio.</p>
        )}
        <div className="mt-12 text-center">
          <Link 
            href="/loja"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Voltar para Loja
          </Link>
        </div>
      </div>
    </main>
  );
} 