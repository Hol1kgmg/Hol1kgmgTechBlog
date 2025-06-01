import React from "react";

interface ProfileInfoProps {
  username: string;
  bio: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ username, bio }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {username}
        </h2>
      </div>
      
      <p className="text-gray-300 text-center max-w-lg">
        {bio}
      </p>
    </>
  );
};