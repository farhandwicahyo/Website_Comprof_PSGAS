import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';

const ACCENTS = ['bg-psg-red', 'bg-psg-blue', 'bg-[#6b7a19]', 'bg-psg-navy'];

export default function Facilities() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const FACILITIES = content.facilities.map((f, i) => ({
    ...f,
    specs: [[f.spec1k, f.spec1v], [f.spec2k, f.spec2v], [f.spec3k, f.spec3v]],
    accent: ACCENTS[i % ACCENTS.length],
  }));

  return (
    <section id="fasilitas" className="py-24 lg:py-32 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="anim"><span className="section-label">Area Operasi</span></div>
            <h2 className="anim section-heading" style={{ transitionDelay: '80ms' }}>Fasilitas Operasional</h2>
          </div>
          <p className="anim text-gray-400 text-sm max-w-xs leading-relaxed" style={{ transitionDelay: '140ms' }}>
            Dua kilang terintegrasi di Sumatera Selatan, dihubungkan jaringan pipa NGL sepanjang 90 km.
          </p>
        </div>

        {/* Main grid: 2 big + 2 small */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Left big column */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {FACILITIES.slice(0, 2).map((f, i) => (
              <div
                key={f.title}
                className={`anim group card overflow-hidden flex flex-col`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 img-zoom overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/70 to-transparent" />
                  <span className={`absolute top-4 left-4 ${f.accent} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {f.label}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-psg-navy text-base mb-1 group-hover:text-psg-blue transition-colors">{f.title}</h3>
                  <p className="text-[11px] text-gray-400 mb-3 flex items-center gap-1">
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-400 flex-shrink-0"><path d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
                    {f.location}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{f.desc}</p>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                    {f.specs.map(([k, v]) => (
                      <div key={k}>
                        <div className="text-xs font-bold text-psg-blue">{v}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right small column */}
          <div className="grid grid-rows-2 gap-5">
            {FACILITIES.slice(2).map((f, i) => (
              <div
                key={f.title}
                className={`anim-r group card overflow-hidden flex flex-row`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="relative w-28 flex-shrink-0 img-zoom overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-psg-navy/30" />
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${f.accent === 'bg-[#6b7a19]' ? 'text-[#6b7a19]' : f.accent.replace('bg-', 'text-')} mb-1.5`}>
                    {f.label}
                  </span>
                  <h3 className="font-bold text-psg-navy text-sm mb-1 leading-tight group-hover:text-psg-blue transition-colors">{f.title}</h3>
                  <p className="text-[11px] text-gray-400 mb-2">{f.location}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {f.specs.slice(0, 2).map(([k, v]) => (
                      <span key={k} className="text-[10px] text-gray-500">
                        <span className="font-semibold text-psg-navy">{v}</span> {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
