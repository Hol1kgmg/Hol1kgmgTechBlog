import React from "react";

interface ProfileAvatarProps {
  avatar: string;
  username: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatar, username }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20"></div>
      <img
        src={avatar}
        alt={username}
        className="relative w-40 h-40 rounded-full object-cover border-4 border-gray-800"
      />
    </div>
  );
};