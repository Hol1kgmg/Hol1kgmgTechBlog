import React from 'react';

interface SearchProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  placeholder = "記事を検索...",
  className = "",
  onSearch,
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleSearch}
        className="w-full bg-gray-800 text-white px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}; 