import React from "react";

interface TechStackProps {
  techStack: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <div className="mt-8 w-full">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">技術スタック</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};