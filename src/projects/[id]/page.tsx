import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  industry: string;
  client: string;
  service: string;
  year: string;
  image: string;
  color: string;
}

async function getProjectDetails(id: string): Promise<ProjectDetail> {
  // In a real app, this would fetch from an API or database
  return {
    id,
    title: 'Monogram',
    description: 'A logo is a visual icon, seal, or emblem used to boost and promote public perception and endorsement. It may assume a symbolic or creative design or incorporate the word it symbolizes as in a logotype.',
    industry: 'Design',
    client: 'Competarios',
    service: 'Illustration',
    year: 'May 2023',
    image: '/project-images/monogram.png',
    color: 'bg-blue-700',
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const projectDetails = await getProjectDetails(params.id);

  return (
    <main className="min-h-screen bg-white">
      {/* Close button */}
      <Link 
        href="/"
        className="fixed top-8 right-8 z-50 w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </Link>

      <div className="max-w-[900px] mx-auto px-6 py-20">
        {/* Project title and description */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-bold mb-6">{projectDetails.title}</h1>
          <p className="text-gray-600 leading-relaxed">
            {projectDetails.description}
          </p>
        </div>

        {/* Project metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">INDUSTRY</p>
            <p className="font-medium">{projectDetails.industry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">CLIENT</p>
            <p className="font-medium">{projectDetails.client}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">SERVICE</p>
            <p className="font-medium">{projectDetails.service}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase mb-1">YEAR</p>
            <p className="font-medium">{projectDetails.year}</p>
          </div>
        </div>

        {/* Project images */}
        <div className="space-y-16">
          {/* Main project image */}
          <div className={`${projectDetails.color} w-full aspect-[16/9] rounded-xl overflow-hidden`}>
            <Image
              src={projectDetails.image}
              alt={projectDetails.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Additional project images would go here */}
          <div className="grid grid-cols-2 gap-8">
            <div className={`${projectDetails.color} aspect-square rounded-xl overflow-hidden`}>
              <Image
                src="/project-images/detail-1.png"
                alt="Project detail 1"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`${projectDetails.color} aspect-square rounded-xl overflow-hidden`}>
              <Image
                src="/project-images/detail-2.png"
                alt="Project detail 2"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}