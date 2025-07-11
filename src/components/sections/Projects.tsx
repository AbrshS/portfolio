import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  image: string;
  color: string;
  gridClass: string;
  hoverImages?: string[]; // Add hoverImages property
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image: string;
  text: string;
}

// Hover images component for Projects
function HoverImages({ images }: { images: string[] }) {
  const positions = [
    { style: 'left-[-280px] top-[10%] rotate-[-15deg]' },
    { style: 'right-[-280px] top-[10%] rotate-[15deg]' },
    { style: 'left-[-280px] bottom-[10%] rotate-[-10deg]' },
    { style: 'right-[-280px] bottom-[10%] rotate-[10deg]' }
  ];

  // Filter out empty strings and get only valid images
  const validImages = images.filter(img => img && img.trim() !== '');

  return (
    <>
      {validImages.slice(0, 4).map((img, index) => (
        <div
          key={index}
          className={`absolute w-[220px] h-[180px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 ${positions[index].style} hover:scale-110 transition-transform`}
          style={{ transform: `${positions[index].style.includes('rotate') ? positions[index].style.split('rotate-[')[1].split('deg]')[0] : '0'}deg` }}
        >
          <Image
            src={img}
            alt={`Hover image ${index + 1}`}
            width={220}
            height={180}
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      ))}
    </>
  );
}

