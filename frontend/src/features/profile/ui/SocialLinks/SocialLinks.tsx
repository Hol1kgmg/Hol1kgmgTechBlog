import React from "react";

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
        >
          GitHub
        </a>
      )}
      {socialLinks.twitter && (
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Twitter
        </a>
      )}
    </div>
  );
};