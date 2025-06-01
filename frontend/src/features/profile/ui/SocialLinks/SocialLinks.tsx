import React from "react";
import { GitHubIcon, TwitterIcon } from "@/shared/ui/Icons";

interface SocialLinksData {
  github?: string;
  twitter?: string;
}

interface SocialLinksProps {
  socialLinks: SocialLinksData;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  return (
    <div className="flex space-x-6 mt-2">
      {socialLinks.github && (
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      )}
      {socialLinks.twitter && (
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </a>
      )}
    </div>
  );
};