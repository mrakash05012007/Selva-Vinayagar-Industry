import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, Rocket } from 'lucide-react';

const About = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-secondary py-20 relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">About Us</h1>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">Sri Selva Vinayagar Engineering Works</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-1 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Company History</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-secondary leading-tight mb-6 uppercase">
                                A Legacy of Engineering Excellence
                            </h2>
                            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                                Sri Selva Vinayagar Engineering Works has been a cornerstone in structural fabrication and civil engineering in Tamil Nadu. We pride ourselves on delivering durable and high-quality solutions tailored to our clients' precise needs.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed flex items-center gap-3 font-semibold text-secondary">
                                <CheckCircle className="text-primary shrink-0" size={20} /> Quality Workmanship
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed flex items-center gap-3 font-semibold text-secondary">
                                <CheckCircle className="text-primary shrink-0" size={20} /> Timely Project Completion
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                                From complex industrial steel structures to residential civil works, our skilled team executes every project with structural integrity and long-term durability in mind.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/images/civil-construction.jpg" alt="Construction Work" className="w-full h-64 md:h-80 object-cover rounded shadow-lg transition-transform hover:scale-105 duration-300" />
                            <img src="/images/welding.jpg" alt="Welding" className="w-full h-64 md:h-80 object-cover rounded shadow-lg mt-8 transition-transform hover:scale-105 duration-300" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Our Mission', desc: 'To provide structurally sound, safe, and innovative engineering solutions that stand the test of time.' },
                            { icon: Users, title: 'Skilled Team', desc: 'Our workforce consists of experienced welders, fabricators, and engineers dedicated to perfection.' },
                            { icon: Rocket, title: 'Quality Focus', desc: 'We never compromise on material quality or safety standards in any of our projects.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded text-center hover:shadow-xl hover:border-primary transition-all group">
                                <item.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="font-heading font-black text-xl text-secondary uppercase mb-4">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="bg-primary py-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/images/structural-fabrication.jpg')" }}></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-black uppercase mb-6 text-white tracking-wide">Experience You Can Trust</h2>
                    <p className="text-white/90 font-medium mb-8 text-lg md:text-xl">Partner with Sri Selva Vinayagar Engineering Works for your next fabrication or construction project.</p>
                    <Link to="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-2xl hover:bg-secondary hover:text-white">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