// Helper function to get project folder name from image path
const getProjectFolder = (imagePath: string): string => {
  const matches = imagePath.match(/\/([^\/]+)\//);
  return matches ? matches[1] : '';
};

// Helper function to render a project card
const renderProjectCard = (project: Project, height: string = 'h-full') => {
  const folderName = getProjectFolder(project.image);
  
  return (
    <Link 
      href={`/projects/${folderName}`} 
      className={`${project.color} rounded-xl relative group overflow-visible w-full ${height} block`}
    >
      {project.id === 'project4' ? (
        // Special hover effect for Project 4 - only right side
        <>
          <div className="absolute w-[220px] h-[180px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 right-[-280px] top-[10%]">
            <Image
              src="/braintumordetection/2.png"
              alt="Hover image 1"
              width={220}
              height={180}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute w-[220px] h-[180px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 right-[-280px] bottom-[10%]">
            <Image
              src="/braintumordetection/4.png"
              alt="Hover image 2"
              width={220}
              height={180}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </>
      ) : project.hoverImages ? (
        <HoverImages images={project.hoverImages} />
      ) : null}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
      <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <Image 
        src={project.image} 
        alt={project.title}
        width={1920}
        height={1080}
        className="w-full h-full object-cover rounded-xl"
        sizes="100vw"
        priority={project.id === 'project1'}
      />
    </Link>
  );
};

export default function Projects() {
  const projects: Project[] = [
    { 
      id: 'project1', 
      title: 'Project 1', 
      image: '/expex/1.png', 
      color: 'bg-blue-600', 
      gridClass: 'col-span-2 row-span-2',
      hoverImages: ['/expex/2.png', '/expex/1.png', '/braintumordetection/1.png', '/braintumordetection/4.png']
    },
    { 
      id: 'project2', 
      title: 'Project 2', 
      image: '/expex/3.png', 
      color: 'bg-gray-800', 
      gridClass: 'col-span-1 row-span-2',
      // hoverImages: ['/ex pex/1.png','/ex pex/2.png','/ex pex/3.png','/ex pex/4.png']
    },
    { 
      id: 'project3', 
      title: 'Project 3', 
      image: '/braintumordetection/4.png', 
      color: 'bg-gray-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/braintumordetection/1.png', '/ex pex/2.png', '/ex pex/1.png', '/braintumordetection/4.png']
    },
    { 
      id: 'project4', 
      title: 'Project 4', 
      image: '/braintumordetection/1.png', 
      color: 'bg-amber-300', 
      gridClass: 'col-span-2 row-span-1'
    },
    { 
      id: 'project5', 
      title: 'Project 5', 
      image: '/afrofigure/1.png', 
      color: 'bg-green-700', 
      gridClass: 'col-span-1 row-span-1',
      hoverImages: ['/afrofigure/2.png', '/afrofigure/1.png', '/afrofigure/5.png', '/afrofigure/4.png']
    },
    { 
      id: 'project6', 
      title: 'Project 6', 
      image: '/braintumordetection/2.png', 
      color: 'bg-purple-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/afro figure/2.png', '/afro figure/1.png', '/afro figure/3.png', '/afro figure/4.png']
    },
      { 
      id: 'project10', 
      title: 'Project 10', 
      image: '/feda/3.png', 
      color: 'bg-indigo-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/feda/1.png', '/feda/2.png', '/feda/4.png', '/feda/5.png']
    },
    { 
      id: 'project7', 
      title: 'Project 7', 
      image: '/feda/1.png', 
      color: 'bg-red-600', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/braintumordetection/1.png', '/ex pex/2.png', '/braintumordetection/4.png', '/ex pex/1.png']
    },
    { 
      id: 'project8', 
      title: 'Project 8', 
      image: '/feda/4.png', 
      color: 'bg-orange-400', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/ex pex/1.png', '/braintumordetection/1.png', '/ex pex/2.png', '/braintumordetection/4.png']
    },
    { 
      id: 'project9', 
      title: 'Project 9', 
      image: '/afrofigure/3.png', 
      color: 'bg-teal-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/braintumordetection/4.png', '/ex pex/2.png', '/ex pex/1.png', '/braintumordetection/1.png']
    },
    { 
      id: 'project10', 
      title: 'Project 10', 
      image: '/afrofigure/4.png', 
      color: 'bg-indigo-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/feda/1.png', '/feda/2.png', '/feda/4.png', '/feda/5.png']
    },
    { 
      id: 'project11', 
      title: 'Project 11', 
      image: '/sage/1.png', 
      color: 'bg-rose-500', 
      gridClass: 'col-span-1 row-span-1',
      hoverImages: ['/sage/2.png', '/sage/3.png', '/sage/4.png', '/sage/1.png']
    },
    { 
      id: 'project12', 
      title: 'Project 12', 
      image: '/sage/2.png', 
      color: 'bg-cyan-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/sage/1.png', '/sage/3.png', '/sage/4.png', '/sage/5.png']
    },
    { 
      id: 'project13', 
      title: 'Project 13', 
      image: '/sage/3.png', 
      color: 'bg-emerald-500', 
      gridClass: 'col-span-1 row-span-1',
      // hoverImages: ['/sage/1.png', '/sage/2.png', '/sage/4.png', '/sage/5.png']
    }
  ];
      
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial1',
      name: 'Genet G/Mariam',
      position: 'Bio Medical Engineer',
      image: '/genet.jpeg',
      text: 'Working with Abraham was an absolute pleasure. Their design skills and attention to detail transformed our product.'
    },
    {
      id: 'testimonial2',
      name: 'Abraham Yohannes',
      position: 'CEO at Afro Figure Trading',
      image: '/abraham.png',
      text: 'Trae brought fresh ideas and exceptional execution to our project. I would highly recommend their services.'
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 mt-5">
      <h3 className="text-sm uppercase font-medium mb-6">PROJECTS</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Row 1: Large Project (full width) */}
        <div className="lg:col-span-2 h-[500px]">
          {renderProjectCard(projects[0])}
        </div>

        {/* Row 2: Two equal height projects */}
        <div className="h-[400px]">
          {renderProjectCard(projects[1])}
        </div>
        <div className="h-[400px]">
          {renderProjectCard(projects[2])}
        </div>

        {/* Row 3: Testimonial + Small Project | Yellow Project */}
        <div className="flex flex-col gap-4 h-[450px]">
          <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between w-full min-h-[120px]">
            <div className="flex-1">
              <p className="text-sm italic text-gray-600 mb-3">&quot;{testimonials[0].text}&quot;</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image 
                  src={testimonials[0].image} 
                  alt={testimonials[0].name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{testimonials[0].name}</p>
                <p className="text-xs text-gray-600">{testimonials[0].position}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {renderProjectCard(projects[5])}
          </div>
        </div>
        <div className="h-[450px]">
          {renderProjectCard(projects[3])}
        </div>

        {/* Row 4: Split Projects | Testimonial + Project */}
        <div className="flex flex-col gap-4 h-[450px]">
          <div className="flex-1">
            {renderProjectCard(projects[6])}
          </div>
          <div className="flex-1">
            {renderProjectCard(projects[7])}
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[450px]">
          <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between w-full min-h-[120px]">
            <div className="flex-1">
              <p className="text-sm italic text-gray-600 mb-3">&quot;{testimonials[1].text}&quot;</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image 
                  src={testimonials[1].image} 
                  alt={testimonials[1].name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{testimonials[1].name}</p>
                <p className="text-xs text-gray-600">{testimonials[1].position}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {renderProjectCard(projects[8])}
          </div>
        </div>

        {/* Row 5: Green Project (full width) */}
        <div className="lg:col-span-2 h-[400px]">
          {renderProjectCard(projects[4])}
        </div>

        {/* Row 6: Two additional project cards */}
        <div className="h-[400px]">
          {renderProjectCard(projects[10])}
        </div>
        <div className="h-[400px]">
          {renderProjectCard(projects[9])}
        </div>

        {/* Row 7: Wide Project (full width) */}
        <div className="lg:col-span-2 h-[400px]">
          {renderProjectCard(projects[11])}
        </div>

        {/* Row 8: Two equal-sized projects */}
        <div className="h-[400px]">
          {renderProjectCard(projects[12])}
        </div>
        <div className="h-[400px]">
          {renderProjectCard(projects[13])}
        </div>
      </div>
    </section>
  );
}