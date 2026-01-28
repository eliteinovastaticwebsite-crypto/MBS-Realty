import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BuildingOfficeIcon,
  TrophyIcon,
  UserGroupIcon,
  HeartIcon,
  MapPinIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  SparklesIcon,
  CheckCircleIcon,
  EyeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import AboutBannerImage from "../assets/AboutBannerImage.avif";
import Services from "../components/Services";

export default function About() {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <TrophyIcon className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      number: " ₹4.2M",
      label: "Property Sold",
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Prime Locations",
      icon: <MapPinIcon className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Integrity First",
      description:
        "We believe in complete transparency and honesty in all our dealings. Your trust is our most valuable asset.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Client Focused",
      description:
        "Your goals and dreams are at the center of everything we do. We listen, understand, and deliver beyond expectations.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for perfection in every transaction and interaction. Good enough is never enough for our clients.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology and innovative strategies to give you a competitive edge in the market.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const team = [
    {
      name: "Mr R. MAHALINGAM",
      role: "Founder & CEO",
      image:
        "tps://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Visionary leader with 15+ years in luxury real estate, transforming the industry with innovative approaches.",
      social: ["LinkedIn", "Twitter"],
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Expert in property valuation and market analysis with a track record of record-breaking deals.",
      social: ["LinkedIn", "Instagram"],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gray-900">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${AboutBannerImage})`,
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
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
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
              Building
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Extraordinary
              </span>
              Legacies
            </motion.h1>

            <motion.p
              className="text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For over 20 years, we've been the architects of dreams,
              transforming real estate visions into extraordinary realities. We
              don't just sell properties; we craft legacies and build
              relationships that transcend generations.
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
                  Meet Our Visionaries
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
                  Our Journey
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About MBS Realty Section - MOBILE OPTIMIZED */}
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
                {/* Background decorative elements - Hidden on mobile */}
                <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
                <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-20"></div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-10"></div>

                {/* Main gradient box - Thinner border on mobile */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 md:p-1 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl w-full">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-16 backdrop-blur-sm w-full">
                    
                    {/* Header Section - Improved mobile layout */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <BuildingOfficeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      
                      <div className="flex-1 w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                          ABOUT MBS REALTY
                        </h2>
                        <div className="h-1.5 md:h-2 w-full sm:w-48 md:w-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 md:mt-4"></div>
                      </div>
                    </div>

                    {/* Experience Tagline - Better mobile spacing */}
                    <div className="mb-8 md:mb-10 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-3 md:mb-4">
                        Experience That Creates Value
                      </h3>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                        Who We Are
                      </h4>
                    </div>

                    {/* Main Content Section - Improved mobile spacing */}
                    <div className="space-y-6 md:space-y-10">
                      
                      {/* Introduction Paragraph - Better mobile padding */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl border border-blue-100/50">
                        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                          For over <span className="font-bold text-blue-600">20+ years</span>, MBS Realty has been shaping high-quality, sustainable real estate by combining deep local expertise with global investment intelligence.
                        </p>
                        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white rounded-lg md:rounded-xl border-l-4 border-purple-500 shadow-sm">
                          <p className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 italic">
                            "Our philosophy is simple: <span className="text-blue-600">Excellence through Quality</span>"
                          </p>
                        </div>
                      </div>

                      {/* Our Legacy of Excellence Section */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-xl md:rounded-2xl border-2 border-indigo-200/50 shadow-lg">
                        <div className="flex items-center gap-3 md:gap-4 mb-6">
                          <div className="bg-indigo-600 text-white p-3 md:p-4 rounded-xl shadow-lg">
                            <BuildingOfficeIcon className="w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                            Our Legacy of Excellence
                          </h3>
                        </div>

                        <div className="space-y-4 md:space-y-5">
                          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                            <span className="font-bold text-gray-900">MBS Realty</span> stands as a premier full-service real estate powerhouse,
                            offering comprehensive solutions in Sales, Investment Opportunities,
                            Market Analysis, Corporate Services, and Property Management across
                            Tamil Nadu.
                          </p>

                          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                            With <span className="text-indigo-600 font-bold text-xl md:text-2xl">20+ years of excellence</span>, we've served diverse clients ranging from
                            individual home seekers to large corporate entities and industrial pioneers.
                            Our success is built on a foundation of trust, expertise, and unwavering
                            commitment to client satisfaction.
                          </p>

                          <div className="bg-white/70 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-indigo-600 shadow-md mt-6">
                            <p className="text-gray-800 text-base sm:text-lg md:text-xl italic mb-3 md:mb-4 leading-relaxed">
                              "Our vision is to redefine real estate experiences through innovation,
                              integrity, and exceptional service that exceeds expectations."
                            </p>
                            <p className="text-indigo-600 font-bold text-lg md:text-xl">
                              — Mr R. MAHALINGAM, Founder & CEO
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Table - Mobile optimized */}
                      <div className="overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 md:p-6">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white text-center">
                            Why Choose MBS Realty
                          </h3>
                          <p className="text-blue-100 text-center mt-1.5 md:mt-2 text-sm sm:text-base">
                            A clear comparison of our strategic approach vs conventional methods
                          </p>
                        </div>
                        
                        {/* Mobile: Card-based layout, Desktop: Table */}
                        
                        {/* Mobile View - Cards */}
                        <div className="block md:hidden divide-y divide-gray-100">
                          {[
                            {
                              aspect: "Approach",
                              mbs: "Advisory-led, strategic",
                              conventional: "Transaction-focused",
                              icon: CheckCircleIcon,
                              color: "blue"
                            },
                            {
                              aspect: "Experience",
                              mbs: "20+ years",
                              conventional: "Limited / fragmented",
                              icon: StarIcon,
                              color: "green"
                            },
                            {
                              aspect: "Transparency",
                              mbs: "End-to-end clarity",
                              conventional: "Often opaque",
                              icon: EyeIcon,
                              color: "purple"
                            },
                            {
                              aspect: "Delivery",
                              mbs: "Time-bound & accountable",
                              conventional: "Delays common",
                              icon: ClockIcon,
                              color: "teal"
                            },
                            {
                              aspect: "Client Focus",
                              mbs: "Long-term value creation",
                              conventional: "Short-term gains",
                              icon: HeartIcon,
                              color: "pink"
                            }
                          ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <div key={idx} className="p-4 bg-white">
                                <div className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                                  <div className={`w-1.5 h-6 bg-${item.color}-500 rounded-full`}></div>
                                  {item.aspect}
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <div className={`inline-flex items-center gap-1.5 bg-${item.color}-100 text-${item.color}-700 px-2.5 py-1.5 rounded-lg text-sm font-bold flex-1`}>
                                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span className="break-words">{item.mbs}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <div className="bg-gray-100 text-gray-600 px-2.5 py-1.5 rounded-lg text-sm flex-1">
                                      {item.conventional}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Desktop View - Table */}
                        <div className="hidden md:block overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-base md:text-lg border-b">
                                  Aspect
                                </th>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-blue-600 text-base md:text-lg border-b">
                                  MBS Realty
                                </th>
                                <th className="py-3 md:py-4 px-4 md:px-6 text-left font-bold text-gray-600 text-base md:text-lg border-b">
                                  Conventional Realtors
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Approach
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6">
                                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-sm">
                                    <CheckCircleIcon className="w-4 h-4" />
                                    Advisory-led, strategic
                                  </span>
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Transaction-focused
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Experience
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6">
                                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
                                    <StarIcon className="w-4 h-4" />
                                    20+ years
                                  </span>
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Limited / fragmented
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Transparency
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6">
                                  <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold text-sm">
                                    <EyeIcon className="w-4 h-4" />
                                    End-to-end clarity
                                  </span>
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Often opaque
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Delivery
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6">
                                  <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-bold text-sm">
                                    <ClockIcon className="w-4 h-4" />
                                    Time-bound & accountable
                                  </span>
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Delays common
                                </td>
                              </tr>
                              <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 md:py-4 px-4 md:px-6 font-semibold text-gray-700 text-sm md:text-base">
                                  Client Focus
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6">
                                  <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold text-sm">
                                    <HeartIcon className="w-4 h-4" />
                                    Long-term value creation
                                  </span>
                                </td>
                                <td className="py-3 md:py-4 px-4 md:px-6 text-gray-600 text-sm md:text-base">
                                  Short-term gains
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Strategic Partner Section - Better mobile padding */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl md:rounded-2xl border border-purple-100/50">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                            <LightBulbIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4">
                              Our Strategic Difference
                            </h4>
                            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                              Unlike conventional real estate brokers, MBS Realty operates as a strategic real estate partner, delivering value through <span className="font-bold text-blue-600">insight</span>, <span className="font-bold text-purple-600">ethics</span>, <span className="font-bold text-teal-600">transparency</span>, and <span className="font-bold text-pink-600">long-term vision</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stats Highlight - Better mobile layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 md:p-6 rounded-xl md:rounded-2xl border border-blue-200 text-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600 mb-1 md:mb-2">20+</div>
                          <div className="text-base md:text-lg font-bold text-gray-800">Years of Excellence</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 md:p-6 rounded-xl md:rounded-2xl border border-purple-200 text-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-purple-600 mb-1 md:mb-2">1000+</div>
                          <div className="text-base md:text-lg font-bold text-gray-800">Clients Served</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 md:p-6 rounded-xl md:rounded-2xl border border-pink-200 text-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-pink-600 mb-1 md:mb-2">100%</div>
                          <div className="text-base md:text-lg font-bold text-gray-800">Client Focus</div>
                        </div>
                      </div>

                    </div>

                    {/* CTA Button - Mobile friendly
                    <motion.button
                      className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-12 mx-auto px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full md:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore Our Journey</span>
                      <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>*/}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our success is powered by a team of passionate experts who bring
              decades of combined experience, innovative thinking, and
              unwavering dedication to every client relationship.
            </p>
          </motion.div>

          {/* Team Members - 2 boxes centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {/* Mr R. MAHALINGAM - Founder & CEO */}
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0 * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
                      {/* Replace with actual image path */}
                      <div className="w-30 h-30 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 object-cover relative z-10 mx-auto border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-3xl font-black text-gray-700">RM</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Mr R. MAHALINGAM
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                      Founder & CEO
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Visionary leader with 15+ years in luxury real estate, transforming the industry with innovative approaches.
                    </p>

                    <div className="flex justify-center gap-4">
                      <motion.button
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        LinkedIn
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Twitter
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Michael Chen - Head of Sales */}
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
                      {/* Replace with actual image path */}
                      <div className="w-30 h-30 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 object-cover relative z-10 mx-auto border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-3xl font-black text-gray-700">MC</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Michael Chen
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                      Head of Sales
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Expert in property valuation and market analysis with a track record of record-breaking deals.
                    </p>

                    <div className="flex justify-center gap-4">
                      <motion.button
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        LinkedIn
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Instagram
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl mb-6">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Our Foundation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Core Values That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Drive Us
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make, every
              relationship we build, and every dream we help achieve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Stats Section Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Original CTA Section Design */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to find your dream property or get the best
              value for your current home.
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