import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ngkass.bhadick@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Sri Haryo Trah Pamungkas</span>
            </p>
            <p className="text-slate-500 mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}