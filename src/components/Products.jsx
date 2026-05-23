import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const EXCELLENCE_ICONS = ['📈', '🌏', '🔬', '🤝'];

/** Return a Tailwind grid class that centres items when count is small */
function productGridClass(count) {
  if (count === 1) return 'grid grid-cols-1 gap-6 mb-10 max-w-md mx-auto';
  if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10';
}

function excellenceGridClass(count) {
  if (count === 1) return 'grid grid-cols-1';
  if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-psg-border';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-psg-border';
}

export default function Products() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const prodT = t('products');
  const EXCELLENCE = prodT.excellence.map((e, i) => ({
    ...e,
    icon: EXCELLENCE_ICONS[i] ?? '✨',
  }));
  const PRODUCTS = prodT.items;
  const pCount = PRODUCTS.length;
  const eCount = EXCELLENCE.length;

  return (
    <section id="produk" className="py-12 lg:py-16 section-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="anim"><span className="section-label">{prodT.eyebrow}</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>{prodT.heading}</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            {prodT.sub}
          </p>
        </div>

        {/* Product cards — responsive: centres when fewer items */}
        <div className={productGridClass(pCount)}>
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className="anim group bg-white rounded-2xl border border-psg-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`h-1 w-full bg-${p.color}`} />
              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-3xl">{p.icon}</span>
                    <div className={`text-[10px] font-black text-${p.color} uppercase tracking-[0.15em] mt-2`}>{p.no}</div>
                  </div>
                  <span className={`badge-${p.color === 'psg-red' ? 'red' : p.color === 'psg-blue' ? 'blue' : 'green'} text-xs`}>
                    {p.stat}
                  </span>
                </div>
                <h3 className={`font-extrabold text-xl text-${p.color} mb-0.5`}>{p.title}</h3>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">{p.sub}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Excellence — hides entirely if no items */}
        {eCount > 0 && (
          <div className="anim rounded-2xl bg-white border border-psg-border shadow-card overflow-hidden" style={{ transitionDelay: '380ms' }}>
            <div className="px-8 py-6 border-b border-psg-border flex items-center gap-3">
              <div className="w-1 h-6 bg-psg-red rounded-full" />
              <h3 className="font-bold text-psg-navy text-lg">{prodT.excellenceHeading}</h3>
            </div>
            <div className={excellenceGridClass(eCount)}>
              {EXCELLENCE.map((e, i) => (
                <div
                  key={i}
                  className="anim p-6 hover:bg-psg-light transition-colors"
                  style={{ transitionDelay: `${(i + 4) * 80}ms` }}
                >
                  <div className="text-2xl mb-3">{e.icon}</div>
                  <h4 className="font-bold text-psg-navy text-sm mb-2">{e.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
