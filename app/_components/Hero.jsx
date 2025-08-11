import { AtomIcon, Edit, Share2, Sparkles, ArrowRight, Users, BarChart, Zap } from 'lucide-react'
import React from 'react'
import { Testmonials } from './testmonials'

function Hero() {
  return (
    <main id="main-content" className="min-h-screen bg-[url('/grid.svg')] relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 neomorphic-small px-6 py-3 mb-8 animate-float">
              <Sparkles className="w-5 h-5 text-neomorphic-primary" />
              <span className="text-sm font-medium text-neomorphic-text">
                AI-Powered Form Generation
              </span>
              <div className="w-2 h-2 bg-neomorphic-primary rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-neomorphic-text">Create Stunning</span>
              <br />
              <span className="text-gradient">Forms in Seconds</span>
              <br />
              <span className="text-neomorphic-text-light line-through line-clamp-2 text-2xl md:text-3xl lg:text-4xl font-medium">
                Not Hours
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-neomorphic-text-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Generate, customize, and deploy professional forms with AI assistance. 
              Get instant insights, beautiful analytics, and seamless responses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="neomorphic-btn-primary flex items-center gap-3 text-lg px-8 py-4 group">
                <Zap className="w-5 h-5" />
                Create AI Form
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="neomorphic-btn flex items-center gap-3 text-lg px-8 py-4">
                <Users className="w-5 h-5" />
                View Examples
              </button>
            </div>
            {/* testmonials */}
            <Testmonials />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="neomorphic-card text-center">
                <div className="text-3xl font-bold text-neomorphic-primary mb-2">10,000+</div>
                <div className="text-neomorphic-text-light">Forms Created</div>
              </div>
              <div className="neomorphic-card text-center">
                <div className="text-3xl font-bold text-neomorphic-primary mb-2">50M+</div>
                <div className="text-neomorphic-text-light">Responses Collected</div>
              </div>
              <div className="neomorphic-card text-center">
                <div className="text-3xl font-bold text-neomorphic-primary mb-2">99.9%</div>
                <div className="text-neomorphic-text-light">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 neomorphic opacity-10 animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 neomorphic opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-40 right-10 w-16 h-16 neomorphic opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
    </main>
  )
}

export default Hero