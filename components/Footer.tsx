import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const navigation = {
    product: [
      { name: 'Features', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Cookies', href: '#cookies' }
    ]
  };

  const social = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@ego.dev' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-['Sora']">Ego</span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              Building the future of professional tech solutions. Empowering developers and businesses with cutting-edge tools.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-600 hover:bg-slate-800 transition-all duration-300"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold font-['Sora'] text-sm uppercase tracking-wider mb-6">
                Product
              </h3>
              <ul className="space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold font-['Sora'] text-sm uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold font-['Sora'] text-sm uppercase tracking-wider mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-white font-bold font-['Sora'] text-xl mb-3">
              Stay updated
            </h3>
            <p className="text-slate-400 mb-6">
              Get the latest updates, articles, and resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ego. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#cookies" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
