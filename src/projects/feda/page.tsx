'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TechStack from '@/components/TechStack';

export default function FedaPage() {
  const router = useRouter();

  const technologies = [
    'Angular',
    '.NET',
    'SQL Server'
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Close button */}
      <button 
        onClick={() => router.push('/')}
        className="fixed top-8 right-8 z-50 w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>

      <div className="max-w-[900px] mx-auto px-6 py-20">
        {/* Project title and description */}
        <h1 className="text-4xl font-bold mb-6">Ethiopian Federal Police</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-16">
         Developed a secure and user-friendly firearm management system using Angular and .NET, featuring: 
         <li>Firearm inventory tracking and management</li>
         <li>User authentication and authorization</li>
         <li>Real-time updates and notifications</li>
         <li>Secure data storage and retrieval</li>
         <li>Advanced search and filtering capabilities</li>
         <li>Comprehensive reporting and analytics</li>
         <li>Automated inventory management system with real-time updates</li>
        </p>

        {/* Project metadata */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">INDUSTRY</p>
            <p className="font-medium">Governmental</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">CLIENT</p>
            <p className="font-medium">Ethiopian Federal Police</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">SERVICE</p>
            <p className="font-medium">Full Stack Development</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">YEAR</p>
            <p className="font-medium">2023</p>
          </div>
        </div>

        {/* Tech Stack */}
        <TechStack 
          technologies={technologies}
          githubUrl="https://github.com/AbrshS/Firearm-Mgt-System-Backend"
        />

        {/* Project images */}
        <div className="space-y-8">
          {/* Main image */}
          <div className="bg-indigo-500 aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/feda/1.png"
              alt="Feda Platform Overview"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-indigo-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/feda/2.png"
                alt="Feature Detail"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-indigo-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/feda/3.png"
                alt="Interface Detail"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full width image */}
          <div className="bg-indigo-500 aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/feda/4.png"
              alt="Project Showcase"
              width={1200}
              height={514}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 