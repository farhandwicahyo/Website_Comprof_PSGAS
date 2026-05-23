import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const ACCENTS = ['bg-psg-red', 'bg-psg-blue', 'bg-[#6b7a19]', 'bg-psg-navy'];

const LocationIcon = () => (
  <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-400 flex-shrink-0" aria-hidden>
    <path d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

/** Card with image on top — used for the main layout */
function FacilityCardBig({ f, delay }) {
  return (
    <div
      className="anim group card overflow-hidden flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
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
          <LocationIcon />
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
  );
}

/** Compact horizontal card — used in the right column when count === 4 */
function FacilityCardCompact({ f, delay }) {
  const textAccent = f.accent === 'bg-[#6b7a19]' ? 'text-[#6b7a19]' : f.accent.replace('bg-', 'text-');
  return (
    <div
      className="anim-r group card overflow-hidden flex flex-row"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-28 flex-shrink-0 img-zoom overflow-hidden">
        <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-psg-navy/30" />
      </div>
      <div className="p-4 flex flex-col justify-center flex-1">
        <span className={`text-[10px] font-bold uppercase tracking-wider ${textAccent} mb-1.5`}>
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
  );
}

/** Pick the wrapper class for a simple equal-card grid based on count */
function simpleGridClass(count) {
  if (count === 1) return 'grid grid-cols-1 max-w-md mx-auto gap-5';
  if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-3 gap-5';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5';
}

export default function Facilities() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const facT = t('facilities');
  const FACILITIES = facT.items.map((f, i) => ({
    ...f,
    specs: [[f.spec1k, f.spec1v], [f.spec2k, f.spec2v], [f.spec3k, f.spec3v]],
    accent: ACCENTS[i % ACCENTS.length],
  }));

  const count = FACILITIES.length;

  return (
    <section id="fasilitas" className="py-12 lg:py-16 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="anim"><span className="section-label">{facT.eyebrow}</span></div>
          <h2 className="anim section-heading" style={{ transitionDelay: '80ms' }}>{facT.heading}</h2>
          <p className="anim text-gray-400 text-sm leading-relaxed text-justify mt-3" style={{ transitionDelay: '140ms' }}>
            {facT.sub}
          </p>
        </div>

        {count === 0 && (
          <p className="text-center text-gray-400 py-12">Belum ada fasilitas yang ditambahkan.</p>
        )}

        {/*
          Layout rules:
          • count <= 3  → simple equal grid of big cards (centered when 1–2)
          • count === 4 → editorial layout: 2 big left (2/3) + 2 compact right (1/3)
          • count >= 5  → 2-column big-card grid (wrap naturally)
        */}

        {count > 0 && count !== 4 && (
          <div className={simpleGridClass(count)}>
            {FACILITIES.map((f, i) => (
              <FacilityCardBig key={i} f={f} delay={i * 100} />
            ))}
          </div>
        )}

        {count === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left — 2 big cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {FACILITIES.slice(0, 2).map((f, i) => (
                <FacilityCardBig key={i} f={f} delay={i * 100} />
              ))}
            </div>

            {/* Right — 2 compact cards stacked */}
            <div className="grid grid-rows-2 gap-5">
              {FACILITIES.slice(2).map((f, i) => (
                <FacilityCardCompact key={i + 2} f={f} delay={(i + 2) * 100} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
