import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const VALUES = [
  {
    no: '01', title: 'Profesional',
    desc: 'Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi dalam setiap aspek kerja.',
    icon: '🎯',
  },
  {
    no: '02', title: 'HSSE',
    desc: 'Fokus pada keselamatan kerja, keselamatan proses, kesehatan, keamanan, dan lingkungan dalam setiap aktivitas operasional.',
    icon: '🛡️',
  },
  {
    no: '03', title: 'Tata Kelola Perusahaan',
    desc: 'Menerapkan prinsip-prinsip Good Corporate Governance (GCG) yang transparan, akuntabel, dan bertanggung jawab.',
    icon: '⚖️',
  },
  {
    no: '04', title: 'Achieve Profit',
    desc: 'Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan bagi Pemegang Saham dan Pemangku Kepentingan.',
    icon: '📊',
  },
  {
    no: '05', title: 'Kepuasan Pelanggan',
    desc: 'Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan prima dan produk berkualitas tinggi.',
    icon: '🤝',
  },
  {
    no: '06', title: 'Budaya AKHLAK',
    desc: 'Menerapkan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif dalam setiap interaksi organisasi.',
    icon: '🌟',
  },
];

const HSSE_RULES = ['Patuh', 'Peduli', 'Intervensi'];

const RULES = [
  'Peralatan & Perlengkapan', 'Posisi Zona Aman', 'Izin Kerja (SIKA)',
  'Isolasi', 'Ruang Terbatas', 'Operasional Lifting',
  'Bekerja di Ketinggian', 'Pelampung Pribadi', 'Sistem Override',
  'Integritas Aset', 'Ekskavasi', 'Keselamatan Berkendara', 'Fit to Work',
];

export default function WhyUs() {
  const ref = useScrollAnimationMultiple();

  return (
    <section id="kenapa" className="py-24 lg:py-32 bg-psg-navy relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-psg-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-psg-red/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue/80" />
        <div className="flex-1 bg-psg-green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="anim">
            <span className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-[0.15em] mb-3">
              <span className="w-8 h-px bg-psg-red rounded-full" />
              Nilai & Keunggulan
              <span className="w-8 h-px bg-psg-red rounded-full" />
            </span>
          </div>
          <h2 className="anim text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ transitionDelay: '80ms' }}>
            Tata Nilai Perseroan
          </h2>
          <p className="anim text-blue-200 max-w-xl mx-auto text-base leading-relaxed" style={{ transitionDelay: '140ms' }}>
            Dengan tata nilai AKHLAK, budaya HSSE, dan rekam jejak operasional yang kuat —
            PT Perta-Samtan Gas menjadi mitra energi terpercaya bagi Indonesia.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {VALUES.map((v, i) => (
            <div
              key={v.no}
              className="anim group rounded-xl border border-white/10 bg-white/6 hover:bg-white/12 p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-psg-blue/40 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.15em] mb-0.5">{v.no}</div>
                  <h3 className="font-bold text-white text-base leading-tight">{v.title}</h3>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mt-4">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* HSSE section */}
        <div className="anim rounded-2xl border border-white/15 overflow-hidden" style={{ transitionDelay: '450ms' }}>
          {/* Header */}
          <div className="bg-psg-red/90 px-7 py-5 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-[10px] font-bold text-red-200 uppercase tracking-[0.15em] mb-1">Budaya Keselamatan</div>
              <div className="text-white font-bold text-base">HSSE Golden Rules & Life Saving Rules</div>
            </div>
            <div className="flex gap-4 ml-auto">
              {HSSE_RULES.map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-white font-semibold text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 13 rules grid */}
          <div className="bg-white/6 px-7 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {RULES.map((r, i) => (
                <div key={r} className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2.5">
                  <span className="text-blue-300 text-[10px] font-black w-4 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-blue-100 text-[11px] font-medium leading-snug">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
