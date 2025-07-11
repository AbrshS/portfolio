import Image from 'next/image';

interface SubPosition {
  company: string;
  role: string;
  period: string;
  color: string;
  description: string;  // Added description field
}

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  position: string;
  logo: string;
  description: string;
  subPositions?: SubPosition[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    { 
        id: 'exp1',
        period: 'May 2024 - Present',
        company: 'Freelancer',
        position: 'Software Engineer',
        logo: '',
        description: 'Working as a self-employed software engineer, delivering high-quality solutions for various clients. I specialize in full-stack development, focusing on creating responsive and user-friendly applications while maintaining clean, efficient code.',
        subPositions: [
          {
            company: 'Afro Figure Makeup and Modeling School',
            role: 'Fullstack Developer',
            period: 'Jun 2024 -  ',
            color: 'bg-blue-500',
            description: 'Built a Modeling School Platform using MERN stack, developing both a high-performance landing page (React, ShadCN, Tailwind CSS) with 95+ Lighthouse score and 40% faster load times, and a competition platform featuring secure Telebirr payment integration and jury evaluation system. Implemented Framer Motion animations while maintaining WCAG accessibility standards.'
          },
          {
            company: 'Genet G/Mariam',
            role: 'ML & Fullstack Developer',
            period: 'May 2024 - Jul 2024',
            color: 'bg-green-500',
            description: 'Developed an AI-powered Brain Tumor Detection System (React/Django) using EfficientNet and VGG16 transfer learning, achieving high-accuracy classification of glioma, meningioma, pituitary tumors, and healthy scans from MRI images. The system provides comprehensive tumor analysis including type classification, size estimation, and shape characterization, delivering critical diagnostic insights for clinical decision support while maintaining medical-grade accuracy standards.'
          }
        ]
      },
      { 
        id: 'exp2',
        period: 'June 2025 - Aug 2025',
        company: 'Code Alpha',
        position: 'Intern Machine Learning Engineer',
        logo: '/exp_logos/codealphalogo.png',
        description: 'Built 4 ML models using TensorFlow, Scikit-learn, and DL libraries for projects like emotion recognition from speech, handwriting detection, credit scoring, and disease prediction from medical data. Developed end-to-end solutions, from data preprocessing to model deployment.'
      },
    { 
      id: 'exp3',
      period: 'Sep 2024 - Apr 2025',
      company: 'Brootech It Solutions',
      position: 'Fullstack Developer',
      logo: '/exp_logos/brootech.png',
      description: 'As a Full-Stack Developer, I built a SaaS property management system using React, Node.js and MongoDB that streamlined operations for 50+ tenants. Integrated Chapa payment gateway to automate billing, reducing processing time by 60%.Contributed to Agile team to implement CI/CD pipelines, improving deployment speed by 25% while ensuring system reliability and scalability.'
    },
    { 
      id: 'exp4',
      period: 'Sep 2024 - Nov 2024',
      company: 'Alx Ventures',
      position: 'Machine Learning Engineer',
      logo: '/exp_logos/alx_ventures_logo.jpeg',
      description: 'As a Machine Learning Engineer, I optimized a radiotherapy planning platform\'s AI algorithms, reducing treatment planning time by 20% while minimizing healthy tissue exposure. Developed HIPAA-compliant data preprocessing pipelines for DICOM images, ensuring secure and efficient handling of medical data. Delivered robust, production-ready ML solutions that improved both clinical workflow efficiency and patient safety.'
    },
    { 
      id: 'exp5',
      period: 'Dec 2023 - Jan 2024',
      company: 'N/Showa Mahibere Kidusan',
      position: 'Solutions Architect',
      logo: '/exp_logos/mahberekidusan.webp',
      description: 'As a Solutions Architect, I led requirements gathering through stakeholder interviews, translated business needs into technical specifications, and documented comprehensive SRS/SDD for development teams. Created UML diagrams and process flows to bridge communication between business and technical stakeholders, ensuring accurate implementation while maintaining full requirement traceability throughout the SDLC.'
    },
    { 
      id: 'exp6',
      period: 'May 2023 - Sep 2023',
      company: 'Ethiopian Federal Police',
      position: 'Intern Fullstack Developer',
      logo: '/exp_logos/efp.webp',
      description: 'As an Intern Full-Stack Developer, I built a secure Firearm Management System with Angular frontend and .NET backend, automating inventory tracking and regulatory compliance processes. Optimized workflows reduced manual errors and improved operational efficiency by 25%, while audit trails and reporting features enhanced accountability across all management operations.'
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12">
      <h3 className="text-sm uppercase font-medium mb-10">EXPERIENCE</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
        
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex">
              {/* Timeline dot and company logo */}
              <div className="relative mr-8">
                <div className="absolute left-0 top-0 w-[14px] h-[14px] rounded-full bg-gray-200 -translate-x-[6px]"></div>
                <div className="w-[58px] h-[58px] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                  <Image 
                    src={exp.logo} 
                    alt={exp.company}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Experience content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="font-bold text-lg">{exp.position}</h4>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                
                {/* Sub-positions for freelance work */}
                {exp.subPositions && exp.subPositions.length > 0 && (
                  <div className="mt-3 space-y-4 pl-2 border-l-2 border-gray-100">
                    {exp.subPositions.map((subPos, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`${subPos.color} w-3 h-3 rounded-full mt-1 mr-3 flex-shrink-0`}></div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                            <p className="text-sm font-medium">{subPos.role} @ {subPos.company}</p>
                            <span className="text-xs text-gray-500">{subPos.period}</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{subPos.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}