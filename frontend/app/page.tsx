'use client'

import { motion } from 'framer-motion'
import { Phone, BarChart3, Users, Zap, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    {
      icon: Phone,
      title: 'Smart Call Routing',
      description: 'Intelligent call distribution with real-time agent availability',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive metrics and performance tracking',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage agents, skills, and team performance',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live call status and agent activity tracking',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-slate-900" />
            </div>
            <span className="text-xl font-bold">GasCall</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link href="/dashboard">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
              Next-Generation Call Center Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Streamline your gas agency operations with intelligent call routing, real-time analytics, and superior customer service management.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex gap-4 justify-center mb-16 flex-wrap"
          >
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="px-8 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-all">
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div 
            variants={itemVariants}
            className="relative h-96 bg-gradient-to-b from-slate-700/50 to-transparent rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Phone className="w-24 h-24 mx-auto text-blue-400 mb-4 animate-pulse" />
                <p className="text-slate-400">Live Dashboard Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-6 bg-slate-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Powerful Features for Your Team
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/80 transition-all group"
                  whileHover={{ translateY: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Starter', 'Professional', 'Enterprise'].map((plan, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`p-8 rounded-xl border transition-all ${
                  idx === 1 
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-400/50 scale-105' 
                    : 'bg-slate-800/50 border-slate-600/50 hover:border-slate-500/50'
                }`}
                whileHover={idx !== 1 ? { translateY: -5 } : {}}
              >
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <p className="text-slate-400 mb-6">Perfect for {plan.toLowerCase()} teams</p>
                
                <div className="text-4xl font-bold mb-6">
                  ${idx === 0 ? '29' : idx === 1 ? '99' : '299'}
                  <span className="text-lg text-slate-400">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-green-400" />
                      Feature {i}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-2 rounded-lg font-semibold transition-all ${
                  idx === 1
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 hover:shadow-lg hover:shadow-blue-500/50'
                    : 'border border-slate-600 text-white hover:bg-slate-700'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-slate-700/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Call Center?
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join hundreds of agencies using GasCall to improve operations and customer satisfaction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Start Your Free Trial
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 GasCall. All rights reserved. Modern Communication Platform.</p>
        </div>
      </footer>
    </main>
  )
}
