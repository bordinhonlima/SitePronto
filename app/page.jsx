'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
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

  if (!isClient) {
    return null;
  }

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="background" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Complexo RJ
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A melhor loja para seu roleplay. Encontre VIPs, veículos, facções e muito mais!
          </p>
          <Link 
            href="/loja"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Acessar Loja
          </Link>
        </div>
      </section>

      {/* Destaques */}
      <section className="relative z-10 py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Destaques da Loja</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4">VIPs Exclusivos</h3>
              <p className="text-gray-300 mb-6">Benefícios únicos para melhorar sua experiência no servidor.</p>
              <Link href="/planos-vip" className="text-green-400 hover:text-green-300 font-semibold">
                Ver Planos →
              </Link>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Veículos Premium</h3>
              <p className="text-gray-300 mb-6">Carros exclusivos e personalizados para seu personagem.</p>
              <Link href="/loja/veiculos" className="text-green-400 hover:text-green-300 font-semibold">
                Ver Veículos →
              </Link>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Facções</h3>
              <p className="text-gray-300 mb-6">Domine o servidor com sua facção personalizada.</p>
              <Link href="/loja/faccoes" className="text-green-400 hover:text-green-300 font-semibold">
                Ver Facções →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Por que escolher a Complexo RJ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Segurança Garantida</h3>
              <p className="text-gray-300">Todas as transações são seguras e protegidas.</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Entrega Instantânea</h3>
              <p className="text-gray-300">Receba seus itens imediatamente após a compra.</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Itens Exclusivos</h3>
              <p className="text-gray-300">Produtos únicos e diferenciados para seu personagem.</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-gray-300">Assistência completa para todas as suas dúvidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Termos de Uso */}
      <section className="relative z-10 py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Termos de Uso</h2>
          <div className="glass-effect p-8 rounded-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Aceitação dos Termos</h3>
              <p className="text-gray-300">Ao utilizar nossa plataforma, você concorda com todos os termos e condições aqui estabelecidos.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">2. Política de Reembolso</h3>
              <p className="text-gray-300">Não realizamos reembolsos após a entrega dos produtos virtuais. Certifique-se de sua escolha antes da compra.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">3. Responsabilidades</h3>
              <p className="text-gray-300">O usuário é responsável por manter a segurança de sua conta e por todas as atividades realizadas nela.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">4. Produtos e Serviços</h3>
              <p className="text-gray-300">Todos os itens são virtuais e para uso exclusivo dentro do servidor Complexo RJ.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">5. Modificações</h3>
              <p className="text-gray-300">Reservamos o direito de modificar estes termos a qualquer momento, notificando os usuários sobre mudanças significativas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Complexo RJ. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 mt-2">
            Desenvolvido por{' '}
            <a 
              href="https://instagram.com/gustavobordinhon" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-400 hover:text-green-300"
            >
              @Gustavo Bordinhon Lima
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
} 