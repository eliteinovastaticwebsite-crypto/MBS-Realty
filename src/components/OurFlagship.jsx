// src/components/OurFlagship.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon,
  DocumentTextIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const OurFlagship = () => {
  const projectFeatures = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Clear-title agricultural land ownership",
      description: "Fully legal ownership with transparent documentation"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Income generation within 9 months",
      description: "Quick return on investment through agricultural produce"
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Eco-village living with transparent governance",
      description: "Sustainable community with clear management structure"
    }
  ];

  // Handle PDF View
  const handleViewPDF = () => {
    const pdfPath = '/mbs-realty-flagship-project.pdf';
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  // Handle PDF Download
  const handleDownloadPDF = () => {
    const pdfPath = '/mbs-realty-flagship-project.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'MBS-Realty-Flagship-Project.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-blue-200 px-4 md:px-6 py-2 md:py-3 rounded-2xl mb-4 md:mb-6">
            <SparklesIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-sm md:text-base text-blue-700 font-semibold">🌿 Flagship Project</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Flagship Project</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            A professionally structured eco-agri land investment and family living community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Project Title Card */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl mb-8 md:mb-10">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HomeModernIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                      MBS Global Eco-Agri Village & Investment Project
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold italic border-l-4 border-blue-500 pl-4 md:pl-6 py-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-r-xl">
                  Where families, farming, and financial freedom come together.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-10">
              <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </div>
                Key Highlights
              </h4>
              
              {projectFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 md:gap-4 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl">
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8">
                  <div className="aspect-video rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden mb-6 md:mb-8">
                    {/* Content in Visual */}
                    <div className="relative z-10 text-center p-4 md:p-8">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                        <UserGroupIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 md:mb-4">
                        Sustainable Community Living
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto text-base md:text-lg px-2">
                        Combining agricultural productivity with residential comfort for a holistic living experience
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <div className="text-lg md:text-2xl font-black text-blue-600 mb-1">100%</div>
                      <div className="text-xs md:text-sm font-bold text-gray-800">Legal Security</div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                      <div className="text-lg md:text-2xl font-black text-purple-600 mb-1">9 Months</div>
                      <div className="text-xs md:text-sm font-bold text-gray-800">ROI Timeline</div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                      <div className="text-lg md:text-2xl font-black text-pink-600 mb-1">100+</div>
                      <div className="text-xs md:text-sm font-bold text-gray-800">Family Plots</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-4 md:p-6 shadow-lg"
              >
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  Investment Benefits
                </h4>
                <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span><strong className="text-blue-600">Tangible Asset:</strong> Land is a finite resource with appreciating value</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span><strong className="text-purple-600">Dual Income:</strong> Agricultural produce + land value appreciation</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    <span><strong className="text-pink-600">Food Security:</strong> Direct access to organic food production</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* New PDF Section - Horizontal Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8">
              {/* Big Horizontal PDF Buttons */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* View PDF Button - Horizontal Layout */}
                <motion.button
                  onClick={handleViewPDF}
                  className="flex-1 flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-6 md:px-10 py-8 md:py-12 rounded-2xl md:rounded-3xl font-bold border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 w-full">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <EyeIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 md:mb-3 group-hover:text-blue-700 transition-colors">
                        View Project PDF
                      </h3>
                      <p className="text-blue-500 font-medium text-sm md:text-base mb-1 md:mb-2">
                        Interactive Preview
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-600 transition-colors">
                        <span className="text-xs md:text-sm font-semibold">Open in Browser</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="text-blue-300 group-hover:text-blue-500 transition-colors">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.button>

                {/* Download PDF Button - Horizontal Layout */}
                <motion.button
                  onClick={handleDownloadPDF}
                  className="flex-1 flex items-center justify-between bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 px-6 md:px-10 py-8 md:py-12 rounded-2xl md:rounded-3xl font-bold border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-8 -translate-x-8"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full translate-y-12 translate-x-12"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 w-full">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <ArrowDownTrayIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 md:mb-3 group-hover:text-purple-700 transition-colors">
                        Download Full PDF
                      </h3>
                      <p className="text-purple-500 font-medium text-sm md:text-base mb-1 md:mb-2">
                        15 Pages • 5.2 MB
                      </p>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-600 transition-colors">
                        <span className="text-xs md:text-sm font-semibold">Save to Device</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="text-purple-300 group-hover:text-purple-500 transition-colors">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="text-center pt-8 md:pt-12 mt-8 md:mt-12 border-t border-gray-200">
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  Includes: Financial projections, legal documents, site plans, and community guidelines
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Section - Matching About page style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 text-center mb-6 md:mb-8">
                Why This Project Stands Out
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4 md:p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl border border-blue-100/50">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <EyeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Complete Transparency</h4>
                  <p className="text-gray-600 text-xs md:text-sm">All legal documents and financial projections openly shared</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl md:rounded-2xl border border-purple-100/50">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <HeartIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Community Focused</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Designed for families with shared amenities and social spaces</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl md:rounded-2xl border border-cyan-100/50">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CurrencyDollarIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Smart Investment</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Structured returns with multiple income streams</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFlagship;