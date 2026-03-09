import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center bg-secondary">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-primary px-4 py-1.5 rounded-sm mb-6">
                            <span className="font-bold text-white tracking-widest text-xs uppercase">SPI-IN Structural Fabrication</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 uppercase tracking-tight">
                            Precision Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Strong Foundations</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-2xl border-l-4 border-primary pl-4">
                            Trusted experts in structural fabrication, erection work, rolling shutters, and comprehensive civil construction based in Ponneri, Tamil Nadu.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
                                <Phone size={20} className="group-hover:animate-pulse" /> Call Now
                            </Link>
                            <a href="https://wa.me/919941538240" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group">
                                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" /> WhatsApp Us
                            </a>
                            <Link to="/services" className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group">
                                Our Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats / Info Bar */}
            <section className="bg-primary-dark py-6 border-b border-primary relative z-20 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="flex items-center justify-center md:justify-start gap-4 p-2">
                            <ShieldCheck size={36} className="text-accent" />
                            <div>
                                <h4 className="font-bold text-lg leading-tight uppercase tracking-wider">High Quality</h4>
                                <p className="text-white/80 text-sm">Industrial Grade Materials</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-center gap-4 p-2">
                            <Clock size={36} className="text-accent" />
                            <div>
                                <h4 className="font-bold text-lg leading-tight uppercase tracking-wider">Timely Delivery</h4>
                                <p className="text-white/80 text-sm">On-schedule execution</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-end gap-4 p-2">
                            <CheckCircle size={36} className="text-accent" />
                            <div>
                                <h4 className="font-bold text-lg leading-tight uppercase tracking-wider">Expert Team</h4>
                                <p className="text-white/80 text-sm">Skilled Professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Overview */}
            <section className="py-20 bg-white bg-pattern">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-1 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary leading-tight mb-6 uppercase">
                                Sri Selva Vinayagar Engineering Works
                            </h2>
                            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                                We are a trusted engineering and fabrication company providing durable, high-quality engineering solutions for industrial, commercial, and residential projects.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                With a strong commitment to quality workmanship and timely project completion, we specialize in structural fabrication, erection work, rolling shutters, stainless steel works, and comprehensive civil construction services.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {['Durable & Reliable Solutions', 'Custom Engineering Designs', 'Experienced Professional Team'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary font-bold">
                                        <CheckCircle className="text-primary shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/about" className="inline-block bg-secondary hover:bg-black text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-lg">
                                More About Us
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="hidden lg:block absolute -top-8 -left-8 w-full h-full border-4 border-primary rounded z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1510006240217-17eb9c2c62c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Welding Works"
                                className="relative z-10 w-full object-cover rounded shadow-2xl h-[400px] md:h-[500px]"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-xl z-20 border-b-4 border-primary">
                                <p className="font-heading text-5xl font-black text-primary mb-1">10+</p>
                                <p className="text-sm font-bold text-secondary uppercase tracking-wider">Years of<br />Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h3>
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary uppercase mb-6">Professional Fabrication Services</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 font-medium">Delivering industrial-grade engineering services with precise execution and uncompromising quality standards.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Structural Fabrication', desc: 'Heavy-duty steel structures built for industrial and commercial longevity.' },
                            { title: 'Erection Work', desc: 'Safe and precise structural erection by certified engineering experts.' },
                            { title: 'Rolling Shutters', desc: 'Motorised and gear-type shutters for ultimate security and ease.' },
                            { title: 'Civil Construction', desc: 'Complete building solutions from foundation to finishing work.' }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white border text-center p-8 border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 mx-auto group-hover:bg-primary transition-colors">
                                    <span className="text-primary group-hover:text-white font-black text-2xl">0{idx + 1}</span>
                                </div>
                                <h4 className="font-heading font-black text-xl text-secondary uppercase mb-3 tracking-wide">{srv.title}</h4>
                                <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-100 leading-relaxed">{srv.desc}</p>
                                <Link to="/services" className="text-sm font-bold text-primary uppercase tracking-widest group-hover:text-secondary transition-colors inline-flex items-center gap-1">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-block bg-secondary hover:bg-primary text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-lg">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust / CTA Section */}
            <section className="py-20 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full filter blur-[100px] opacity-10"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6 leading-tight">
                        Ready for your next <span className="text-primary">Engineering Project?</span>
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg font-medium">
                        Let's discuss how Sri Selva Vinayagar Engineering Works can bring your structural designs to life with our expert fabrication services.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2">
                            Get A Free Quote
                        </Link>
                        <a href="tel:+919941538240" className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                            <Phone size={20} /> Call +91 99415 38240
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
