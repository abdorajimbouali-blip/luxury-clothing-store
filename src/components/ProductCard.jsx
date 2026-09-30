import { motion } from 'framer-motion'

export default function ProductCard({ product, onAddToCart, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass-card rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-4 right-4 bg-gold text-noir text-xs font-bold px-3 py-1 rounded-full tracking-wider">
            {product.tag}
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-gold text-noir px-6 py-2.5 text-sm tracking-widest uppercase font-medium rounded-full hover:bg-gold-light transition-colors"
          >
            أضف للسلة
          </motion.button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">{product.category}</p>
        <h3 className="font-serif text-lg text-cream mb-3 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-gold text-xl font-bold">${product.price}</span>
          <span className="text-cream/40 text-sm line-through">${product.oldPrice}</span>
        </div>
      </div>
    </motion.div>
  )
}
