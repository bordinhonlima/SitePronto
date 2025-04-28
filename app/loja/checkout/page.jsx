'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

export default function Checkout() {
  const [carrinho, setCarrinho] = useState([]);
  const [etapaAtual, setEtapaAtual] = useState(1);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  const removerItem = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.price?.replace(/[^0-9,]/g, '').replace(',', '.')) || 
                   parseFloat(item.preco?.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
      return total + preco;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20 px-4 sm:px-6 lg:px-8">
      {/* Barra de Progresso */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between relative">
          {/* Linha de Progresso */}
          <div className="absolute left-0 right-0 h-1 bg-gray-700" style={{ top: '50%' }}>
            <div 
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${((etapaAtual - 1) / 3) * 100}%` }}
            />
          </div>
          
          {/* Etapas */}
          {[1, 2, 3, 4].map((etapa) => (
            <div 
              key={etapa}
              className={`relative flex flex-col items-center ${
                etapa <= etapaAtual ? 'text-green-500' : 'text-gray-500'
              }`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  etapa <= etapaAtual ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}
              >
                {etapa}
              </div>
              <span className="mt-2 text-sm font-medium">
                {etapa === 1 ? 'Informações Pessoais' :
                 etapa === 2 ? 'Pagamento' :
                 etapa === 3 ? 'Confirmação' :
                 'Conclusão'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cabeçalho */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/loja" className="text-white hover:text-gray-300 mr-4">
            <FaArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-white">Finalizar Compra</h1>
        </div>

        {/* Lista de Itens */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Itens Selecionados</h2>
          
          {carrinho.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Seu carrinho está vazio</p>
          ) : (
            <>
              <div className="space-y-4">
                {carrinho.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">
                        {item.title || item.nome}
                      </h3>
                      <p className="text-green-400 mt-1">
                        {item.price || item.preco}
                      </p>
                    </div>
                    <button
                      onClick={() => removerItem(index)}
                      className="text-red-400 hover:text-red-300 transition-colors p-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <div className="flex justify-between items-center text-white">
                  <span className="text-lg">Total:</span>
                  <span className="text-2xl font-bold text-green-400">
                    R$ {calcularTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setEtapaAtual(2)}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Prosseguir para Pagamento
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 