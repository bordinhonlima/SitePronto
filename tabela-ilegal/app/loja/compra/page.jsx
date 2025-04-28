import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Compra() {
  const [carrinho, setCarrinho] = useState([]);
  const [etapa, setEtapa] = useState(1);
  const [formaPagamento, setFormaPagamento] = useState('');

  useEffect(() => {
    // Simular a recuperação dos itens do carrinho do armazenamento local ou de um contexto global
    const itensNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(itensNoCarrinho);
  }, []);

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const avancarEtapa = () => {
    setEtapa(etapa + 1);
  };

  return (
    <main className="min-h-screen pt-32 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Seleção de Compra</h1>
        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-8 h-8 flex items-center justify-center rounded-full ${etapa === num ? 'bg-green-500' : 'bg-gray-500'} text-white mx-2`}>
              {num}
            </div>
          ))}
        </div>
        {etapa === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Informações Pessoais</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Nome completo" className="w-full p-2 rounded-md" />
              <input type="email" placeholder="E-mail" className="w-full p-2 rounded-md" />
              <input type="text" placeholder="CPF" className="w-full p-2 rounded-md" />
              <button type="button" onClick={avancarEtapa} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">Prosseguir</button>
            </form>
          </div>
        )}
        {etapa === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Itens no Carrinho</h2>
            {carrinho.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {carrinho.map((item, index) => (
                  <div key={index} className="glass-effect p-6 rounded-lg relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title || item.nome}</h3>
                    <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-6">{item.price || item.preco}</p>
                    <button 
                      onClick={() => removerItem(index)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">Seu carrinho está vazio.</p>
            )}
            <button type="button" onClick={avancarEtapa} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4">Prosseguir para Pagamento</button>
          </div>
        )}
        {etapa === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Forma de Pagamento</h2>
            <select value={formaPagamento} onChange={(e) => setFormaPagamento(e.target.value)} className="w-full p-2 rounded-md mb-4">
              <option value="">Selecione uma forma de pagamento</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="boleto">Boleto Bancário</option>
              <option value="pix">PIX</option>
            </select>
            <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">Finalizar Compra</button>
          </div>
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