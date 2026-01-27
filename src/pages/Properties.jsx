import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BuildingOfficeIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import PropertiesBannerImage from "../assets/AboutBannerImage.avif"; // You can replace with properties-specific image

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

      {/* MBS Ecosystem Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="relative w-full">
                {/* Background decorative elements */}
                <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
                <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-20"></div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-10"></div>

                {/* Main gradient box */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 md:p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl w-full">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-16 backdrop-blur-sm w-full">
                    
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <BuildingOfficeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="flex-1 w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                          THE MBS ECOSYSTEM
                        </h2>
                        <div className="h-1.5 md:h-2 w-full sm:w-48 md:w-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 md:mt-4"></div>
                      </div>
                    </div>

                    {/* Success Through Partnership */}
                    <div className="mb-8 md:mb-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4 italic">
                        Success Through Partnership
                      </h3>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 md:space-y-10">
                      
                      {/* What Is the MBS Ecosystem */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl border border-blue-100/50">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4">
                          What Is the MBS Ecosystem?
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                          The <span className="font-bold">MBS Ecosystem</span> is not a slogan — it is our <span className="font-bold">competitive advantage</span>.
                        </p>
                        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                          It is the intelligence created from the continuous interaction between:
                        </p>
                        <ul className="space-y-2 ml-6">
                          <li className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
                            Strategic assets
                          </li>
                          <li className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
                            Operating platforms
                          </li>
                          <li className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
                            Global partnerships
                          </li>
                          <li className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed list-disc">
                            Market intelligence
                          </li>
                        </ul>
                      </div>

                      {/* Ecosystem Benefits */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl md:rounded-2xl border border-purple-100/50">
                        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                          This ecosystem allows us to <span className="font-bold">identify opportunities faster</span>, <span className="font-bold">evaluate risks better</span>, and <span className="font-bold">execute with precision</span>.
                        </p>
                      </div>

                      {/* Comparison Table */}
                      <div className="overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 md:p-6">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white text-center">
                            MBS Ecosystem vs Traditional Real Estate Models
                          </h3>
                        </div>
                        
                        {/* Desktop View - Table */}
                        <div className="hidden md:block overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-base md:text-lg border-b">
                                  Element
                                </th>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-base md:text-lg border-b">
                                  MBS Ecosystem
                                </th>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-base md:text-lg border-b">
                                  Traditional Model
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Decision Making
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-800 text-sm md:text-base">
                                  Data + insight driven
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Price driven
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Opportunity Sourcing
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-800 text-sm md:text-base">
                                  Proactive & global
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Reactive & local
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Risk Management
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-800 text-sm md:text-base">
                                  Structured & layered
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Ad-hoc
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Partnerships
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-800 text-sm md:text-base">
                                  Long-term alliances
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  One-time transactions
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Mobile View - Cards */}
                        <div className="block md:hidden divide-y divide-gray-100">
                          {[
                            {
                              element: "Decision Making",
                              mbs: "Data + insight driven",
                              traditional: "Price driven",
                            },
                            {
                              element: "Opportunity Sourcing",
                              mbs: "Proactive & global",
                              traditional: "Reactive & local",
                            },
                            {
                              element: "Risk Management",
                              mbs: "Structured & layered",
                              traditional: "Ad-hoc",
                            },
                            {
                              element: "Partnerships",
                              mbs: "Long-term alliances",
                              traditional: "One-time transactions",
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-white">
                              <div className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                                <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                                {item.element}
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <div className="bg-blue-50 text-gray-800 px-2.5 py-1.5 rounded-lg text-sm font-semibold flex-1">
                                    MBS: {item.mbs}
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="bg-gray-100 text-gray-600 px-2.5 py-1.5 rounded-lg text-sm flex-1">
                                    Traditional: {item.traditional}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Core Benefits */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl border border-blue-100/50">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-6">
                          Core Benefits of the MBS Ecosystem
                        </h4>
                        
                        <div className="space-y-6">
                          {/* Clarity */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                              <LightBulbIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2">
                                Clarity
                              </h5>
                              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                We see opportunities early and act with confidence.
                              </p>
                            </div>
                          </div>

                          {/* Precision */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                              <ChartBarIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2">
                                Precision
                              </h5>
                              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Strategic intelligence sharpens every decision.
                              </p>
                            </div>
                          </div>

                          {/* Cultivation */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                              <RocketLaunchIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2">
                                Cultivation
                              </h5>
                              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Relationships don't just support deals — they create them.
                              </p>
                            </div>
                          </div>

                          {/* Scale */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                              <GlobeAltIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2">
                                Scale
                              </h5>
                              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Global networks unlock larger, smarter opportunities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
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