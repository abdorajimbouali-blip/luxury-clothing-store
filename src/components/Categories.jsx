import { motion } from 'framer-motion'
import { categories } from '../data/products'

export default function Categories() {
  return (
    <section id="التصنيفات" className="py-24 px-6 bg-gradient-to-b from-noir to-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">تسوّق حسب الفئة</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            مجموعاتنا <span className="gold-text">المميزة</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="font-serif text-lg md:text-xl text-cream mb-1 group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-cream/50 text-xs tracking-wider">{cat.count}</p>
              </div>
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-lg transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
