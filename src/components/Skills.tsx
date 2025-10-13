import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript',
      'Tailwind CSS', 'Redux', 'React Native', 'Flutter'
    ]
  },
  {
    name: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js', 'Python', 'PHP', 'Ruby on Rails', '.NET',
      'Java', 'Go', 'Express.js', 'FastAPI', 'Django'
    ]
  },
  {
    name: 'Database',
    color: 'from-orange-500 to-red-500',
    skills: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'Firebase', 'Supabase', 'DynamoDB', 'ElasticSearch'
    ]
  },
  {
    name: 'Cloud & DevOps',
    color: 'from-purple-500 to-pink-500',
    skills: [
      'AWS', 'Docker', 'Kubernetes', 'CI/CD',
      'Terraform', 'Nginx', 'GitHub Actions', 'Jenkins'
    ]
  },
  {
    name: 'AI & Blockchain',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'OpenAI API', 'TensorFlow', 'LangChain', 'Ethereum',
      'Solidity', 'Web3.js', 'Smart Contracts', 'IPFS'
    ]
  },
  {
    name: 'CMS & eCommerce',
    color: 'from-pink-500 to-rose-500',
    skills: [
      'WordPress', 'Shopify', 'WooCommerce', 'Webflow',
      'Wix', 'HubSpot', 'Salesforce', 'Stripe'
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Tech Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-slate-700 hover:shadow-md hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
              {skillCategories[activeCategory].name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-3 rounded-xl text-slate-700 font-medium text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
