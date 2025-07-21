"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Target, Award } from 'lucide-react'

const CaseStudySection = () => {
  const caseStudyData = {
    website: "vlcparking.com",
    description: "SEO Campaign Results",
    timeline: "6 Months",
    improvement: "400%"
  }

  const keywordRankings = [
    { keyword: "vlc parking", position: 1, searchVolume: "1,200" },
    { keyword: "parking solutions", position: 2, searchVolume: "2,400" },
    { keyword: "smart parking", position: 3, searchVolume: "3,600" },
    { keyword: "automated parking", position: 4, searchVolume: "1,800" },
    { keyword: "parking management", position: 5, searchVolume: "2,100" },
    { keyword: "parking technology", position: 6, searchVolume: "1,500" },
    { keyword: "parking systems", position: 3, searchVolume: "2,800" },
    { keyword: "parking software", position: 2, searchVolume: "1,900" },
    { keyword: "digital parking", position: 1, searchVolume: "1,400" }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: "Traffic Increase",
      value: "400%",
      description: "Organic traffic boost"
    },
    {
      icon: Target,
      title: "Keywords Ranked",
      value: "9",
      description: "Top 10 positions"
    },
    {
      icon: Users,
      title: "Lead Generation",
      value: "250%",
      description: "Quality leads increase"
    },
    {
      icon: Award,
      title: "ROI",
      value: "300%",
      description: "Return on investment"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
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
            Success <span className="text-primary">Case Study</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from our SEO campaigns. See how we helped vlcparking.com achieve remarkable growth in search rankings and organic traffic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Case Study Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Website:</span>
                    <span className="text-primary font-bold">{caseStudyData.website}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Campaign:</span>
                    <span className="font-semibold">{caseStudyData.description}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Timeline:</span>
                    <span className="font-semibold">{caseStudyData.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium text-gray-600">Growth:</span>
                    <span className="text-green-600 font-bold text-xl">+{caseStudyData.improvement}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Keyword Rankings Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Keyword Rankings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-semibold text-gray-600">Keyword</th>
                        <th className="text-center py-3 font-semibold text-gray-600">Position</th>
                        <th className="text-right py-3 font-semibold text-gray-600">Monthly Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keywordRankings.map((keyword, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 text-gray-800">{keyword.keyword}</td>
                          <td className="py-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">
                              {keyword.position}
                            </span>
                          </td>
                          <td className="py-4 text-right text-gray-600">{keyword.searchVolume}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.value}</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Get Similar Results?</h3>
          <p className="text-xl mb-6 text-white/90">
            Let's create a success story for your business too
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Your SEO Campaign
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudySection
