import { motion } from 'framer-motion'
import { testimonials } from '../data/products'

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">آراء عملائنا</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            ماذا قال <span className="gold-text">عملاؤنا</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-lg p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-gold text-lg">★</span>
                ))}
              </div>

              <p className="text-cream/70 leading-relaxed mb-6 text-sm md:text-base">"{t.text}"</p>

              <div className="flex items-center justify-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
                />
                <div className="text-right">
                  <p className="text-cream font-medium text-sm">{t.name}</p>
                  <p className="text-gold/60 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
