import React from 'react';
import Link from 'next/link';
import { Search } from '@/widgets/header/ui/Search';

interface NavigationItem {
  label: string;
  href: string;
}

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  isMobile?: boolean;
}

export const Menu: React.FC<MenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
  showSearch = true,
  onSearch,
  isMobile = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${isMobile ? 'md:hidden fixed inset-0 bg-black bg-opacity-95 z-50' : ''}`}>
      <div className="p-4">
        {isMobile && (
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="メニューを閉じる"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <nav className={`${isMobile ? 'mt-8' : ''} flex flex-col gap-4`}>
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${isMobile ? 'text-2xl' : ''} text-gray-300 hover:text-white hover:underline transition-colors`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          {showSearch && onSearch && (
            <div className="mt-4">
              <Search onSearch={onSearch} />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}; 