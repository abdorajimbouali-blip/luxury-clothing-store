import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product])
    setCartOpen(true)
    setTimeout(() => setCartOpen(false), 2500)
  }, [])

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  const cartTotal = cart.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="min-h-screen bg-noir">
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />

      <Hero />
      <Marquee />
      <FeaturedProducts onAddToCart={addToCart} />
      <Categories />
      <Showcase />
      <Testimonials />
      <Newsletter />
      <Footer />

      {/* Cart drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-noir/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-charcoal z-50 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl text-cream">سلة التسوق</h3>
                <button onClick={() => setCartOpen(false)} className="text-cream/60 hover:text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-cream/40 text-sm">سلتك فارغة</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-3 glass-card rounded-lg p-3"
                      >
                        <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <p className="text-cream text-sm font-medium">{item.name}</p>
                          <p className="text-gold text-sm">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(i)}
                          className="text-cream/40 hover:text-red-400 text-xs"
                        >
                          إزالة
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-gold/10 pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="text-cream/60 text-sm">المجموع</span>
                      <span className="text-gold text-xl font-bold">${cartTotal}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gold text-noir py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
                    >
                      إتمام الشراء
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
