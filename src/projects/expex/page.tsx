'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TechStack from '@/components/TechStack';

export default function ExPexPage() {
  const router = useRouter();

  const technologies = [
    'MongoDB',
    'React',
    'Express',
    'NodeJS',
    'Tailwind',
    'ChartsJS'
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
        <h1 className="text-4xl font-bold mb-6">Pex Property Management System</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-16">
        Developed a SaaS Property Management System using React, Node.js, and MongoDB featuring:

      
          <li>Tenant portal for lease/electricity payments, maintenance requests, and expense tracking</li>
          <li>Admin dashboard for property/tenant management and real-time analytics</li>
          <li>Integrated payment gateway for secure transactions</li>
          <li>Automated reporting system with financial insights</li>
        


<li>Integrated payment gateway(Chapa) for secure transactions
Automated reporting system with financial insights
Delivered a comprehensive solution streamlining 90% of property operations.</li>






        </p>

        {/* Project metadata */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">INDUSTRY</p>
            <p className="font-medium">IT Infrastructure</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">CLIENT</p>
            <p className="font-medium">Brootech It Solutions</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">SERVICE</p>
            <p className="font-medium">Full Stack Development</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">YEAR</p>
            <p className="font-medium">2024</p>
          </div>
        </div>

        {/* Tech Stack */}
        <TechStack 
          technologies={technologies}
          githubUrl="https://github.com/yourusername/expex"
        />

        {/* Project images */}
        <div className="space-y-8">
          {/* Main image */}
          <div className="bg-blue-500 aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/expex/1.png"
              alt="Ex Pex Dashboard"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-blue-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/expex/2.png"
                alt="Analytics View"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-blue-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/expex/3.png"
                alt="Expense Tracking"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full width image */}
          <div className="bg-blue-500 aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/expex/4.png"
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