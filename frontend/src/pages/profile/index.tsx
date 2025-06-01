import React from "react";
import { Header } from "@/widgets/header";
import { ProfileView } from "@/features/profile/ui/ProfileView";
import { DockNavigation } from "@/widgets/dock-navigation";
// import { ProfileForm } from "@/src/features/profile/ui/ProfileForm";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Header title="Profile" />
      <ProfileView />
      {/* <ProfileForm /> */}
      <DockNavigation />
    </div>
  );
};

export default ProfilePage;
