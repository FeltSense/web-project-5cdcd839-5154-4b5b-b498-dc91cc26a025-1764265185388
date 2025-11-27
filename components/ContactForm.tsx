'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '5cdcd839-5154-4b5b-b498-dc91cc26a025',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-lg text-slate-400">
            Have a project in mind? Get in touch and let's discuss how Ego can transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-slate-500 mb-2">Drop us a line anytime</p>
                    <a href="mailto:hello@ego.tech" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors">
                      hello@ego.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-slate-500 mb-2">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+1234567890" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-slate-500 mb-2">Come say hello</p>
                    <p className="text-slate-700 font-medium">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-1">
                    24h
                  </div>
                  <div className="text-sm text-slate-500">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-slate-500">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-500 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === 'loading'}
                        className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'loading'}
                        className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-700">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
