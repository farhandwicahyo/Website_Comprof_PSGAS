import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';

const EXCELLENCE = [
  {
    title: 'Keunggulan Operasional',
    desc: 'Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.',
    icon: '📈',
  },
  {
    title: 'Kondisi Keuangan Stabil',
    desc: 'Posisi keuangan kuat tanpa beban utang finansial, dengan manajemen arus kas efektif untuk peluang investasi masa depan.',
    icon: '🏦',
  },
  {
    title: 'Kemitraan Strategis',
    desc: 'Kemitraan strategis dengan Pemerintah Indonesia dalam produksi LPG domestik (PSO), memperkuat posisi dan kapabilitas Perseroan.',
    icon: '🤝',
  },
  {
    title: 'Peluang Bisnis Beragam',
    desc: 'Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.',
    icon: '🌏',
  },
];

export default function Products() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const PRODUCTS = content.products;

  return (
    <section id="produk" className="py-24 lg:py-32 section-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="anim"><span className="section-label">Output Produksi</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>Produk Utama Perusahaan</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            Hasil olahan gas alam dari dua kilang terintegrasi yang mendukung program energi dan PSO nasional.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.no}
              className="anim group bg-white rounded-2xl border border-psg-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Color top bar */}
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

        {/* Excellence section */}
        <div className="anim rounded-2xl bg-white border border-psg-border shadow-card overflow-hidden" style={{ transitionDelay: '380ms' }}>
          <div className="px-8 py-6 border-b border-psg-border flex items-center gap-3">
            <div className="w-1 h-6 bg-psg-red rounded-full" />
            <h3 className="font-bold text-psg-navy text-lg">Keunggulan Perseroan</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-psg-border">
            {EXCELLENCE.map((e, i) => (
              <div
                key={e.title}
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

      </div>
    </section>
  );
}
