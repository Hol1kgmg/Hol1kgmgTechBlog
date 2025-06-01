import React from "react";
import { Header } from "@/widgets/header";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileInfo } from "./ProfileInfo";
import { SocialLinks } from "./SocialLinks";
import { TechStack } from "./TechStack";
import { ArticleList } from "./ArticleList";

interface SocialLinksData {
  github?: string;
  twitter?: string;
}

interface Profile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: SocialLinksData;
  techStack: string[];
}

export const ProfileView: React.FC = () => {
  // 仮のプロフィールデータ
  const profile: Profile = {
    id: "1",
    username: "Hol1kgmg",
    email: "hol1kgmg@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "Webアプリのフルスタックエンジニアとして働いています。プログラミングなんも分からん",
    socialLinks: {
      github: "https://github.com/Hol1kgmg",
      twitter: "https://twitter.com/Hol1kgmg"
    },
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  };

  return (
    <>
      <Header title="Profile" />
      <div className="min-h-screen text-white">
        <div className="max-w-2xl mx-auto pt-20 pb-12 px-4">
          <div className="flex flex-col items-center space-y-6">
            <ProfileAvatar avatar={profile.avatar} username={profile.username} />
            <ProfileInfo username={profile.username} bio={profile.bio} />
            <SocialLinks socialLinks={profile.socialLinks} />
            <TechStack techStack={profile.techStack} />
            <ArticleList />
          </div>
        </div>
      </div>
    </>
  );
};
