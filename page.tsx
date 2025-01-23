"use client"

import Image from "next/image";
import { useState } from "react";
import { Shield, Award, Star, Medal, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('residential');

  const services = [
    {
      icon: "🏠",
      title: "Complete Renovation",
      description: "From design to implementation, we transform your space into a modern home",
      features: ["Total renovation", "Construction modifications", "Project documentation", "Design consulting"]
    },
    {
      icon: "🛁",
      title: "Bathrooms and Kitchens",
      description: "Luxury solutions for your bathrooms and kitchens",
      features: ["Modern equipment", "Waterproof insulation", "Underfloor heating", "Smart appliances"]
    },
    {
      icon: "🎨",
      title: "Interior Design",
      description: "Professional custom interior designs",
      features: ["3D visualization", "Material selection", "Color concepts", "Custom furniture"]
    },
    {
      icon: "🏢",
      title: "Commercial Spaces",
      description: "Renovation of shops, offices, and restaurants",
      features: ["Space optimization", "Corporate identity", "Technical background", "Time management"]
    },
    {
      icon: "🌿",
      title: "Exteriors",
      description: "Complete solutions for outdoor spaces",
      features: ["Terraces", "Facades", "Garden modifications", "Outdoor lighting"]
    },
    {
      icon: "⚡",
      title: "Technical Installations",
      description: "Modern technical equipment for your home",
      features: ["Electrical installations", "Heating", "Air conditioning", "Smart home"]
    },
    {
      icon: "🏗️",
      title: "Construction Work",
      description: "Comprehensive construction services",
      features: ["Extensions", "Additions", "Demolition", "Structural modifications"]
    }
  ];

  const projects = [
    {
      title: "Riverside Villa",
      type: "Complete Renovation",
      description: "Luxury renovation of a 1930s villa into a modern family residence",
      image: "/img/renovation1.jpg",
      stats: {
        duration: "8 months",
        area: "450m²",
        budget: "Premium"
      }
    },
    {
      title: "Downtown Loft",
      type: "Interior Design",
      description: "Transformation of an industrial space into a modern apartment",
      image: "/img/renovation2.jpg",
      stats: {
        duration: "4 months",
        area: "180m²",
        budget: "Standard"
      }
    },
    {
      title: "Green Valley House",
      type: "New Construction",
      description: "Eco-friendly new construction with a focus on sustainability",
      image: "/img/dashboard.jpg",
      stats: {
        duration: "12 months",
        area: "320m²",
        budget: "Premium"
      }
    }
  ];

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Modernizovaná navigace */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Link href="/" passHref>
                <Image 
                  src="/img/logo.jpg" 
                  alt="Elite Renovations Logo" 
                  width={50} 
                  height={50} 
                  className="rounded-full hover:scale-105 transition-transform"
                />
              </Link>
              <Link href="/" passHref>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Elite Renovations
                </span>
              </Link>
            </motion.div>
            
            {/* Aktualizovaná navigace s plynulými přechody */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Services", "Projects", "Team", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="nav-link relative"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Get Quote
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Vylepšená hero sekce */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/img/dashboard.jpg" 
            alt="Luxury Home Renovation" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Transform Your Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Award-winning luxury renovation specialists with over two decades of excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3">
            <Medal className="w-12 h-12 text-blue-900" />
            <div>
              <p className="font-semibold text-blue-900">Licensed & Certified</p>
              <p className="text-sm text-gray-600">Renovation Experts</p>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="about" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are a team of renovation experts specializing in transforming residential and commercial spaces. Our passion for design and quality sets us apart from the rest. With over twenty years of experience in the field, we take pride in providing our clients with top-notch services.
          </p>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            Our mission is to transform spaces to reflect the unique needs and desires of our clients. We believe that every project is an opportunity to create something exceptional.
          </p>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Innovation:</strong> We constantly seek new and creative ways to enhance our services.</li>
            <li><strong>Quality:</strong> Our work is always carried out to the highest standards of quality.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority.</li>
          </ul>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Us</h3>
          <p className="text-gray-600">
            If you are interested in our services or would like to learn more, feel free to contact us. We are happy to assist you with your project!
          </p>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-24 px-4 bg-white" ref={servicesRef}>
        <div className={`max-w-7xl mx-auto ${servicesInView ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="section-heading">Our Premium Services</h2>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button 
                className={`px-6 py-2 rounded-md ${activeTab === 'residential' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('residential')}
              >
                Residential
              </button>
              <button 
                className={`px-6 py-2 rounded-md ${activeTab === 'commercial' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('commercial')}
              >
                Commercial
              </button>
            </div>
          </div>
          {/* Zobrazení služeb podle aktivní karty */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(service => (activeTab === 'residential' && service.title !== "Commercial Spaces") || 
                                 (activeTab === 'commercial' && service.title === "Commercial Spaces"))
              .map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <ul className="mt-2 list-disc list-inside">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-500">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="block text-gray-400">Duration</span>
                        <span>{project.stats.duration}</span>
                      </div>
                      <div>
                        <span className="block text-gray-400">Area</span>
                        <span>{project.stats.area}</span>
                      </div>
                      <div>
                        <span className="block text-gray-400">Budget</span>
                        <span>{project.stats.budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "John Anderson",
                role: "Lead Architect",
                bio: "20+ years of experience in luxury home design"
              },
              {
                name: "Sarah Mitchell",
                role: "Interior Design Director",
                bio: "Award-winning designer specializing in modern spaces"
              },
              {
                name: "Michael Zhang",
                role: "Project Manager",
                bio: "Certified construction manager with MBA"
              }
            ].map((member, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image 
                    src="/img/profile.jpg" 
                    alt={member.name} 
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-blue-900 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                platform: "Google",
                rating: 5,
                text: "Exceptional attention to detail. They transformed our outdated villa into a modern masterpiece.",
                author: "Emily R."
              },
              {
                platform: "Houzz",
                rating: 5,
                text: "Professional team that delivered beyond our expectations. Highly recommended!",
                author: "Michael S."
              },
              {
                platform: "Yelp",
                rating: 5,
                text: "Outstanding service from start to finish. The team was incredibly skilled and professional.",
                author: "David L."
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-sm text-gray-500">via {review.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Enhanced Contact Form */}
<section id="contact" className="py-24 px-4 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="section-heading">Contact Us</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="card">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-900" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">+420 777 888 999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-900" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">info@eliterenovations.cz</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-900" />
              <div>
                <p className="font-semibold">Find Us At</p>
                <p className="text-gray-600">Wenceslas Square 1<br />110 00 Prague 1</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-900" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM<br />Sat: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Certifications and Awards</h3>
          <div className="flex gap-4">
            <Award className="w-12 h-12 text-blue-900" />
            <Shield className="w-12 h-12 text-blue-900" />
            <Medal className="w-12 h-12 text-blue-900" />
          </div>
        </div>
      </div>
      <form className="card space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input 
            type="tel" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            required
          >
            <option value="">Select a project type</option>
            <option value="renovation">Complete Renovation</option>
            <option value="interior">Interior Design</option>
            <option value="kitchen">Kitchens and Bathrooms</option>
            <option value="commercial">Commercial Spaces</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            rows={4}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Enhanced Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Elite Renovations</h3>
              <p className="text-gray-300">
                Creating exceptional living spaces since 2000.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#services#residential" className="text-gray-300 hover:text-white transition-colors">Residential Renovation</a></li>
                <li><a href="#services#commercial" className="text-gray-300 hover:text-white transition-colors">Commercial Renovation</a></li>
                <li><a href="#services#interior" className="text-gray-300 hover:text-white transition-colors">Interior Design</a></li>
                <li><a href="#services#exteriors" className="text-gray-300 hover:text-white transition-colors">Exteriors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-2">Phone: +420 777 888 999</p>
              <p className="text-gray-300 mb-2">Email: <a href="mailto:info@eliterenovations.cz" className="text-gray-300 hover:text-white transition-colors">info@eliterenovations.cz</a></p>
              <p className="text-gray-300">Address: Wenceslas Square 1, 110 00 Prague 1</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Elite Renovations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}