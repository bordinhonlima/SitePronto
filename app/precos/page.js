'use client';

import { useState, useEffect } from 'react';
import SecondaryNavbar from '../components/SecondaryNavbar';

const armasGTA = [
  { nome: 'Sniperrifle', preco: 'R$ 2.000.000', precoParceria: 'R$ 1.900.000' },
  { nome: 'Specialcarbine_mk2 (G36)', preco: 'R$ 1.500.000', precoParceria: 'R$ 1.400.000' },
  { nome: 'Militaryrifle (Ram-7)', preco: 'R$ 1.450.000', precoParceria: 'R$ 1.350.000' },
  { nome: 'Carbinerifle_mk2 (Mpx)', preco: 'R$ 1.350.000', precoParceria: 'R$ 1.250.000' },
  { nome: 'Scarh', preco: 'R$ 1.250.000', precoParceria: 'R$ 1.150.000' },
  { nome: 'Assautsmg (Mtar-21)', preco: 'R$ 1.100.000', precoParceria: 'R$ 1.000.000' },
  { nome: 'Assaultrifle_mk2 (Ak-47)', preco: 'R$ 1.000.000', precoParceria: 'R$ 900.000' },
  { nome: 'Mp9', preco: 'R$ 900.000', precoParceria: 'R$ 800.000' },
  { nome: 'Machinepistol (Tec-9)', preco: 'R$ 700.000', precoParceria: 'R$ 600.000' }
];

const municoes = [
  { nome: 'Mun Sniperrifle (Ak-47)', preco: 'R$ 6.800', precoParceria: 'R$ 6.600' },
  { nome: 'Mun Specialcarbine_mk2 (G36)', preco: 'R$ 6.500', precoParceria: 'R$ 6.200' },
  { nome: 'Mun Militaryrifle (Ram-7)', preco: 'R$ 6.400', precoParceria: 'R$ 6.100' },
  { nome: 'Mun Carbinerifle_mk2 (M4A4) (Mpx)', preco: 'R$ 6.200', precoParceria: 'R$ 6.000' },
  { nome: 'Mun Scarh', preco: 'R$ 5.400', precoParceria: 'R$ 5.100' },
  { nome: 'Mun Assautsmg (Mtar-21)', preco: 'R$ 5.200', precoParceria: 'R$ 4.800' },
  { nome: 'Mun Assaultrifle_mk2 (Navy-Carabine)', preco: 'R$ 5.000', precoParceria: 'R$ 4.800' },
  { nome: 'Mun Mp9', preco: 'R$ 4.800', precoParceria: 'R$ 4.600' },
  { nome: 'Mun Machinepistol (Tec-9)', preco: 'R$ 3.400', precoParceria: 'R$ 3.100' },
  { nome: 'Mun Pistol .50', preco: 'R$ 2.100', precoParceria: 'R$ 2.000' },
  { nome: 'Mun Fiven_Seven', preco: 'R$ 2.100', precoParceria: 'R$ 2.000' }
];

const lavagem = [
  { nome: 'Lavagem', preco: '50%', precoParceria: '30%' },
  { nome: 'Colete', preco: 'R$ 200.000', precoParceria: 'R$ 180.000' },
  { nome: 'Adrenalina', preco: 'R$ 105.000', precoParceria: 'R$ 95.000' },
  { nome: 'Capuz', preco: 'R$ 7.000', precoParceria: 'R$ 6.000' },
  { nome: 'Algema', preco: 'R$ 25.000', precoParceria: 'R$ 15.000' },
  { nome: 'Sala personalizada', preco: 'R$ 70.000', precoParceria: 'R$ 60.000' },
  { nome: 'Carro de som', preco: 'R$ 10.000.000', precoParceria: 'R$ 9.000.000' },
  { nome: 'Blacklist', preco: 'R$ 1.500.000', precoParceria: 'R$ 700.000' },
  { nome: 'Colete Premium', preco: 'R$ 350.000', precoParceria: 'R$ 300.000' },
  { nome: 'Kit sequestro', preco: 'R$ 60.000', precoParceria: 'R$ 54.000' },
  { nome: 'Energético', preco: 'R$ 15.000', precoParceria: 'R$ 12.000' }
];

const desmanche = [
  { nome: 'Desmanche', preco: '60%', precoParceria: '40%' },
  { nome: 'Lockpick', preco: 'R$ 50.000', precoParceria: 'R$ 40.000' },
  { nome: 'Colete Premium', preco: 'R$ 350.000', precoParceria: 'R$ 300.000' },
  { nome: 'Placa', preco: 'R$ 75.000', precoParceria: 'R$ 55.000' },
  { nome: 'Faca', preco: 'R$ 270.000', precoParceria: 'R$ 250.000' },
  { nome: 'Kit reparo2', preco: 'R$ 50.000', precoParceria: 'R$ 40.000' },
  { nome: 'Bau 500kg', preco: 'R$ 12.500.000', precoParceria: 'R$ 10.000.000' },
  { nome: 'Bau 1000kg', preco: 'R$ 23.000.000', precoParceria: 'R$ 20.000.000' },
  { nome: 'Pé de cabra', preco: 'R$ 23.000.000', precoParceria: 'R$ 20.000.000' }
];

