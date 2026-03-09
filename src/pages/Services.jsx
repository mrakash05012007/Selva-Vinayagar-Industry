import React from 'react';
import { Settings, Wrench as Tool, Columns, Home, Scissors, CornerUpRight, GitCommit, PenTool } from 'lucide-react';

const Services = () => {
    const services = [
        { id: 1, title: 'Structural Fabrication', desc: 'Heavy-duty steel structural fabrication for industrial sheds, factories, and warehouses.', icon: Columns, img: 'https://images.unsplash.com/photo-1541888002621-36ad60c38863?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Erection Work', desc: 'Precision erection of pre-engineered and fabricated steel structures by expert professionals.', icon: Tool, img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 3, title: 'Rolling Shutters', desc: 'Motorised and gear-type rolling shutters with maximum durability and security.', icon: Settings, img: 'https://images.unsplash.com/photo-1621251842055-6b5c32938b81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 4, title: 'Stainless Steel Works', desc: 'High-grade SS fabrication for railings, gates, and industrial applications.', icon: PenTool, img: 'https://images.unsplash.com/photo-1510006240217-17eb9c2c62c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 5, title: 'Pre-Engineered Structures', desc: 'Turnkey PEB solutions customized to meet specific industrial requirements.', icon: Home, img: 'https://images.unsplash.com/photo-1590439401918-68e1c6b5e022?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 6, title: 'Sheet Shearing & Folding', desc: 'Accurate SS/MS sheet cutting and precise folding works as per the design specifications.', icon: Scissors, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 7, title: 'Tube Bending Works', desc: 'Square and round tube bending for various structural and decorative applications.', icon: CornerUpRight, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 8, title: 'Civil Construction', desc: 'Complete civil construction solutions seamlessly integrated with our engineering structures.', icon: GitCommit, img: 'https://images.unsplash.com/photo-1541888002621-36ad60c38863?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <section className="bg-secondary py-16 relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">Our Services</h1>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">Industrial Fabrication & Engineering</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-[-40px] relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((srv) => (
                        <div key={srv.id} className="bg-white rounded overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded shadow-lg z-20">
                                    <srv.icon size={24} />
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col items-start text-left">
                                <h3 className="font-heading font-black text-xl text-secondary uppercase mb-3 line-clamp-2">{srv.title}</h3>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 flex-grow">{srv.desc}</p>
                                <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
