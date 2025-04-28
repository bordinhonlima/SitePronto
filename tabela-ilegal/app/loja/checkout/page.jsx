'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaTrash, FaCreditCard, FaBarcode, FaMobile } from 'react-icons/fa';
import { SiPix } from 'react-icons/si';

export default function Checkout() {
  const [carrinho, setCarrinho] = useState([]);
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    pais: 'Brasil',
    idJogo: '',
    formaPagamento: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEtapaAtual(etapaAtual + 1);
  };

  const formasPagamento = [
    { id: 'pix', nome: 'PIX', icon: SiPix },
    { id: 'boleto', nome: 'Boleto', icon: FaBarcode },
    { id: 'cartao', nome: 'Cartão de Crédito', icon: FaCreditCard },
    { id: 'picpay', nome: 'PicPay', icon: FaMobile }
  ];

  const renderEtapaAtual = () => {
    switch (etapaAtual) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Informações Pessoais</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-300 mb-1">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  required
                  placeholder="000.000.000-00"
                  className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="pais" className="block text-sm font-medium text-gray-300 mb-1">
                  País
                </label>
                <select
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="Brasil">Brasil</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Angola">Angola</option>
                  <option value="Moçambique">Moçambique</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Prosseguir
                </button>
              </div>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Informações de Entrega</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="idJogo" className="block text-sm font-medium text-gray-300 mb-1">
                  ID do Jogo
                </label>
                <input
                  type="text"
                  id="idJogo"
                  name="idJogo"
                  value={formData.idJogo}
                  onChange={handleInputChange}
                  required
                  placeholder="Digite seu ID no jogo"
                  className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Prosseguir para Pagamento
                </button>
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Forma de Pagamento</h2>
            <div className="grid grid-cols-2 gap-4">
              {formasPagamento.map((forma) => (
                <button
                  key={forma.id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, formaPagamento: forma.id }));
                    setEtapaAtual(4);
                  }}
                  className={`flex items-center justify-center space-x-3 p-4 rounded-lg border-2 transition-colors ${
                    formData.formaPagamento === forma.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-600 hover:border-green-500'
                  }`}
                >
                  <forma.icon className="text-2xl text-white" />
                  <span className="text-white">{forma.nome}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Confirmação</h2>
            <div className="bg-gray-700 p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-white">Resumo das Informações</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-medium">Nome:</span> {formData.nomeCompleto}</p>
                <p><span className="font-medium">E-mail:</span> {formData.email}</p>
                <p><span className="font-medium">CPF:</span> {formData.cpf}</p>
                <p><span className="font-medium">País:</span> {formData.pais}</p>
                <p><span className="font-medium">ID do Jogo:</span> {formData.idJogo}</p>
                <p><span className="font-medium">Forma de Pagamento:</span> {
                  formasPagamento.find(f => f.id === formData.formaPagamento)?.nome
                }</p>
              </div>
            </div>
            <button
              onClick={() => alert('Compra finalizada com sucesso!')}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-32 px-4 sm:px-6 lg:px-8">
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
                 etapa === 2 ? 'Entrega' :
                 etapa === 3 ? 'Pagamento' :
                 'Confirmação'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/loja" className="text-white hover:text-gray-300 mr-4">
            <FaArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-white">Finalizar Compra</h1>
        </div>

        {/* Resumo do Carrinho */}
        {etapaAtual === 1 && (
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
              </>
            )}
          </div>
        )}

        {/* Formulário da Etapa Atual */}
        <div className="bg-gray-800 rounded-lg p-6">
          {renderEtapaAtual()}
        </div>
      </div>
    </div>
  );
} 