const drogas = [
  { nome: 'Cocaína', preco: 'R$ 12.000', precoParceria: 'R$ 11.000' },
  { nome: 'Maconha', preco: 'R$ 12.000', precoParceria: 'R$ 11.000' },
  { nome: 'Heroina', preco: 'R$ 12.000', precoParceria: 'R$ 11.000' },
  { nome: 'Cocaina P Venda', preco: 'R$ 3.500', precoParceria: 'R$ 3.100' },
  { nome: 'Maconha P Venda', preco: 'R$ 3.500', precoParceria: 'R$ 3.100' },
  { nome: 'Taco', preco: 'R$ 250.000', precoParceria: 'R$ 210.000' },
  { nome: '.50', preco: 'R$ 400.000', precoParceria: 'R$ 370.000' },
  { nome: 'Fiven_Seven', preco: 'R$ 400.000', precoParceria: 'R$ 370.000' }
];

const contrabando = [
  { nome: 'Mochila X', preco: 'R$ 220.000', precoParceria: 'R$ 200.000' },
  { nome: 'C4', preco: 'R$ 82.000', precoParceria: 'R$ 76.000' },
  { nome: 'Masterpick', preco: 'R$ 100.000', precoParceria: 'R$ 95.000' },
  { nome: 'Laptop', preco: 'R$ 110.000', precoParceria: 'R$ 90.000' },
  { nome: 'CNH roubada', preco: 'R$ 150.000', precoParceria: 'R$ 120.000' },
  { nome: 'Carro ilegal', preco: 'R$ 10.000.000', precoParceria: 'R$ 8.000.000' },
  { nome: 'Aliança', preco: 'R$ 250.000', precoParceria: 'R$ 200.000' },
  { nome: 'Maconha/cocaina p venda', preco: 'R$ 3.500', precoParceria: 'R$ 3.100' }
];

export default function Precos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('armas');
  const [quantidades, setQuantidades] = useState({});
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);
  const [usarPrecoParceria, setUsarPrecoParceria] = useState(false);

  useEffect(() => {
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

  const servicos = {
    armas: { titulo: 'Armas', items: armasGTA },
    municao: { titulo: 'Munição', items: municoes },
    lavagem: { titulo: 'Lavagem', items: lavagem },
    desmanche: { titulo: 'Desmanche', items: desmanche },
    drogas: { titulo: 'Drogas', items: drogas },
    contrabando: { titulo: 'Contrabando', items: contrabando }
  };

  const handleQuantidadeChange = (nome, valor) => {
    setQuantidades(prev => ({ ...prev, [nome]: valor }));
  };

  const calcularTotal = () => {
    return servicos[categoriaSelecionada].items.reduce((total, item) => {
      if (item.preco.includes('%')) return total;
      const precoStr = usarPrecoParceria ? item.precoParceria : item.preco;
      const precoNum = parseInt(precoStr.replace(/[^0-9]/g, '')) || 0;
      const qt = quantidades[item.nome] || 0;
      return total + precoNum * qt;
    }, 0);
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="background" />
      <SecondaryNavbar />
      <div className="relative z-10 max-w-7xl mx-auto pt-48 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Tabela de Preços - Ilegal</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(servicos).map(([key, { titulo }]) => (
            <button
              key={key}
              onClick={() => setCategoriaSelecionada(key)}
              className={`px-4 py-2 rounded-lg ${categoriaSelecionada === key ? 'bg-green-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'} transition-colors`}
            >
              {titulo}
            </button>
          ))}
        </div>
        <div className="glass-effect rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-black/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Item</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Preço Normal</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Preço Parceria</th>
                {mostrarCalculadora && <th className="px-6 py-4 text-center text-sm font-semibold">Quantidade</th>}
                {mostrarCalculadora && <th className="px-6 py-4 text-right text-sm font-semibold">Subtotal</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {servicos[categoriaSelecionada].items.map((item, idx) => {
                const precoStr = usarPrecoParceria ? item.precoParceria : item.preco;
                const precoNum = parseInt(precoStr.replace(/[^0-9]/g, '')) || 0;
                const qt = quantidades[item.nome] || 0;
                const subtotal = precoNum * qt;
                return (
                  <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">{item.nome}</td>
                    <td className="px-6 py-4">{item.preco}</td>
                    <td className="px-6 py-4 text-green-400">{item.precoParceria}</td>
                    {mostrarCalculadora && !item.preco.includes('%') && (
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min="0"
                          value={qt}
                          onChange={e => handleQuantidadeChange(item.nome, parseInt(e.target.value) || 0)}
                          className="w-20 px-2 py-1 text-center rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
                        />
                      </td>
                    )}
                    {mostrarCalculadora && !item.preco.includes('%') && (
                      <td className="px-6 py-4 text-right">R$ {subtotal.toLocaleString('pt-BR')}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setMostrarCalculadora(!mostrarCalculadora)}
            className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mostrarCalculadora ? 'Esconder Calculadora' : 'Mostrar Calculadora'}
          </button>
          {mostrarCalculadora && (
            <>
              <button
                onClick={() => setUsarPrecoParceria(!usarPrecoParceria)}
                className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {usarPrecoParceria ? 'Usar Preço Normal' : 'Usar Preço Parceria'}
              </button>
              <div className="w-full text-center mt-4">
                <p className="text-xl font-semibold">
                  Total: R$ {calcularTotal().toLocaleString('pt-BR')}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
} 