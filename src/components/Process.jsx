import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flame, Factory, Wind, Droplets, Ship } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/* ─── Visual-only constants (no translatable text here) ─── */
const STEP_VISUALS = [
  { no: '01', Icon: Flame,    accent: '#E03A3E', gradEnd: '#ff7675', above: true  },
  { no: '02', Icon: Factory,  accent: '#0075BF', gradEnd: '#74b9ff', above: false },
  { no: '03', Icon: Wind,     accent: '#059669', gradEnd: '#34d399', above: true  },
  { no: '04', Icon: Droplets, accent: '#7c3aed', gradEnd: '#a78bfa', above: false },
  { no: '05', Icon: Ship,     accent: '#d97706', gradEnd: '#fbbf24', above: true  },
];

/*
  Road SVG — viewBox "0 0 1000 160"
  Upper pins (01,03,05) at y = 40  → 25 % from top
  Lower pins (02,04)    at y = 120 → 75 % from top

  Path designed for ~1440 px viewport.
  Pin SVG-x at 1440 px: 162, 331, 500, 669, 838
*/
const ROAD_VB = '0 0 1000 160';
const ROAD    = 'M 0,40 C 80,40 120,40 162,40 C 247,40 247,120 331,120 C 415,120 415,40 500,40 C 585,40 585,120 669,120 C 753,120 753,40 838,40 C 919,40 1000,40 1000,40';

/*
  Pin positions inside the full-width road div.
  left  = CSS calc aligned to max-w-7xl (px-8) column centres
  yPct  = % of road div height matching the SVG y position
*/
const PIN_X = [0.10, 0.30, 0.50, 0.70, 0.90]; // fraction of content width
const PIN_Y = [40 / 160, 120 / 160, 40 / 160, 120 / 160, 40 / 160]; // fraction of SVG height

// CSS calc that maps each fraction to the correct viewport position
function pinLeft(f) {
  // max-w-7xl = 1280px, lg:px-8 = 32px each side
  return `calc(max(0px,(100vw - 1280px)/2) + 32px + ${f} * (min(1280px,100vw) - 64px))`;
}

/* ─── Card ─── */
function StepCard({ step, inView, index, animate = true }) {
  const { Icon, accent, title, sub, desc, output, above } = step;
  const Wrapper = animate ? motion.div : 'div';
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: above ? -18 : 18 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: above ? -18 : 18 },
        transition: { duration: 0.5, delay: 0.35 + index * 0.12, ease: [0.22, 1, 0.36, 1] },
      }
    : {};
  return (
    <Wrapper
      {...motionProps}
      className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-4 w-full group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Icon + labels row */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{
            background: `linear-gradient(135deg,${accent}22,${accent}0d)`,
            border: `1.5px solid ${accent}33`,
          }}
        >
          <Icon size={18} strokeWidth={1.75} style={{ color: accent }} />
        </div>
        <div className="min-w-0 pt-0.5">
          {sub ? (
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400 leading-none mb-1">{sub}</p>
          ) : null}
          <h3
            className="font-extrabold text-[13px] leading-tight"
            style={{ color: accent }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className={`text-gray-500 text-[11px] leading-relaxed ${output ? 'mb-3' : ''}`}>{desc}</p>

      {/* Output badge */}
      {output ? (
        <div
          className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg"
          style={{
            background: `${accent}12`,
            color: accent,
            border: `1px solid ${accent}28`,
          }}
        >
          <span className="opacity-50">↳</span>
          {output}
        </div>
      ) : null}
    </Wrapper>
  );
}

/* ─── Pin (map marker) ─── */
function Pin({ step, inView, index }) {
  const { no, accent, gradEnd, above } = step;
  const circle = (
    <div
      className="w-24 h-24 rounded-full flex flex-col items-center justify-center text-white font-black shadow-xl select-none ring-4 ring-white/40"
      style={{
        background: `radial-gradient(circle at 35% 35%, ${gradEnd}, ${accent})`,
        boxShadow: `0 10px 32px ${accent}70`,
      }}
    >
      <span className="text-[9px] font-bold opacity-70 leading-none tracking-widest">STEP</span>
      <span className="text-2xl leading-none">{no}</span>
    </div>
  );
  const triangle = (dir) => (
    <div className="w-0 h-0" style={{
      borderLeft:  '13px solid transparent',
      borderRight: '13px solid transparent',
      ...(dir === 'down'
        ? { borderTop: `18px solid ${accent}`, marginTop: '-2px' }
        : { borderBottom: `18px solid ${accent}`, marginBottom: '-2px' }),
    }} />
  );

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.5 + index * 0.14 }}
    >
      {above ? <>{circle}{triangle('down')}</> : <>{triangle('up')}{circle}</>}
    </motion.div>
  );
}

