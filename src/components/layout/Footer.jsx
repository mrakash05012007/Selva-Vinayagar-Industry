import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText, Wrench } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t-[6px] border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <h3 className="font-heading font-black text-2xl text-white tracking-tight leading-none uppercase">Sri Selva Vinayagar</h3>
                            <p className="font-body text-primary font-bold tracking-[0.15em] text-xs mt-1 uppercase">Engineering Works</p>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed font-medium">
                            Trusted engineering and fabrication company specializing in structural fabrication, erection work, rolling shutters, and civil construction services.
                        </p>
                        <div className="flex items-center gap-3 text-gray-300 bg-secondary-light p-3 rounded-md border border-gray-800 shadow-inner">
                            <FileText className="text-accent shrink-0" size={24} />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">GST Number</p>
                                <p className="font-mono font-bold text-sm tracking-widest">33BGPPN1976G1ZL</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-black text-xl mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About ', 'Services', 'Projects', 'Contact'].map((link) => {
                                const path = link === 'Home' ? '/' : `/${link.toLowerCase().trim().replace(' ', '-')}`;
                                return (
                                    <li key={link}>
                                        <Link to={path} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider group">
                                            <span className="w-1.5 h-1.5 bg-accent/40 group-hover:bg-accent rounded-full transition-colors"></span>
                                            {link === 'About ' ? 'About Us' : link}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Core Services */}
                    <div>
                        <h4 className="font-heading font-black text-xl mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary uppercase tracking-wide">Core Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Structural Fabrication',
                                'Erection Work',
                                'Stainless Steel Works',
                                'Motorised Shutters',
                                'Civil Construction'
                            ].map((service) => (
                                <li key={service} className="text-gray-400 flex items-center gap-2 text-sm font-bold tracking-wide">
                                    <Wrench className="text-primary/70 shrink-0" size={14} />
                                    {service}
                                </li>
                            ))}
                            <li className="mt-6">
                                <Link to="/services" className="text-accent hover:text-white transition-colors text-sm font-black uppercase tracking-widest flex items-center gap-1 group">
                                    View All Services <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-black text-xl mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary uppercase tracking-wide">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-gray-400 text-sm font-medium leading-relaxed">
                                <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
                                <span>No.23, Ramachandra Reddy Street, Thiruvayarpadi, Ponneri (Near Town Panchayat) - 601204, Tamil Nadu</span>
                            </li>
                            <li className="flex flex-col gap-2.5">
                                <a href="tel:+919941538240" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                    <Phone className="text-primary shrink-0 group-hover:animate-bounce" size={18} />
                                    <span className="font-bold tracking-wide">+91 99415 38240</span>
                                </a>
                                <a href="tel:+919710259112" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm ml-7 group">
                                    <span className="font-bold tracking-wide">+91 97102 59112</span>
                                </a>
                                <a href="tel:+919994348045" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm ml-7 group">
                                    <span className="font-bold tracking-wide">+91 99943 48045</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <a href="mailto:sriselvavinayagarengg2021@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm break-all group font-medium">
                                    <Mail className="text-primary shrink-0 mt-0.5" size={18} />
                                    <span className="leading-tight">sriselvavinayagarengg2021<br />@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm focus-visible:font-medium text-center md:text-left font-bold tracking-wide">
                        &copy; {new Date().getFullYear()} Sri Selva Vinayagar Engineering Works.
                    </p>
                    <p className="text-primary-dark/80 text-xs font-black tracking-[0.2em] uppercase text-center md:text-right">
                        SPI-IN Structural Fabrication / Erection Work
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
