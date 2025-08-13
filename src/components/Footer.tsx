import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by{' '}
              <span className="text-purple-400 font-semibold">soft-knit</span>
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;