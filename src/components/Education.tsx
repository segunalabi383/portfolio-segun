import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Princeton University
                </h3>
                <p className="text-lg text-slate-700 mb-3">
                  Bachelor of Science (BS), Computer Science
                </p>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} />
                  <span>September 2011 – May 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
