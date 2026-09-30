export default function Marquee() {
  const items = ['شحن مجاني', 'إرجاع خلال 30 يوم', 'خامات فاخرة', 'أسعار معقولة', 'تصاميم حصرية', 'دفع آمن']
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className="bg-gold/5 border-y border-gold/10 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-gold/80 text-sm tracking-widest uppercase font-light">{item}</span>
            <span className="text-gold/30">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
