'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote: "Ego transformed how our team collaborates. The interface is intuitive and the performance is exceptional. Best decision we made this year."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "VP Engineering at DataCore",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      quote: "We've tried dozens of platforms. Ego stands out with its elegant design and powerful features. Our productivity increased by 40% in just weeks."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Lead at InnovateLabs",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      quote: "The attention to detail is remarkable. Ego feels like it was built specifically for our workflow. Support team is incredibly responsive too."
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See what top tech professionals are saying about Ego
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-emerald-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
