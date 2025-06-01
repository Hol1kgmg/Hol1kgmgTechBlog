import React from 'react';
import Link from 'next/link';
import { Header } from '@/widgets/header';
import { DockNavigation } from '@/widgets/dock-navigation';
import { FuzzyText } from '@/shared/ui/FuzzyText';

const Custom404: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header title="404" />
      
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-purple-500 mb-4">
            <FuzzyText text="404" duration={3000} iterations={15} />
          </h1>
          <h2 className="text-3xl font-semibold mb-4">
            <FuzzyText text="ページが見つかりません" duration={2500} iterations={12} />
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            <FuzzyText 
              text="お探しのページは存在しないか、移動した可能性があります。" 
              duration={2000} 
              iterations={10}
              className="inline-block"
            />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors inline-block"
            >
              ホームに戻る
            </Link>
            <Link 
              href="/articles" 
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors inline-block"
            >
              記事一覧へ
            </Link>
          </div>
        </div>
      </main>
      
      <DockNavigation />
    </div>
  );
};

export default Custom404;