import React from "react";

interface SocialLinks {
  github?: string;
  twitter?: string;
}

interface Profile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: SocialLinks;
  techStack: string[];
}

export const ProfileView: React.FC = () => {
  // 仮のプロフィールデータ
  const profile: Profile = {
    id: "1",
    username: "Hol1kgmg",
    email: "hol1kgmg@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "フロントエンドエンジニアとして働いています。ReactとTypeScriptが得意です。",
    socialLinks: {
      github: "https://github.com/Hol1kgmg",
      twitter: "https://twitter.com/Hol1kgmg"
    },
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-2xl mx-auto pt-20 pb-12 px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* プロフィール画像 */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20"></div>
            <img
              src={profile.avatar}
              alt={profile.username}
              className="relative w-40 h-40 rounded-full object-cover border-4 border-gray-800"
            />
          </div>
          
          {/* ユーザー情報 */}
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {profile.username}
            </h2>
            <p className="text-gray-400 mt-2">
              {profile.email}
            </p>
          </div>
          
          {/* 自己紹介 */}
          <p className="text-gray-300 text-center max-w-lg">
            {profile.bio}
          </p>

          {/* ソーシャルリンク */}
          <div className="flex space-x-6 mt-2">
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.socialLinks.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            )}
          </div>

          {/* 技術スタック */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">技術スタック</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 記事一覧（TODO: 実装予定） */}
          <div className="mt-12 w-full">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">作成した記事</h3>
            <div className="text-center text-gray-400">
              準備中...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
