import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function FeaturedProducts({ onAddToCart }) {
  return (
    <section id="المجموعة" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">تشكيلتنا</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          القطع <span className="gold-text">الأكثر طلباً</span>
        </h2>
        <p className="text-cream/50 max-w-xl mx-auto">
          مجموعة مختارة بعناية من أرقى التصاميم بأسعار تناسب الجميع
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} index={i} />
        ))}
      </div>
    </section>
  )
}
