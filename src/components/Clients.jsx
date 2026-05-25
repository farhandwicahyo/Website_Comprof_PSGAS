import { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

/* ─── Partners ─── */
function PartnerItem({ p }) {
  return (
    <div title={p.name} className="flex flex-col items-center justify-center flex-shrink-0 w-[9rem] sm:w-[10.5rem]">
      <div className="h-14 sm:h-16 w-full flex items-center justify-center px-2">
        <img src={p.logo} alt={p.name}
          className="max-h-full max-w-full w-auto object-contain"
          loading="lazy" decoding="async" draggable="false" />
      </div>
      <span className="text-[9px] text-gray-400 text-center leading-tight px-1 mt-2">{p.name}</span>
    </div>
  );
}

function PartnerMarquee({ partners }) {
  const { t } = useLanguage();
  const track = [...partners, ...partners];
  return (
    <div className="partner-marquee mb-10 lg:mb-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
      <div className="partner-marquee__track" aria-label={t('clients.partnerAriaLabel')} role="list">
        {track.map((p, i) => (
          <div key={`${p.name}-${i}`} className="px-4 sm:px-6" role="listitem" aria-hidden={i >= partners.length}>
            <PartnerItem p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Awards carousel ─── */
const OFFSETS   = [-3, -2, -1, 0, 1, 2, 3];
const CARD_W    = 420;
const CARD_H    = 280;
const STEP_X    = 360;

function slotStyle(off, isCenter) {
  const abs = Math.abs(off);
  const scale   = [1, 0.90, 0.82, 0.72][abs] ?? 0.62;
  const ty      = [0, 16,   36,  58][abs]    ?? 72;
  const ry      = off * 11;
  const opacity = [1, 0.92, 0.82, 0.68][abs] ?? 0.55;
  const z       = 20 - abs;
  const blur    = abs >= 3 ? 'blur(1.5px)' : 'none';

  return {
    position:  'absolute',
    width:      CARD_W,
    height:     CARD_H,
    left:      `calc(50% + ${off * STEP_X}px - ${CARD_W / 2}px)`,
    top:        0,
    transform: `perspective(1200px) translateY(${ty}px) scale(${scale}) rotateY(${ry}deg)`,
    opacity,
    zIndex:     z,
    filter:     blur,
    transition: 'all 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    borderRadius: isCenter ? '20px' : '24px',
    overflow:   'hidden',
    cursor:     isCenter ? 'default' : 'pointer',
    boxShadow:  isCenter
      ? '0 24px 60px rgba(0,0,0,0.40)'
      : '0 8px 28px rgba(0,0,0,0.22)',
  };
}

function AwardCarousel({ awards }) {
  const { t } = useLanguage();
  const clientsT = t('clients');
  const n = awards.length;
  const [center, setCenter] = useState(0);

  const slide = useCallback((dir) => {
    setCenter(c => (c + dir + n) % n);
  }, [n]);

  if (!n) return null;

  return (
    <div className="relative py-6 lg:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 relative z-10">
        <span className="section-label">{clientsT.awardsEyebrow}</span>
        <h2 className="section-heading mb-4">{clientsT.awardsHeading}</h2>
        <p className="section-sub mx-auto text-center">{clientsT.awardsSub}</p>
      </div>

      <div
        className="relative left-1/2 -translate-x-1/2 w-screen overflow-visible"
        style={{ height: CARD_H + 72 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent" />

        <button
          onClick={() => slide(-1)}
          aria-label={clientsT.prevLabel}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg text-psg-navy hover:bg-psg-navy hover:text-white hover:border-psg-navy transition-all duration-200"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => slide(1)}
          aria-label={clientsT.nextLabel}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg text-psg-navy hover:bg-psg-navy hover:text-white hover:border-psg-navy transition-all duration-200"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>

        <div className="relative w-full h-full">
          {OFFSETS.map(off => {
            const realIdx = (center + off + n * 100) % n;
            const a = awards[realIdx];
            const isCenter = off === 0;
            return (
              <div
                key={`${realIdx}-${off}`}
                style={slotStyle(off, isCenter)}
                onClick={() => !isCenter && slide(off > 0 ? 1 : -1)}
                aria-hidden={!isCenter}
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-contain object-center bg-gray-50 p-2"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute bottom-5 left-4 right-4">
                  <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-none mb-1.5">{a.org}</p>
                  <h4 className="text-white font-bold text-sm leading-snug">{a.title}</h4>
                </div>

                {isCenter && (
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5"
                    style={{ background: 'rgba(0,48,96,0.88)' }}>
                    <p className="text-blue-300 text-[9px] font-bold uppercase tracking-widest mb-2">{a.org}</p>
                    <h4 className="text-white font-extrabold text-base leading-snug mb-3">{a.title}</h4>
                    <div className="w-8 h-0.5 bg-psg-red rounded-full mb-3" />
                    <p className="text-blue-100/90 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-8 relative z-10">
        {awards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCenter(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === center ? 'w-5 h-2 bg-psg-navy' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Clients() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const { content } = useContent();
  const clientsT = t('clients');

  // CMS data — falls back to empty array if not set
  const partners = content.partners ?? [];
  const awards   = content.awards   ?? [];

  return (
    <section id="pelanggan" className="py-12 lg:py-16 section-white overflow-x-clip" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="anim"><span className="section-label">{clientsT.partnersEyebrow}</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>{clientsT.partnersHeading}</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            {clientsT.partnersSub}
          </p>
        </div>
      </div>

      {/* Partner marquee — full-width */}
      {partners.length > 0 && <PartnerMarquee partners={partners} />}

      {/* Award carousel — full-width */}
      {awards.length > 0 && (
        <div className="anim w-full" style={{ transitionDelay: '80ms' }}>
          <AwardCarousel awards={awards} />
        </div>
      )}
    </section>
  );
}
