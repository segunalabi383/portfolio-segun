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
                15+ years building production systems for FinTech, Healthcare, AI, and Blockchain across startups and enterprises.
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
              I'm a <strong>Software Engineer</strong> who enjoys building products that connect technology with real-world needs.
              Over the years, I've worked across <strong>FinTech</strong>, <strong>Telehealth</strong>, <strong>AI-driven eCommerce</strong>,
              and <strong>Blockchain</strong>, helping teams launch scalable platforms that are fast, secure, and user-friendly.
            </p>
            <p>
              In <strong>healthcare</strong>, I've built HIPAA-compliant telemedicine solutions supporting virtual consultations,
              scheduling, and medical record management — with a strong focus on privacy and data protection.
            </p>
            <p>
              In <strong>FinTech</strong>, I've designed and implemented automated decision systems, payment integrations,
              and internal dashboards that replace manual workflows with scalable, reliable architecture.
            </p>
            <p>
              I've also contributed to <strong>AI and blockchain</strong> projects — from smart contract workflows to personalized
              product recommendation engines — blending solid backend logic with high-performance front-end experiences.
            </p>
            <p>
              Clients describe me as a reliable engineer who communicates clearly, takes ownership, and delivers code that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
