'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles size={16} />
              <span>Next-Gen Development Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6 font-['Sora']"
            >
              Build faster.<br />
              <span className="text-violet-600">Ship smarter.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              The all-in-one development platform that empowers tech teams to build, deploy, and scale modern applications with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View Features
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-emerald-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-400" />
                <span>AI-Powered</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-violet-600/20 rounded-3xl blur-3xl"></div>

            {/* Dashboard Image Container */}
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-slate-900 rounded px-3 py-1 text-xs text-slate-500">
                    ego.dev/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative aspect-[16/10] bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
                  alt="Ego Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-24 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="text-xs text-slate-500 mb-1">Deploy Time</div>
                <div className="text-2xl font-bold text-slate-900">2.4s</div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                  <span>↑</span> 45% faster
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-24 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="text-xs text-slate-500 mb-1">Active Users</div>
                <div className="text-2xl font-bold text-slate-900">24.8K</div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                  <span>↑</span> Live now
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
