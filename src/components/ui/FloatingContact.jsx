import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919941538240"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group relative"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={30} fill="currentColor" />
                <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
                    Discuss on WhatsApp
                    <span className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 transform -translate-y-1/2 rotate-45 border-t border-r border-gray-700"></span>
                </span>
            </a>

            {/* Call Button */}
            <a
                href="tel:+919941538240"
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40 hover:bg-primary-dark hover:scale-110 transition-all duration-300 group relative"
                aria-label="Call Now"
            >
                <Phone size={26} className="animate-pulse" fill="currentColor" />
                <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
                    Call us now
                    <span className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 transform -translate-y-1/2 rotate-45 border-t border-r border-gray-700"></span>
                </span>
            </a>
        </div>
    );
};

export default FloatingContact;
