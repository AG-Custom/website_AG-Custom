"use client";

import { useState } from 'react';;
import './Header.scss';
import clsx from 'clsx';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Início', dataContent: 'Voltar ao início', delay: '' },
    { href: '#', label: 'Serviços', dataContent: 'Explore nossos serviços', delay: '-delay-1' },
    { href: '#', label: 'Sobre', dataContent: 'Conheça a AG Custom', delay: '-delay-2' },
    { href: '/contatos', label: 'Contato', dataContent: 'Entre em contato', delay: '-delay-3' },
    { href: '#', label: 'Projetos', dataContent: 'Veja nossos projetos', delay: '-delay-4' },
  ];

  return (
    <>
      {/* Logo à esquerda */}
      <div className="header-logo" onClick={() => window.location.href = '/'}>
        <Image 
          src="/logo_footer.svg" 
          alt="AG Custom Logo" 
          width={40} 
          height={40}
        />
      </div>

      <div 
        className={clsx('overlay-navigation', {
          'overlay-slide-down': isMenuOpen,
          'overlay-slide-up': !isMenuOpen,
        })}
      >
        <nav role="navigation">
          <ul>
            {navItems.map((item) => (
              <li 
                key={item.label} 
                className={clsx({
                  [`slide-in-nav-item${item.delay}`]: isMenuOpen,
                  [`slide-in-nav-item${item.delay}-reverse`]: !isMenuOpen,
                })}
                onClick={() => window.location.href = item.href}
                style={{ cursor: 'pointer' }}
              >
                <a href={item.href} data-content={item.dataContent}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="open-overlay" onClick={toggleMenu}>
        <span className={clsx('bar-top', {
          'animate-top-bar': isMenuOpen,
          'animate-out-top-bar': !isMenuOpen,
        })}></span>
        <span className={clsx('bar-middle', {
          'animate-middle-bar': isMenuOpen,
          'animate-out-middle-bar': !isMenuOpen,
        })}></span>
        <span className={clsx('bar-bottom', {
          'animate-bottom-bar': isMenuOpen,
          'animate-out-bottom-bar': !isMenuOpen,
        })}></span>
      </div>
    </>
  );
};

export default Header; 