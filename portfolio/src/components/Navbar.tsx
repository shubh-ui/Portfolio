'use client'

import React, { useState } from 'react';
import { Search, Menu, X, Moon } from 'lucide-react';
import { LightIcon } from '@/app/Icon/icons';
import { useThemeState } from '@/Hooks/useThemeState';

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { isDark, setTheme, mounted } = useThemeState()

  const navItems = [
    { name: 'About', href: 'Home' },
    { name: 'Experience', href: 'Experience' },
    { name: 'Education', href: '#' },
    { name: 'Skills', href: 'Skills' },
    { name: 'Projects', href: 'Projects' },
    { name: 'Contact', href: 'Contact' },
  ];

    const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

   if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-md border border-gray-300 dark:border-gray-600 flex items-center justify-center">
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
      </button>
    )
  }


  return (
    <nav className="sticky top-0 z-50 h-16 bg-white shadow-sm border-b border-gray-200 w-full">
      {/* Full width navbar background */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Centered content container matching main container width */}
        <div className="w-full max-w-5xl px-16 h-full flex items-center">
          <div className="flex items-center w-full justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 tracking-wider">
                Patil.
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 items-center">
              {/* Auth Links */}
              <div className="ml-auto flex items-center space-x-2">

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      // href={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-800 px-3 py-2 text-sm font-medium transition-all tracking-wide duration-200 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
              
                {/* Right side - Search, Auth, Icons */}
                <div className="flex items-center space-x-4">
                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    >
                      {isMenuOpen ? (
                        <X className="block h-6 w-6" />
                      ) : (
                        <Menu className="block h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className='cursor-pointer' onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                {
                  isDark ? <LightIcon /> : <Moon />
                }
                
              </div>
            </div>

            {/* Mobile menu button (visible on mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-200">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl px-16">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Mobile Search */}
                <div className="px-3 py-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;