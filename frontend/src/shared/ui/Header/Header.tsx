"use client";

import React from 'react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = true,
}) => {
  return (
    <header className="border-b border-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center gap-4">
          {showSearch && (
            <input
              type="search"
              placeholder="検索..."
              className="bg-gray-800 text-white px-4 py-2 rounded-full"
            />
          )}
        </div>
      </div>
    </header>
  );
}; 