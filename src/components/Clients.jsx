import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const PARTNERS = [
  { name: 'Pertamina Gas', abbr: 'PGN', color: 'text-psg-red', border: 'border-psg-red/30', bg: 'bg-red-50' },
  { name: 'Pertamina Hulu Rokan', abbr: 'PHR', color: 'text-psg-blue', border: 'border-psg-blue/30', bg: 'bg-blue-50' },
  { name: 'Pertamina Patra Niaga', abbr: 'PPN', color: 'text-psg-red', border: 'border-psg-red/30', bg: 'bg-red-50' },
  { name: 'Pertagas', abbr: 'PGS', color: 'text-psg-blue', border: 'border-psg-blue/30', bg: 'bg-blue-50' },
  { name: 'ST International', abbr: 'STI', color: 'text-[#6b7a19]', border: 'border-psg-green/30', bg: 'bg-green-50' },
  { name: 'Pertamina RU III', abbr: 'RUIII', color: 'text-psg-red', border: 'border-psg-red/30', bg: 'bg-red-50' },
  { name: 'Depot Pulau Layang', abbr: 'DPL', color: 'text-psg-blue', border: 'border-psg-blue/30', bg: 'bg-blue-50' },
  { name: 'Kementerian ESDM', abbr: 'ESDM', color: 'text-psg-navy', border: 'border-gray-200', bg: 'bg-gray-50' },
];

const AWARDS = [
  {
    title: 'Proper Hijau',
    org: 'Kementerian LHK RI',
    desc: 'Penghargaan lingkungan tertinggi atas komitmen pengelolaan lingkungan yang unggul.',
    icon: '🌿', accent: 'border-t-psg-green',
  },
  {
    title: 'Patra Nirbaya Karya Madya',
    org: 'Kementerian ESDM RI',
    desc: 'Penghargaan Keselamatan Kerja kategori Jam Kerja Aman — bukti budaya HSSE yang konsisten.',
    icon: '🛡️', accent: 'border-t-psg-blue',
  },
  {
    title: '1 Juta Ton LPG',
    org: 'Pencapaian Operasional',
    desc: 'Produksi kumulatif 1 juta ton LPG sejak fase komersial hingga Oktober 2018.',
    icon: '🏆', accent: 'border-t-psg-red',
  },
];

export default function Clients() {
  const ref = useScrollAnimationMultiple();

  return (
    <section id="pelanggan" className="py-24 lg:py-32 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="anim"><span className="section-label">Ekosistem & Mitra</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>Bagian dari Ekosistem Pertamina</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            PT Perta-Samtan Gas beroperasi sebagai bagian integral rantai nilai energi Pertamina,
            bekerja sama erat dengan berbagai entitas strategis nasional.
          </p>
        </div>

        {/* Partner logos */}
        <div className="anim grid grid-cols-4 sm:grid-cols-8 gap-3 mb-16" style={{ transitionDelay: '180ms' }}>
          {PARTNERS.map((p) => (
            <div key={p.name} title={p.name} className="flex flex-col items-center gap-2 group">
              <div className={`w-14 h-14 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center font-extrabold text-xs ${p.color} group-hover:shadow-md group-hover:scale-105 transition-all duration-200`}>
                {p.abbr}
              </div>
              <span className="text-[9px] text-gray-400 text-center leading-tight hidden sm:block">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mb-14">
          <h3 className="anim text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-8">
            Penghargaan & Pengakuan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {AWARDS.map((a, i) => (
              <div
                key={a.title}
                className={`anim card p-7 border-t-4 ${a.accent} text-center hover:-translate-y-1.5`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h4 className="font-extrabold text-psg-navy text-base mb-1">{a.title}</h4>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">{a.org}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shareholder breakdown */}
        <div className="anim bg-psg-light rounded-2xl border border-psg-border p-8" style={{ transitionDelay: '360ms' }}>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Komposisi Pemegang Saham</span>
          </div>
          <div className="max-w-md mx-auto">
            {/* Bar */}
            <div className="flex h-4 rounded-full overflow-hidden mb-5 shadow-inner bg-gray-200">
              <div className="bg-psg-red h-full" style={{ width: '66%' }} />
              <div className="bg-psg-green h-full" style={{ width: '34%' }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'PT Pertamina Gas', pct: '66%', color: 'bg-psg-red', text: 'text-psg-red' },
                { name: 'ST International', pct: '34%', color: 'bg-psg-green', text: 'text-[#6b7a19]' },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-sm ${s.color} flex-shrink-0`} />
                  <div>
                    <div className={`font-extrabold ${s.text} text-xl`}>{s.pct}</div>
                    <div className="text-xs text-gray-500">{s.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
