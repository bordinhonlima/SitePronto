'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Compra() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    // Recuperar dados do carrinho do localStorage quando o componente montar
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>
      
      {carrinho.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">Seu carrinho está vazio</p>
          <Link href="/loja" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Voltar para a loja
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carrinho.map((item, index) => (
              <div key={index} className="flex items-center justify-between border p-4 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold">{item.nome}</h3>
                  <p className="text-gray-600">R$ {item.preco.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removerDoCarrinho(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="text-xl font-bold">
              Total: R$ {calcularTotal().toFixed(2)}
            </div>
            <div className="mt-4 space-x-4">
              <Link
                href="/loja"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
              >
                Continuar Comprando
              </Link>
              <button
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={() => alert('Funcionalidade de finalizar compra em desenvolvimento')}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 