import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-lg text-stone-800">
                Verdant
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Bringing nature into your home with premium plants and simple care.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-stone-800 mb-3 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {['About Us', 'Shop', 'Plant Care', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-stone-500 hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-stone-800 mb-3 text-sm">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-stone-500">
              <li className="flex items-center gap-2">
                <Mail size={13} /> hello@verdant.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} /> 123 Green St
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium text-stone-800 mb-3 text-sm">
              Follow
            </h3>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-stone-100 text-stone-600
                             hover:bg-primary hover:text-white 
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-200 mt-6 pt-5 text-center text-stone-400 text-xs">
          © 2026 Verdant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};