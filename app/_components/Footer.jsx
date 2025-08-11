                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import React from 'react'
import { NeomorphicCard } from './NeomorphicCard'
import { NeomorphicButton } from './NeomorphicButton'
import { NeomorphicInput } from './NeomorphicInput'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin,                                                                                                                                                                                                                                             
  Facebook,
  ArrowRight,
  Heart
} from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-neomorphic-bg pt-24 pb-12 px-4 relative">                                                                                                                                                                                                                                                                         
      {/* Newsletter Section */}                                                                                                                                                                                                                                                                                                                                                                    
      <section className="max-w-7xl mx-auto mb-20">
        <NeomorphicCard className="text-center p-12 max-w-4xl mx-auto s">
          <h3 className="text-3xl md:text-4xl font-bold text-neomorphic-text mb-4">                                                                                                                                                                                                                                                                                                 
            Stay Updated
          </h3>
          <p className="text-lg text-neomorphic-text-light mb-8 max-w-2xl mx-auto">
            Get the latest updates on new features, form templates, and AI improvements delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <NeomorphicInput 
              placeholder="Enter your email"
              className="flex-1 shadow-none focus:shadow-none"
            />
            <NeomorphicButton variant="primary" className="sm:w-auto w-full">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </NeomorphicButton>
          </div>
        </NeomorphicCard>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-neomorphic-text mb-4">AI Form Builder</h4>
              <p className="text-neomorphic-text-light leading-relaxed">
                Revolutionizing form creation with AI-powered intelligence. 
                Build, deploy, and analyze forms faster than ever before.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neomorphic-text-light">
                <Mail className="w-5 h-5 text-neomorphic-primary" />
                <span>hello@aiformbuilder.com</span>
              </div>
              <div className="flex items-center gap-3 text-neomorphic-text-light">
                <Phone className="w-5 h-5 text-neomorphic-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-neomorphic-text-light">
                <MapPin className="w-5 h-5 text-neomorphic-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold text-neomorphic-text mb-6">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Templates', 'Analytics', 'Integrations', 'API', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neomorphic-text-light hover:text-neomorphic-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-neomorphic-text mb-6">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Documentation', 'Community', 'Contact Us', 'Status Page', 'Bug Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neomorphic-text-light hover:text-neomorphic-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-neomorphic-text mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neomorphic-text-light hover:text-neomorphic-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neomorphic-text/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-neomorphic-text-light">
              <span>© 2024 AI Form Builder. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in San Francisco</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Facebook, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="neomorphic-small p-3 hover:neomorphic transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-neomorphic-text-light group-hover:text-neomorphic-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 neomorphic opacity-5 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 neomorphic opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
    </footer>
  )
}

export default Footer