/* ─── Main ─── */
export default function Process() {
  const { t } = useLanguage();
  const pr = t('process');
  const STEPS = STEP_VISUALS.map((v, i) => ({ ...v, ...(pr.steps?.[i] ?? {}) }));
  const STATS = pr.stats;

  // Ref must wrap BOTH desktop + mobile timelines — desktop-only ref stays
  // display:none on mobile so useInView never fires there (content stays invisible).
  const timelineRef = useRef(null);
  const inView      = useInView(timelineRef, { once: true, margin: '-40px 0px' });
  const headerRef   = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-40px 0px' });
  const statsRef    = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-40px 0px' });

  return (
    /* overflowX clip prevents scrollbar from full-width road div */
    <section id="proses" className="relative py-12 lg:py-16 bg-psg-light" style={{ overflowX: 'clip' }}>

      <img src="/backgorund_proses_bisnis.JPG" alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.06]" />

      {/* ── Header (inside container) ── */}
      <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-psg-blue text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
          >
            <span className="w-6 h-0.5 bg-psg-red rounded-full inline-block" />
            {pr.eyebrow}
            <span className="w-6 h-0.5 bg-psg-red rounded-full inline-block" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-psg-navy leading-tight mb-3"
          >
            {pr.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-gray-500 text-base"
          >
            {pr.sub}
          </motion.p>
        </div>
      </div>

      {/* ════════ TIMELINE — one ref for inView on all breakpoints ════════ */}
      <div ref={timelineRef} className="relative z-10">

      {/* Desktop */}
      <div className="hidden lg:block relative">

        {/* ── Row A: upper cards (01, 03, 05) ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*
            pb-[72px] → gap ~16px at 1440px, ~1px at 1024px (pin nearly touches card).
          */}
          <div className="grid grid-cols-5 gap-3 items-end pb-[72px]">
            {STEPS.map((step, i) =>
              step.above
                ? <StepCard key={step.no} step={step} inView={inView} index={i} />
                : <div key={step.no} />
            )}
          </div>
        </div>

        {/* ── Road: full viewport width ── */}
        <div className="relative w-full z-10">

          {/* Road SVG */}
          <svg viewBox={ROAD_VB} className="w-full block" aria-hidden>
            <defs>
              <filter id="rshadow" x="-5%" y="-20%" width="110%" height="140%">
                <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#00000035" />
              </filter>
            </defs>
            {/* shadow layer */}
            <path d={ROAD} fill="none" stroke="#1a202c" strokeWidth="42" strokeLinecap="round" filter="url(#rshadow)" />
            {/* asphalt */}
            <path d={ROAD} fill="none" stroke="#2d3748" strokeWidth="40" strokeLinecap="round" />
            {/* kerb highlight */}
            <path d={ROAD} fill="none" stroke="#4a5568" strokeWidth="36" strokeLinecap="round" />
            {/* static dashes */}
            <path d={ROAD} fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="22 16" opacity="0.4" />
          </svg>

          {/* Animated dashes (fill-in on scroll) */}
          <svg viewBox={ROAD_VB} className="absolute inset-0 w-full h-full" aria-hidden>
            <motion.path
              d={ROAD} fill="none" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeDasharray="22 16" opacity="0.65"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.25 }}
            />
          </svg>

          {/* Pins — CSS calc aligns with column centres of max-w-7xl */}
          {STEPS.map((step, i) => (
            <div
              key={step.no}
              className="absolute z-20"
              style={{
                left:      pinLeft(PIN_X[i]),
                top:       `${PIN_Y[i] * 100}%`,
                transform: step.above ? 'translate(-50%,-100%)' : 'translate(-50%,0%)',
              }}
            >
              <Pin step={step} inView={inView} index={i} />
            </div>
          ))}
        </div>

        {/* ── Row C: lower cards (02, 04) ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* pt-[72px] mirrors the clearance for lower pins */}
          <div className="grid grid-cols-5 gap-3 items-start pt-[72px]">
            {STEPS.map((step, i) =>
              !step.above
                ? <StepCard key={step.no} step={step} inView={inView} index={i} />
                : <div key={step.no} />
            )}
          </div>
        </div>

      </div>{/* end desktop */}

      {/* Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gray-200 rounded-full" />
          <motion.div
            className="absolute left-4 top-0 w-[3px] rounded-full origin-top"
            style={{ background: 'linear-gradient(180deg,#E03A3E,#0075BF,#059669,#7c3aed,#d97706)' }}
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start relative"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-[11px] flex-shrink-0 -ml-10 z-10 shadow-md ring-2 ring-white"
                  style={{ background: step.accent }}>
                  {step.no}
                </div>
                <StepCard step={step} inView={inView} index={i} animate={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      </div>{/* end timelineRef wrapper */}

      {/* ── Stats ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }} animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-section border border-psg-border"
        >
          <div className="bg-psg-navy px-6 sm:px-8 py-4 flex items-center gap-3">
            <div className="w-2 h-6 bg-psg-red rounded-full" />
            <span className="text-white font-bold text-sm">{pr.detailHeading}</span>
          </div>
          <div className="bg-white grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {STATS.map(item => (
              <div key={item.label} className={`px-6 py-5 ${item.hi ? 'bg-psg-light' : ''}`}>
                <div className={`text-2xl font-extrabold mb-0.5 ${item.hi ? 'text-psg-blue' : 'text-psg-navy'}`}>
                  {item.val}
                  <span className={`text-sm font-semibold ml-1.5 ${item.hi ? 'text-psg-blue/60' : 'text-gray-400'}`}>
                    {item.unit}
                  </span>
                </div>
                <div className={`text-[11px] font-semibold ${item.hi ? 'text-psg-blue' : 'text-gray-600'}`}>{item.label}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
