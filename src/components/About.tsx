import { Briefcase, Code, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full-Stack Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                Proficient in modern web and mobile technologies including React, Node.js, Python, and cloud infrastructure on AWS.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Experience</h3>
              <p className="text-slate-600 leading-relaxed">
                8+ years building production systems for FinTech, AI, and scalable platforms at companies like Uber and Scribe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Product-Focused</h3>
              <p className="text-slate-600 leading-relaxed">
                From MVP to scale, I deliver fast, secure, and user-friendly platforms that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              I'm a <strong>Senior Software Engineer</strong> with 8+ years of experience building scalable web platforms across
              <strong> FinTech</strong> and <strong>AI</strong>. At <strong>Uber</strong>, I work on backend systems using Python,
              Django, and FastAPI, while integrating LLMs to improve workflows. I also develop frontend features with React and
              Next.js, focusing on clean design and usability.
            </p>
            <p>
              I've built highly scalable backend services from scratch for Uber financial platforms using Python, Django, FastAPI,
              and GraphQL. I utilize Apache Kafka for event-driven architecture and integrate various data sources including
              PostgreSQL and MongoDB.
            </p>
            <p>
              I enjoy collaborating with cross-functional teams and mentoring developers to ship reliable, user-friendly software.
              I take initiative on various projects within cross-functional team environments, working closely with AI/ML scientists.
            </p>
            <p>
              My experience spans full-stack development with modern technologies, implementing CI/CD pipelines using Docker,
              Kubernetes, Terraform, and Jenkins on AWS. I develop and execute robust test suites using Jest, Cypress, Pytest,
              and Selenium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
