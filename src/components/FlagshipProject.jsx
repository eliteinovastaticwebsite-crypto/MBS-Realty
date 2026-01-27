// src/components/FlagshipProject.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  UserGroupIcon,
  ArrowDownTrayIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const FlagshipProject = () => {
  const navigate = useNavigate();

  const projectFeatures = [
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Eco-Agri Land Ownership",
      description: "Own a piece of sustainable agricultural land"
    },
    {
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
      title: "Structured Income Model",
      description: "Smart investment with predictable returns"
    },
    {
      icon: <HomeModernIcon className="w-6 h-6" />,
      title: "Sustainable Community Living",
      description: "Live in harmony with nature and community"
    }
  ];

  // Handle Explore Properties Navigation
  const handleExploreProperties = () => {
    navigate('/properties');
  };

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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Flagship Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A revolutionary approach to sustainable living and smart investing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Project Title Card */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl mb-10">
              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <HomeModernIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                      MBS Global Eco-Agri Village & Investment Project
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-semibold italic border-l-4 border-blue-500 pl-4 py-2">
                  Where families, farming, and financial freedom come together.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {projectFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Explore Properties Button */}
            <motion.button
              onClick={handleExploreProperties}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Our Properties</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
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
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-8">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                  {/* Content in Visual */}
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <UserGroupIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">
                      Sustainable Future
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Join a community that values ecological balance, financial stability, and quality living
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-black text-blue-600">100%</div>
                    <div className="text-sm font-medium text-gray-600">Sustainable</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-black text-purple-600">24/7</div>
                    <div className="text-sm font-medium text-gray-600">Support</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <div className="text-2xl font-black text-pink-600">100+</div>
                    <div className="text-sm font-medium text-gray-600">Plots</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Why Choose This Project?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated agricultural and residential development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Passive income opportunities from farm produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eco-friendly infrastructure and sustainable design</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;