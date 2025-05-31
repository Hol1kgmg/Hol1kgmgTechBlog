"use client";

import React from "react";
import { Header } from "@/shared/ui/Header";
import { DockNavigation } from "@/shared/ui/DockNavigation";

// 仮のデータ
const featuredArticles = [
  {
    id: 1,
    title: "Next.jsの始め方",
    excerpt: "Next.jsを使ったモダンなWebアプリケーション開発の基礎を学びましょう。",
    date: "2024-03-20",
    author: "Horikawa",
    category: "フロントエンド",
  },
  {
    id: 2,
    title: "TypeScript入門",
    excerpt: "TypeScriptの基本から応用まで、実践的な使い方を解説します。",
    date: "2024-03-19",
    author: "Horikawa",
    category: "プログラミング言語",
  },
  {
    id: 3,
    title: "React Hooks完全ガイド",
    excerpt: "React Hooksの使い方とベストプラクティスを詳しく解説します。",
    date: "2024-03-18",
    author: "Horikawa",
    category: "フロントエンド",
  },
];

const categories = [
  { id: 1, name: "フロントエンド", count: 12 },
  { id: 2, name: "バックエンド", count: 8 },
  { id: 3, name: "インフラ", count: 5 },
  { id: 4, name: "プログラミング言語", count: 10 },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header title="Hol1kgmgTechBlog" showSearch={true} />

      <main className="max-w-7xl mx-auto p-4">
        {/* ヒーローセクション */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Hol1kgmgTechBlogへようこそ
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            技術的な知見や経験を共有するブログです
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              記事一覧を見る
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
              使い方ガイド
            </button>
          </div>
        </section>

        {/* 注目の記事 */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">注目の記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-400">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      By {article.author}
                    </span>
                    <button className="text-purple-400 hover:text-purple-300">
                      続きを読む
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* カテゴリー */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">カテゴリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">
                  {category.count} 記事
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <DockNavigation />
    </div>
  );
}
