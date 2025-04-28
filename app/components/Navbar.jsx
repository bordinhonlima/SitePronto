'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  
  const menuItems = [
    { href: '/loja', label: 'Loja' },
    { href: '/precos', label: 'Ilegal' },
    { href: '/regras', label: 'Regras' },
    { href: '/contato', label: 'Contato' }
  ];

  useEffect(() => {
    // Verifica se o tema está salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30 dark:bg-black/30 dark:border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Complexo RJ
          </Link>

          {/* Menu Items */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                  pathname === item.href ? 'text-baby-blue dark:text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Botão de Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 dark:bg-gray-800/20 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
            >
              {isDark ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-800 dark:text-white text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 