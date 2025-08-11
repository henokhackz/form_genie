import React from 'react'
import { NeomorphicCard } from './NeomorphicCard'
import { NeomorphicButton } from './NeomorphicButton'
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: 'month',
      description: 'Perfect for small businesses and individuals',
      icon: Sparkles,
      features: [
        '10 AI-generated forms',
        '1,000 responses/month',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'CSV exports'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '79',
      period: 'month',
      description: 'Ideal for growing teams and agencies',
      icon: Zap,
      features: [
        'Unlimited AI forms',
        '10,000 responses/month',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access',
        'Team collaboration',
        'Advanced integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '199',
      period: 'month',
      description: 'For large organizations with advanced needs',
      icon: Crown,
      features: [
        'Unlimited everything',
        'Unlimited responses',
        'White-label solution',
        'Dedicated support',
        'Custom AI training',
        'SLA guarantee',
        'Advanced security',
        'Custom integrations',
        'Training & onboarding'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-neomorphic-bg relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-1/4 w-20 h-20 neomorphic opacity-5 animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-16 h-16 neomorphic opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 neomorphic-small px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-neomorphic-primary" />
            <span className="text-sm font-medium text-neomorphic-text">
              Transparent Pricing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neomorphic-text mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-neomorphic-text-light">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div key={plan.name} className="relative">
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="neomorphic-small px-6 py-2 bg-gradient-to-r from-neomorphic-primary to-neomorphic-accent">
                      <span className="text-white text-sm font-semibold">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <NeomorphicCard 
                  className={`text-center h-full relative ${plan.popular ? 'ring-2 ring-neomorphic-primary/20' : ''}`}
                  variant={plan.popular ? 'default' : 'flat'}
                >
                  {/* Icon */}
                  <div className="neomorphic-small w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-neomorphic-primary" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-neomorphic-text mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neomorphic-text-light mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-semibold text-neomorphic-text">$</span>
                      <span className="text-5xl font-bold text-neomorphic-text">{plan.price}</span>
                      <span className="text-neomorphic-text-light">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="neomorphic-small w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-neomorphic-primary" />
                        </div>
                        <span className="text-neomorphic-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <NeomorphicButton 
                      variant={plan.popular ? 'primary' : 'default'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                    </NeomorphicButton>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 neomorphic-small w-8 h-8 opacity-30"></div>
                  <div className="absolute -top-2 -left-2 neomorphic-small w-6 h-6 opacity-20"></div>
                </NeomorphicCard>
              </div>
            )
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <NeomorphicCard className="max-w-2xl mx-auto p-8 shadow-none hover:shadow-sm">
            <h3 className="text-2xl font-bold text-neomorphic-text mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-neomorphic-text-light mb-6">
              We work with enterprise clients to create tailored AI form solutions that scale with your business needs.
            </p>
            <NeomorphicButton variant="outline" size="lg" className="border-none shadow-none">
              Contact Us
            </NeomorphicButton>
          </NeomorphicCard>
        </div>
      </div>
    </section>
  )
}

export default PricingSection



