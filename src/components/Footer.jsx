export default function Footer() {
  const sections = [
    { title: 'المتجر', links: ['الجديد', 'الأكثر مبيعاً', 'العروض', 'المجموعات'] },
    { title: 'المساعدة', links: ['الشحن والتوصيل', 'الإرجاع', 'دليل المقاسات', 'الأسئلة الشائعة'] },
    { title: 'الشركة', links: ['من نحن', 'تواصل معنا', 'الوظائف', 'الشروط والأحكام'] },
  ]

  const socials = ['Instagram', 'Facebook', 'Twitter', 'Pinterest']

  return (
    <footer className="bg-charcoal border-t border-gold/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl gold-text font-bold mb-4">ÉLÉGANCE</h3>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              وجهتك الأولى للأزياء الفاخرة بأسعار معقولة. أناقة لا تُضاهى لكل من يستحق التميز.
            </p>
          </div>

          {/* Link sections */}
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-gold text-sm tracking-widest uppercase mb-4">{sec.title}</h4>
              <ul className="space-y-2">
                {sec.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream/50 text-sm hover:text-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gold/10">
          <p className="text-cream/40 text-xs tracking-wider">
            © 2026 ÉLÉGANCE. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-cream/40 text-xs hover:text-gold transition-colors tracking-wider"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
