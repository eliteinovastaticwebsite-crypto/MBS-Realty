import React from 'react'
import { motion } from 'framer-motion'
import { 
  BuildingOfficeIcon, 
  ArrowRightIcon,
  CheckBadgeIcon,
  StarIcon,
  CheckCircleIcon,
  EyeIcon,
  ClockIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import AboutCardImage from "../assets/AboutCardImage.avif"

const AboutUs = () => {
  const features = [
    "Sales & Investment Opportunities",
    "Market Analysis & Corporate Services",
    "Property Management",
    "Industrial, Commercial & Residential Properties",
    "20+ Years of Excellence",
    "Professional Team Management"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full blur-xl opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-20"></div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-200 px-4 py-2 rounded-full mb-8"
              >
                <StarIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm">Since 2008</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ABOUT MBS REALTY
              </motion.h2>

              {/* Experience Tagline */}
              <motion.h3
                className="text-2xl md:text-3xl font-black text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Experience That Creates Value
              </motion.h3>
              <motion.h4
                className="text-xl md:text-2xl font-bold text-blue-600 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Who We Are
              </motion.h4>

              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    For over <span className="font-bold text-blue-600">20+ years</span>, MBS Realty has been shaping high-quality, sustainable real estate by combining deep local expertise with global investment intelligence.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-xl border-l-4 border-purple-500 shadow-sm">
                  <p className="text-xl font-black text-gray-900 italic">
                    "Our philosophy is simple: <span className="text-blue-600">Excellence through Quality</span>"
                  </p>
                </div>

                {/* Strategic Partner Section */}
                <div className="p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-100/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <LightBulbIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-2">
                        Our Strategic Difference
                      </h4>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        Unlike conventional real estate brokers, MBS Realty operates as a strategic real estate partner, delivering value through <span className="font-bold text-blue-600">insight</span>, <span className="font-bold text-purple-600">ethics</span>, <span className="font-bold text-teal-600">transparency</span>, and <span className="font-bold text-pink-600">long-term vision</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Comparison */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      <span className="text-blue-600 font-bold">MBS Realty:</span> Advisory-led, strategic approach
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <StarIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      <span className="text-blue-600 font-bold">Experience:</span> 20+ years vs Limited/Fragmented
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <EyeIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      <span className="text-blue-600 font-bold">Transparency:</span> End-to-end clarity vs Often opaque
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckBadgeIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
                  <div className="text-2xl font-black text-blue-600 mb-1">20+</div>
                  <div className="text-xs font-bold text-gray-800">Years</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
                  <div className="text-2xl font-black text-purple-600 mb-1">1000+</div>
                  <div className="text-xs font-bold text-gray-800">Clients</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200 text-center">
                  <div className="text-2xl font-black text-pink-600 mb-1">100%</div>
                  <div className="text-xs font-bold text-gray-800">Focus</div>
                </div>
              </motion.div>

              {/* Link to About Page */}
              <Link to="/about">
                <motion.button
                  className="flex items-center gap-3 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  Explore Our Journey
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image Card Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-3xl p-8 backdrop-blur-sm">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Actual Image with overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={AboutCardImage} 
                        alt="MBS Realty - Premium Real Estate Services"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                    </div>
                    
                    {/* Floating Elements on Image */}
                    <motion.div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-bold text-gray-800">20+ Years</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-bold">Strategic Partner</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-bold">Tamil Nadu</span>
                    </motion.div>

                    {/* Company Logo/Brand Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center bg-white/80 backdrop-blur-sm py-4 px-6 rounded-2xl shadow-lg">
                        <BuildingOfficeIcon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-800 font-bold text-lg">MBS Realty</p>
                        <p className="text-gray-600 text-sm">Experience That Creates Value</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-black text-gray-900 mb-2">Why Choose MBS Realty</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Advisory-led, Strategic Approach</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">End-to-end Transparency</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Long-term Value Creation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;