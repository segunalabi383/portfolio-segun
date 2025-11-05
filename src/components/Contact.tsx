import { Mail, Phone, MapPin, Send, Github, Linkedin, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-center text-slate-300 mb-12 text-lg">
            Let's discuss how I can help bring your project to life
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:segunalabi383@gmail.com"
              className="bg-slate-800 hover:bg-slate-700 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Email</div>
                  <div className="font-semibold">segunalabi383@gmail.com</div>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/18622335614"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Call</div>
                  <div className="font-semibold">+1 (619) 738-6448</div>
                </div>
              </div>
            </a>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Location</div>
                  <div className="font-semibold">East Orange, NJ 07017</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Send size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Availability</div>
                  <div className="font-semibold">Open for opportunities</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/segunalabi383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github size={24} />
                <span className="font-semibold">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/segun-alabi-baa17225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
