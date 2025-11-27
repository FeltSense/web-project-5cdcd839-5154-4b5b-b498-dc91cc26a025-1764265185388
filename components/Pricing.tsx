'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    'Unlimited photo ratings',
    'Advanced analytics dashboard',
    'Custom profile themes',
    'Priority support',
    'Ad-free experience',
    'Early access to new features'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Get lifetime access to Ego. One payment, unlimited possibilities.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
            aria-label="Toggle pricing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-violet-600 rounded-full transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 px-3 py-1 bg-emerald-400 text-white text-xs font-semibold rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            {/* Card Header */}
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                Pro Access
              </h3>
              <p className="text-slate-500 mb-6">
                Everything you need to dominate
              </p>
              
              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    ${isYearly ? '23' : '29'}
                  </span>
                  <span className="text-slate-500 text-lg">
                    /{isYearly ? 'month' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-slate-500 mt-2">
                    Billed annually at $276/year
                  </p>
                )}
              </div>

              {/* Stripe Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Pre-Order Now - ${isYearly ? '276' : '29'}
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-violet-600" />
                  </div>
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                30-day money-back guarantee. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">Trusted by 10,000+ users worldwide</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-slate-600">Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-slate-600">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-slate-600">Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </span>);
}
