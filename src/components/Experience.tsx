import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Engineer (Contract)',
    company: 'YesPlz AI',
    location: 'Silicon Valley, CA',
    period: 'Mar 2019 – Jun 2025',
    description: [
      'Designed and deployed an AI-powered eCommerce platform MVP',
      'Integrated product recommendation APIs and analytics with Node.js and React',
      'Delivered tailored web and UI assets for brand consistency'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Software Engineer',
    company: 'MDHealthTrak',
    location: 'Newark, NJ',
    period: 'Aug 2014 – Feb 2019',
    description: [
      'Built a HIPAA-compliant telehealth platform for remote consultations',
      'Developed Django REST + React modules, AWS integrations, and secure file storage',
      'Improved performance through Celery/Redis async processing'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Lead Full-Stack Developer',
    company: 'Collabera, Inc',
    location: 'New Jersey, USA',
    period: 'Oct 2008 – Jul 2014',
    description: [
      'Led the re-architecture of a FinTech SaaS platform',
      'Developed scalable Node.js microservices and automated decision logic',
      'Deployed and maintained AWS EC2, RDS, and Docker environments'
    ],
    color: 'from-green-500 to-emerald-500'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-8 md:ml-0 hover:-translate-y-1">
                  <div className={`absolute left-0 md:left-auto ${
                    index % 2 === 0 ? 'md:right-0' : ''
                  } top-8 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full transform -translate-x-1/2 md:translate-x-1/2 ring-4 ring-white`}></div>

                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white text-sm font-semibold mb-4`}>
                    <Briefcase size={16} />
                    {exp.title}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {exp.company}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-slate-600">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
