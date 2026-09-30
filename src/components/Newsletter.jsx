import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="تواصل معنا" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">انضم إلينا</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          اشترك في <span className="gold-text">نشرتنا</span>
        </h2>
        <p className="text-cream/60 mb-8">
          كن أول من يعرف عن العروض الحصرية والتشكيلات الجديدة
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="بريدك الإلكتروني"
            required
            className="flex-1 bg-white/5 border border-gold/20 rounded-full px-6 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 transition-colors text-sm"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-noir px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors cursor-pointer"
          >
            اشترك
          </motion.button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-gold mt-4 text-sm"
            >
              ✦ شكراً لاشتراكك! ✦
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
