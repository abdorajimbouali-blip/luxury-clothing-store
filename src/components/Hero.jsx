import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="الرئيسية" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-noir/60" />
      </motion.div>

      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-40 h-40 rounded-full border border-gold/20 z-0"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full border border-gold/10 z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gold tracking-[0.4em] text-sm mb-6 uppercase"
        >
          مجموعة خريف 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance"
        >
          أناقة لا تُضاهى
          <br />
          <span className="gold-text">بأسعار في المتناول</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-cream/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
        >
          اكتشف مجموعتنا الحصرية من الأزياء الفاخرة المصممة بعناية، حيث يلتقي الفخامة بالقيمة
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#المجموعة"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold"
          >
            تسوّق الآن
          </motion.a>
          <motion.a
            href="#التصنيفات"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-cream/80 tracking-widest text-sm uppercase border border-cream/20 hover:border-cream/50 transition-all duration-500 cursor-pointer"
          >
            استكشف المجموعات
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
