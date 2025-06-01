import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from '@/widgets/header/ui/Search';
import { Menu } from './Menu';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  title: string;
  blogName?: string;
  showSearch?: boolean;
  navigationItems?: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({
  title,
  blogName = "Hol1kgmgTechBlog",
  showSearch = true,
  navigationItems = [
    { label: "記事一覧", href: "/articles" },
    { label: "カテゴリー", href: "/categories" },
    { label: "タグ", href: "/tags" },
    { label: "アーカイブ", href: "/archive" }
  ],
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    // TODO: 検索処理の実装
    console.log('Search query:', query);
  };

  return (
    <header className="border-b border-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* デスクトップ表示 */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold hover:text-purple-400 transition-colors">
              {blogName}
            </Link>
            {title !== blogName && (
              <span className="text-xl text-gray-400">/ {title}</span>
            )}
          </div>
          <nav className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {showSearch && (
              <Search onSearch={handleSearch} />
            )}
          </nav>
        </div>

        {/* モバイル表示 */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              {blogName}
            </Link>
            {title !== blogName && (
              <span className="text-lg text-gray-400">/ {title}</span>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <Menu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navigationItems={navigationItems}
          showSearch={showSearch}
          onSearch={handleSearch}
          isMobile={true}
        />
      </div>
    </header>
  );
}; 