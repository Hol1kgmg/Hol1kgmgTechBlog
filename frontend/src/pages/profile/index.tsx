import React from "react";
import { ProfileView } from "../../features/profile/ui/ProfileView";
// import { ProfileForm } from "@/src/features/profile/ui/ProfileForm";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1>プロフィール</h1>
      <ProfileView />
      {/* <ProfileForm /> */}
    </div>
  );
};

export default ProfilePage;
