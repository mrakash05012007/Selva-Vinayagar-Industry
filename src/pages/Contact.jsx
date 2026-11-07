import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="bg-secondary py-16 relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/images/structural-fabrication.jpg')" }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">Contact Us</h1>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">Get in touch for your engineering needs</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-primary"></div>
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Reach Out</h3>
                        </div>
                        <h2 className="text-3xl font-heading font-black text-secondary leading-tight mb-8 uppercase">
                            Let's Discuss Your Project
                        </h2>
                        <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                            Whether you need structural fabrication, erection work, or complete civil construction, our expert team is ready to deliver. Contact us today for a consultation or to request a free quote.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
                                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-black text-lg text-secondary uppercase mb-1">Call Us</h4>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919941538240" className="text-gray-600 hover:text-primary transition-colors font-medium">+91 99415 38240</a>
                                        <a href="tel:+919710259112" className="text-gray-600 hover:text-primary transition-colors font-medium">+91 97102 59112</a>
                                        <a href="tel:+919994348045" className="text-gray-600 hover:text-primary transition-colors font-medium">+91 99943 48045</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
                                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-black text-lg text-secondary uppercase mb-1">Email Us</h4>
                                    <a href="mailto:sriselvavinayagarengg2021@gmail.com" className="text-gray-600 hover:text-primary transition-colors font-medium break-all block">
                                        sriselvavinayagarengg2021<br />@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
                                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-black text-lg text-secondary uppercase mb-1">Visit Us</h4>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        No.23, Ramachandra Reddy Street,<br />
                                        Thiruvayarpadi, Ponneri (Near Town Panchayat)<br />
                                        Ponneri - 601204, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
                                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <FileText className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-black text-lg text-secondary uppercase mb-1">GST Details</h4>
                                    <p className="text-gray-600 font-medium font-mono">
                                        33BGPPN1976G1ZL
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded shadow-2xl border-t-4 border-primary">
                        <h3 className="font-heading font-black text-2xl text-secondary uppercase mb-6 relative inline-block">
                            Request a Quote
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Your Name</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-gray-50" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-gray-50" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-gray-50" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Service Required</label>
                                <select required name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-gray-50 text-gray-700">
                                    <option value="" disabled>Select a service</option>
                                    <option value="Structural Fabrication">Structural Fabrication</option>
                                    <option value="Erection Work">Erection Work</option>
                                    <option value="Rolling Shutters">Rolling Shutters</option>
                                    <option value="Stainless Steel Works">Stainless Steel Works</option>
                                    <option value="Civil Construction">Civil Construction</option>
                                    <option value="Other">Other Requirement</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Message</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-gray-50" placeholder="Tell us about your project requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider py-4 rounded shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                                Send Enquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[450px] w-full bg-gray-200 relative">
                <iframe
                    title="Sri Selva Vinayagar Engineering Works Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.150742514574!2d80.1911!3d13.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a833d7b81bf05%3A0xc6cb5dae16dd3fcb!2sPonneri%2C%20Tamil%20Nadu%20601204!5e0!3m2!1sen!2sin!4v1619827341238!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
                {/* Overlay for map to prevent accidental scrolling inside iframe */}
                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
            </section>
        </div>
    );
};

export default Contact;
