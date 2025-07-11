import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  type: 1 | 2;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export default function Testimonial({ type, name, role, company, image, content }: TestimonialProps) {
  if (type === 1) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-gray-600">{role} at {company}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 leading-relaxed">&quot;{content}&quot;</blockquote>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1">
      <div className="bg-white rounded-xl p-8 md:p-12">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-gray-600">{role} at {company}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 leading-relaxed text-center italic">&quot;{content}&quot;</blockquote>
      </div>
    </div>
  );
} 