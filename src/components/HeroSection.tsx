"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Transform Your Digital Presence",
      subtitle: "Leading Digital Marketing & Web Development Agency",
      description: "We help businesses grow online with innovative digital marketing strategies, stunning web designs, and robust development solutions.",
      image: "/api/placeholder/1920/800",
      cta: "Get Started",
      color: "from-blue-600 to-purple-700"
    },
    {
      id: 2,
      title: "Boost Your Online Visibility",
      subtitle: "Complete SEO & Digital Marketing Solutions",
      description: "Increase your search rankings, drive more traffic, and convert visitors into customers with our proven marketing strategies.",
      image: "/api/placeholder/1920/800",
      cta: "Learn More",
      color: "from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "Custom Web Development",
      subtitle: "Modern, Fast & Secure Websites",
      description: "Get a professional website that looks great, loads fast, and converts visitors into customers across all devices.",
      image: "/api/placeholder/1920/800",
      cta: "View Portfolio",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Mobile App Development",
      subtitle: "iOS & Android App Solutions",
      description: "Expand your reach with custom mobile applications that engage users and drive business growth.",
      image: "/api/placeholder/1920/800",
      cta: "Start Project",
      color: "from-orange-600 to-red-600"
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPlaying, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 3000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background with Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`} />
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="space-y-6 text-white"
                    >
                      <motion.p 
                        className="text-lg md:text-xl font-medium opacity-90"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {slide.subtitle}
                      </motion.p>
                      
                      <motion.h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        className="text-xl md:text-2xl max-w-3xl opacity-90 leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                      >
                        <Button 
                          size="lg" 
                          className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 h-auto group"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 h-auto group"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Watch Video
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
      >
        {isPlaying ? (
          <div className="w-4 h-4 flex space-x-1">
            <div className="w-1 h-full bg-current rounded-full"></div>
            <div className="w-1 h-full bg-current rounded-full"></div>
          </div>
        ) : (
          <Play size={16} className="ml-0.5" />
        )}
      </button>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
