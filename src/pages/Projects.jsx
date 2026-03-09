import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Structural', 'Rolling Shutters', 'Civil Works', 'Details & Bending'];

    const projects = [
        { id: 1, title: 'Industrial Shed Erection', category: 'Structural', img: 'https://images.unsplash.com/photo-1541888002621-36ad60c38863?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Commercial Rolling Shutters', category: 'Rolling Shutters', img: 'https://images.unsplash.com/photo-1621251842055-6b5c32938b81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Warehouse Construction', category: 'Civil Works', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'SS Railing Installation', category: 'Details & Bending', img: 'https://images.unsplash.com/photo-1510006240217-17eb9c2c62c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Pre-Engineered Building', category: 'Structural', img: 'https://images.unsplash.com/photo-1590439401918-68e1c6b5e022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Motorised Gear Shutters', category: 'Rolling Shutters', img: 'https://images.unsplash.com/photo-1621251842055-6b5c32938b81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 7, title: 'Custom Tube Bending', category: 'Details & Bending', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Foundation & Footing', category: 'Civil Works', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-secondary py-16 relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510006240217-17eb9c2c62c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">Our Projects</h1>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">Gallery of Quality Workmanship</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            // eslint-disable-next-line
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all border-2 ${filter === cat
                                ? 'bg-primary border-primary text-white shadow-lg'
                                : 'bg-transparent border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProjects.map(proj => (
                        <div key={proj.id} className="group relative overflow-hidden rounded bg-gray-100 aspect-square shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer">
                            <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proj.category}</span>
                                <h4 className="font-heading font-black text-white text-xl uppercase leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{proj.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Projects;
