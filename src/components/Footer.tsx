import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by Segun Alabi</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
