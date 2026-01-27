import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurFlagship from "../components/OurFlagship";
import {
  BuildingOfficeIcon,
  StarIcon,
  UsersIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChartPieIcon,
  // Remove HandshakeIcon - it doesn't exist in outline
} from "@heroicons/react/24/outline";
import PropertiesBannerImage from "../assets/AboutBannerImage.avif";

export default function Properties() {
  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gray-900">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${PropertiesBannerImage})`,
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The MBS
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Ecosystem
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Discover extraordinary luxury properties in the world's most
              exclusive and desirable locations
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Properties
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>

              <motion.button
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-3">
                  Learn More
                  <SparklesIcon className="w-5 h-5 text-yellow-400" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <OurFlagship />
      
      {/* MBS Ecosystem Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Main Information */}
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
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-200 px-4 py-2 rounded-full mb-8"
                >
                  <StarIcon className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold text-sm">Competitive Advantage</span>
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  THE MBS ECOSYSTEM
                </motion.h2>

                {/* Success Through Partnership */}
                <motion.h3
                  className="text-2xl md:text-3xl font-black text-blue-600 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Success Through Partnership
                </motion.h3>

                <motion.div
                  className="space-y-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* What is MBS Ecosystem */}
                  <div className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50">
                    <h4 className="text-2xl font-black text-gray-900 mb-4">
                      What Is the MBS Ecosystem?
                    </h4>
                    <p className="text-gray-800 text-lg leading-relaxed mb-4">
                      The <span className="font-bold text-blue-600">MBS Ecosystem</span> is not a slogan — it is our <span className="font-bold text-purple-600">competitive advantage</span>.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed mb-6">
                      It is the intelligence created from the continuous interaction between:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Strategic assets</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Operating platforms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Global partnerships</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Market intelligence</span>
                      </div>
                    </div>
                  </div>

                  {/* Ecosystem Benefits */}
                  <div className="p-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-100/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ChartBarIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-black text-gray-900 mb-3">
                          Ecosystem Benefits
                        </h4>
                        <p className="text-gray-800 text-lg leading-relaxed">
                          This ecosystem allows us to <span className="font-bold text-blue-600">identify opportunities faster</span>,{' '}
                          <span className="font-bold text-purple-600">evaluate risks better</span>, and{' '}
                          <span className="font-bold text-pink-600">execute with precision</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Benefits Summary */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
                      <div className="text-2xl font-black text-blue-600 mb-1">Data-Driven</div>
                      <div className="text-xs font-bold text-gray-800">Decision Making</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
                      <div className="text-2xl font-black text-purple-600 mb-1">Global</div>
                      <div className="text-xs font-bold text-gray-800">Opportunity Sourcing</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 text-center">
                      <div className="text-2xl font-black text-green-600 mb-1">Structured</div>
                      <div className="text-xs font-bold text-gray-800">Risk Management</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200 text-center">
                      <div className="text-2xl font-black text-pink-600 mb-1">Long-Term</div>
                      <div className="text-xs font-bold text-gray-800">Partnerships</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Visual Card */}
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
                    {/* Ecosystem Visualization */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden flex items-center justify-center mb-6">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Central Node */}
                        <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl z-10">
                          <BuildingOfficeIcon className="w-16 h-16 text-white" />
                        </div>
                        
                        {/* Connecting Lines */}
                        <div className="absolute inset-0">
                          <div className="absolute top-1/4 left-1/2 w-32 h-1 bg-blue-300 transform -translate-y-1/2 rotate-45"></div>
                          <div className="absolute top-1/2 right-1/4 w-32 h-1 bg-purple-300 transform -translate-y-1/2"></div>
                          <div className="absolute bottom-1/4 left-1/2 w-32 h-1 bg-pink-300 transform -translate-y-1/2 rotate-135"></div>
                          <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-cyan-300 transform -translate-y-1/2 rotate-180"></div>
                        </div>

                        {/* Satellite Nodes - Updated with UsersIcon instead of HandshakeIcon */}
                        {[
                          { top: "20%", left: "30%", icon: UsersIcon, color: "blue", label: "Assets" },
                          { top: "20%", left: "70%", icon: ShieldCheckIcon, color: "purple", label: "Platforms" },
                          { top: "70%", left: "70%", icon: ChartPieIcon, color: "pink", label: "Partnerships" },
                          { top: "70%", left: "30%", icon: UsersIcon, color: "cyan", label: "Intelligence" } // Changed from HandshakeIcon to UsersIcon
                        ].map((node, index) => (
                          <motion.div
                            key={index}
                            className={`absolute w-16 h-16 bg-gradient-to-r from-${node.color}-500 to-${node.color}-600 rounded-full flex flex-col items-center justify-center shadow-lg`}
                            style={{ top: node.top, left: node.left }}
                            animate={{
                              scale: [1, 1.1, 1],
                              y: [0, -5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          >
                            <node.icon className="w-8 h-8 text-white mb-1" />
                            <span className="text-xs font-bold text-white">{node.label}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Floating Labels */}
                      <motion.div
                        className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm font-bold text-gray-800">Strategic Network</span>
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm font-bold">Global Reach</span>
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm font-bold">Continuous Intelligence</span>
                      </motion.div>
                    </div>
                    
                    {/* Core Benefits */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">Core Benefits</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* Clarity */}
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <LightBulbIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900">Clarity</h5>
                            <p className="text-xs text-gray-600">See opportunities early</p>
                          </div>
                        </div>

                        {/* Precision */}
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ChartBarIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900">Precision</h5>
                            <p className="text-xs text-gray-600">Sharp strategic decisions</p>
                          </div>
                        </div>

                        {/* Cultivation */}
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <RocketLaunchIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900">Cultivation</h5>
                            <p className="text-xs text-gray-600">Create deals from relationships</p>
                          </div>
                        </div>

                        {/* Scale */}
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GlobeAltIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900">Scale</h5>
                            <p className="text-xs text-gray-600">Global network opportunities</p>
                          </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the MBS Ecosystem?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join us in redefining real estate excellence through strategic partnerships and intelligent insights.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}