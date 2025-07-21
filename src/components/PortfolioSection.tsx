"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { 
  ExternalLink, 
  Eye, 
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "ecommerce",
      description: "Modern e-commerce platform with advanced filtering and payment integration",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Retailer",
      year: "2024",
      link: "https://example.com",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "web",
      description: "Professional corporate website with modern design and CMS integration",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["WordPress", "PHP", "MySQL", "CSS3"],
      client: "Tech Corporation",
      year: "2024",
      link: "https://example.com",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Restaurant Mobile App",
      category: "mobile",
      description: "iOS and Android app for restaurant ordering and delivery management",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
      client: "Restaurant Chain",
      year: "2023",
      link: "https://example.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "branding",
      description: "Complete brand identity including logo, colors, and style guide",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["Adobe Creative Suite", "Brand Strategy", "Logo Design"],
      client: "Startup Company",
      year: "2024",
      link: "https://example.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "web",
      description: "Patient management system with appointment booking and medical records",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["Angular", "Laravel", "MySQL", "Security"],
      client: "Healthcare Provider",
      year: "2023",
      link: "https://example.com",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive fitness app with workout tracking and social features",
      image: "/api/placeholder/600/400",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      technologies: ["Flutter", "Dart", "Firebase", "Health APIs"],
      client: "Fitness Company",
      year: "2024",
      link: "https://example.com",
      color: "from-orange-500 to-red-500"
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here you can see some of our design portfolio. We create amazing digital experiences that help businesses grow.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <Filter size={16} />
              <span className="font-medium">{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white">
                            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                            <p className="text-sm opacity-90">{project.category}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                              <Eye size={16} />
                            </Button>
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                              <ExternalLink size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}>
                      {project.category}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            View More Projects
          </Button>
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {selectedProject.images.map((_: any, index: number) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-600">Client:</span>
                          <span className="ml-2">{selectedProject.client}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Year:</span>
                          <span className="ml-2">{selectedProject.year}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Category:</span>
                          <span className="ml-2 capitalize">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className={`px-3 py-1 bg-gradient-to-r ${selectedProject.color} text-white text-sm rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <Button className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      View Live Site
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default PortfolioSection
