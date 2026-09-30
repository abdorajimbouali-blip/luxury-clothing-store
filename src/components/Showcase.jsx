import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1485518882345-15568b0077e3?w=800&q=80"
              alt="Showcase"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 glass-card rounded-lg p-6 text-center hidden sm:block"
          >
            <p className="font-serif text-3xl gold-text font-bold">50%</p>
            <p className="text-cream/60 text-xs tracking-widest uppercase mt-1">خصم يصل</p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-right"
        >
          <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">عرض خاص</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            فخامة تستحقها
            <br />
            <span className="gold-text">بسعر يناسبك</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-8">
            نؤمن بأن الأناقة حق للجميع. لذلك نقدم لكم تشكيلة فاخرة من الأزياء المصممة من خامات
            راقية، بأسعار تجعل التميز في متناول كل من يبحث عن التميز والجودة.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { num: '+5000', label: 'عميل سعيد' },
              { num: '+200', label: 'تصميم حصري' },
              { num: '4.9', label: 'تقييم العملاء' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-2xl md:text-3xl gold-text font-bold">{stat.num}</p>
                <p className="text-cream/40 text-xs tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#المجموعة"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold inline-block"
          >
            اكتشف العرض
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
