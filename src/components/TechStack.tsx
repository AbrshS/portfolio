import React, { JSX } from 'react';
import {
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiAngular,
  SiDotnet,
  SiChartdotjs,
  SiGithub,
} from 'react-icons/si';

interface TechStackProps {
  technologies: string[];
  githubUrl?: string;
}

const techIcons: { [key: string]: JSX.Element } = {
  mongodb: <SiMongodb color="#16a34a" />,
  react: <SiReact color="#60a5fa" />, // text-blue-400
  express: <SiExpress color="#4b5563" />, // text-gray-600
  nodejs: <SiNodedotjs color="#16a34a" />, // text-green-600
  tailwind: <SiTailwindcss color="#22d3ee" />, // text-cyan-400
  typescript: <SiTypescript color="#2563eb" />, // text-blue-600
  django: <SiDjango color="#065f46" />, // text-green-800
  pytorch: <SiPytorch color="#f97316" />, // text-orange-500
  tensorflow: <SiTensorflow color="#f97316" />,
  angular: <SiAngular color="#f97316" />,
  dotnet: <SiDotnet color="#f97316" />,
  chartsjs: <SiChartdotjs color="#ec4899" />,
};

export default function TechStack({ technologies, githubUrl }: TechStackProps) {
  return (
    <div className="py-8 mb-16">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold mb-6">Tech Arsenal</h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-2xl">{techIcons[tech.toLowerCase()]}</div>
                <span className="text-sm font-medium text-gray-600 capitalize">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <SiGithub size={24} />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
} 