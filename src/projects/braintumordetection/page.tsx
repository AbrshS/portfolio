'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TechStack from '@/components/TechStack';

export default function BrainTumorDetectionPage() {
  const router = useRouter();

  const technologies = [
    'React',
    'Django',
    'Tensorflow',
    'PyTorch'
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
        <h1 className="text-4xl font-bold mb-6">Brain Tumor Detection and Segmentation</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-16">
        Developed a Brain Tumor Detection and Segmentation System using TensorFlow and PyTorch, achieving 95% accuracy in tumor detection from MRI images. Implemented transfer learning with EfficientNet and VGG16 models, enabling real-time tumor segmentation with 90% precision. The system provides comprehensive tumor analysis including type classification, size estimation, and shape characterization, delivering critical diagnostic insights for clinical decision support while maintaining medical-grade accuracy standards.
        </p>

        {/* Project metadata */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">INDUSTRY</p>
            <p className="font-medium">Healthcare</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">CLIENT</p>
            <p className="font-medium">Medical Research</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">SERVICE</p>
            <p className="font-medium">AI Development</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">YEAR</p>
            <p className="font-medium">2023</p>
          </div>
        </div>

        {/* Tech Stack */}
        <TechStack 
          technologies={technologies}
          githubUrl="https://github.com/yourusername/brain-tumor-detection"
        />

        {/* Project images */}
        <div className="space-y-8">
          {/* Main image */}
          <div className="bg-amber-500 aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/braintumordetection/1.png"
              alt="Brain Tumor Detection Overview"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-amber-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/braintumordetection/2.png"
                alt="Feature Detail"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-amber-500 aspect-square rounded-xl overflow-hidden">
              <Image
                src="/braintumordetection/3.png"
                alt="Interface Detail"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full width image */}
          <div className="bg-amber-500 aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/braintumordetection/4.png"
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