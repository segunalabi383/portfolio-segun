import { ExternalLink, ShoppingBag, Heart, CreditCard, Coins, Gem, Search, Truck } from 'lucide-react';

const projects = [
  {
    title: 'YesPlz AI',
    url: 'https://yesplz.ai/',
    description: 'AI-powered eCommerce recommendation engine for fashion retail. Designed and deployed the MVP with React and Node.js, creating personalized shopping experiences.',
    icon: ShoppingBag,
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['React', 'Node.js', 'AI', 'AWS', 'REST API']
  },
  {
    title: 'Kyruus',
    url: 'https://kyruushealth.com/',
    description: 'Kyruus is a healthcare provider data management platform that optimizes the process of matching patients with providers in the US.',
    icon: Heart,
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://eh6327rse7k.exactdn.com/wp-content/uploads/2023/12/Medical-Groups@3x-768x447.png?strip=all&lossy=1&ssl=1',
    tags: ['Django', 'React', 'AWS', 'Celery', 'PostgreSQL']
  },
  {
    title: 'Automatic USA',
    url: 'https://www.automaticusa.com/',
    description: 'FinTech SaaS platform modernization. Migrated legacy workflows to a scalable multi-role web platform with automated decision engines and payment integrations.',
    icon: CreditCard,
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Node.js', 'TypeScript', 'Docker', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'ShibaSwap',
    url: 'https://shibaswap.com',
    description: 'Decentralized exchange (DEX) platform on Ethereum blockchain. Built a secure DeFi ecosystem enabling token swaps, liquidity provision, and yield farming with Web3 integration.',
    icon: Coins,
    gradient: 'from-amber-500 to-orange-500',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Ethereum', 'Web3', 'Solidity', 'DeFi', 'Smart Contracts']
  },
  {
    title: 'Shiboshis',
    url: 'https://shiboshis.shibaswap.com/#/',
    description: 'NFT marketplace on Ethereum for trading unique digital collectibles. Implemented minting, trading, and wallet integration with optimized gas efficiency and user experience.',
    icon: Gem,
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Ethereum', 'NFT', 'Web3', 'Solidity', 'IPFS']
  },
  {
    title: 'Site Audit Pro',
    url: 'https://siteauditpro.com/',
    description: 'Comprehensive website analysis and SEO auditing platform. Built with Vue.js and Nuxt.js to deliver real-time site performance metrics, SEO recommendations, and actionable insights.',
    icon: Search,
    gradient: 'from-teal-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Vue.js', 'Nuxt.js', 'SEO', 'Analytics', 'REST API']
  },
  {
    title: 'ShipThrifty',
    url: 'https://shipthrifty.com/',
    description: 'Smart shipping management platform for eCommerce businesses. Developed with Laravel and AngularJS, featuring HubSpot CRM integration for streamlined logistics and customer management.',
    icon: Truck,
    gradient: 'from-blue-600 to-indigo-600',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Laravel', 'AngularJS', 'HubSpot', 'MySQL', 'CRM']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Past Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                          <project.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent bg-slate-100 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
