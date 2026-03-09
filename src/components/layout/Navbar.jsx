import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 top-0 left-0 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col flex-shrink-0 group">
                        <span className="font-heading font-black text-xl md:text-2xl text-primary tracking-tight uppercase group-hover:text-primary-dark transition-colors">Sri Selva Vinayagar</span>
                        <span className="font-body text-[10px] md:text-xs text-secondary font-bold tracking-[0.2em] uppercase">Engineering Works</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 transform hover:-translate-y-0.5">
                            <Phone size={16} /> Get Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 mt-3 md:mt-4 h-screen max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-4 rounded-md font-bold text-base uppercase tracking-wider ${location.pathname === link.path ? 'bg-gray-50 text-primary border-l-4 border-primary' : 'text-secondary border-l-4 border-transparent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-6 mx-3 bg-primary text-white py-4 rounded-md text-base font-bold uppercase tracking-wider text-center flex justify-center items-center gap-2 shadow-md">
                            <Phone size={18} /> Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
