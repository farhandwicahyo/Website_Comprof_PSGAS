import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';

const COLORS = [
  { color: 'text-psg-red', ring: 'ring-psg-red/30', bg: 'bg-red-50' },
  { color: 'text-psg-blue', ring: 'ring-psg-blue/30', bg: 'bg-blue-50' },
  { color: 'text-[#6b7a19]', ring: 'ring-psg-green/30', bg: 'bg-green-50' },
  { color: 'text-psg-blue', ring: 'ring-psg-blue/30', bg: 'bg-blue-50' },
  { color: 'text-psg-red', ring: 'ring-psg-red/30', bg: 'bg-red-50' },
];

export default function Process() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const STEPS = content.process.map((s, i) => ({ ...s, ...COLORS[i % COLORS.length] }));

  return (
    <section id="proses" className="py-24 lg:py-32 section-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="anim"><span className="section-label">Alur Produksi</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>Proses Bisnis Utama</h2>
          <p className="anim section-sub" style={{ transitionDelay: '140ms' }}>
            Dari sumber gas bumi Pertamina Hulu Rokan hingga LPG siap distribusi —
            melewati dua kilang terintegrasi di Sumatera Selatan.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector */}
          <div className="hidden lg:block absolute top-11 left-[calc(10%+52px)] right-[calc(10%+52px)] h-px bg-gradient-to-r from-psg-red/30 via-psg-blue/40 to-psg-red/30" />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 lg:gap-4">
            {STEPS.map((s, i) => (
              <div
                key={s.no}
                className="anim flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Circle node */}
                <div className={`w-[88px] h-[88px] rounded-full bg-white ring-4 ${s.ring} shadow-md flex flex-col items-center justify-center mb-4 relative z-10 group-hover:scale-105 transition-transform`}>
                  <span className="text-xl leading-none">{s.icon}</span>
                  <span className={`text-[10px] font-black ${s.color} mt-0.5`}>{s.no}</span>
                </div>
                {/* Meta badge */}
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3 ${s.bg} ${s.color}`}>
                  {s.meta}
                </span>
                <h3 className={`font-bold text-sm mb-2 text-psg-navy group-hover:${s.color} transition-colors`}>{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Output summary */}
        <div className="anim mt-16 rounded-2xl overflow-hidden shadow-section" style={{ transitionDelay: '550ms' }}>
          <div className="bg-psg-navy px-8 py-5 flex items-center gap-3">
            <div className="w-2 h-6 bg-psg-red rounded-full" />
            <span className="text-white font-bold text-base">Output Produksi</span>
            <span className="text-blue-300 text-sm ml-1">— Kapasitas Kilang PT Perta-Samtan Gas</span>
          </div>
          <div className="bg-white grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
            {[
              { val: '250 MMSCFD', label: 'Kapasitas Desain', sub: 'Total kedua kilang' },
              { val: '710 MT/Hari', label: 'Produksi LPG', sub: 'Propane + Butane', accent: true },
              { val: '2.200 bbl/Hari', label: 'Produksi Kondensat', sub: 'Pentane+' },
              { val: '±200 mmscfd', label: 'Feed Gas Rata-rata', sub: 'Dari PHR Zona 4' },
            ].map((item) => (
              <div key={item.label} className={`px-6 py-5 ${item.accent ? 'bg-psg-light' : ''}`}>
                <div className={`text-2xl font-extrabold mb-1 ${item.accent ? 'text-psg-blue' : 'text-psg-navy'}`}>{item.val}</div>
                <div className="text-xs font-bold text-gray-600">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
