import React from "react";
import { DashboardCard } from "@/entities/dashboard/ui/DashboardCard";
import { StatsCard } from "@/features/stats/ui/StatsCard";
import { DockNavigation } from "@/shared/ui/DockNavigation";
import { Header } from "@/widgets/header";

// 仮のデータ
const recentArticles = [
  { id: 1, title: "Next.jsの始め方", date: "2024-03-20", views: 120 },
  { id: 2, title: "TypeScript入門", date: "2024-03-19", views: 85 },
  { id: 3, title: "React Hooks完全ガイド", date: "2024-03-18", views: 200 },
];

const activities = [
  { id: 1, type: "like", content: "記事にいいねがつきました", time: "10分前" },
  { id: 2, type: "comment", content: "新しいコメントが届きました", time: "30分前" },
  { id: 3, type: "follow", content: "新しいフォロワーが増えました", time: "1時間前" },
];

const stats = [
  { label: "記事数", value: 15 },
  { label: "フォロワー", value: 120 },
  { label: "いいね", value: 450 },
  { label: "コメント", value: 89 },
];

export const DashboardView: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header title="ダッシュボード" showSearch={true} />

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-6">
          {/* サイドバー */}
          <aside className="col-span-3">
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">クイックアクション</h2>
                <div className="space-y-2">
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    記事一覧を見る
                  </button>
                  <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    プロフィール編集
                  </button>
                </div>
              </div>

              <StatsCard stats={stats} />
            </div>
          </aside>

          {/* メインコンテンツ */}
          <main className="col-span-9 space-y-6">
            {/* 最近の記事 */}
            <DashboardCard title="最近の記事">
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex justify-between items-center p-4 bg-gray-700 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                      <p className="text-sm text-gray-400">{article.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {article.views} views
                      </span>
                      <button className="text-gray-400 hover:text-white">
                        編集
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* アクティビティフィード */}
            <DashboardCard title="アクティビティ">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div>
                      <p>{activity.content}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </main>
        </div>
      </div>

      <DockNavigation />
    </div>
  );
}; 