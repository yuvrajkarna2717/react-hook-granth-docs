import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Github, Package } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Getting Started', path: '/' },
  { name: 'useCounter', path: '/hooks/use-counter' },
  { name: 'useDebounce', path: '/hooks/use-debounce' },
  { name: 'useClickOutside', path: '/hooks/use-click-outside' },
  { name: 'useLocalStorage', path: '/hooks/use-local-storage' }
];

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                React Hook Granth
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                Essential React Hooks Collection
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yuvrajkarna2717/react-hook-granth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex ">
        {/* Sidebar */}
        <nav className="bg-gray-50 dark:bg-gray-800 min-h-screen border-r border-gray-200 dark:border-gray-700 max-w-xl min-w-56 overflow-scroll">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              Documentation
            </h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-6 py-8 overflow-scroll">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}