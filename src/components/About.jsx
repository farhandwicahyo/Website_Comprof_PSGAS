import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

function CheckIcon() {
  return (
    <div className="w-4 h-4 rounded bg-psg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-psg-blue" aria-hidden>
        <path d="M10 3L5 8.5 2 5.5l1-1 2 2 4-4.5 1 1z" />
      </svg>
    </div>
  );
}

function ObjectiveCard({ label, children }) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-psg-light/80 border border-psg-border/60 px-3 py-2.5">
      <CheckIcon />
      <div className="min-w-0">
        {label && (
          <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-psg-navy mb-0.5">
            {label}
          </span>
        )}
        <span className="text-xs text-gray-600 leading-snug">{children}</span>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const ab = t('about');

  return (
    <section id="tentang" className="py-12 lg:py-16 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch">

          {/* Left — teks, visi misi & tujuan */}
          <div>
            <div className="anim">
              <span className="section-label">{ab.eyebrow}</span>
            </div>
            <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>
              {ab.heading}
            </h2>

            <p className="anim text-gray-500 text-sm leading-relaxed mb-3 text-justify" style={{ transitionDelay: '140ms' }}>
              {ab.body1}
            </p>
            <p className="anim text-gray-500 text-sm leading-relaxed mb-5 text-justify" style={{ transitionDelay: '180ms' }}>
              {ab.body2}
            </p>

            <div className="anim mb-5" style={{ transitionDelay: '220ms' }}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                {ab.visionMissionHeading}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                <ObjectiveCard label={ab.visionLabel}>{ab.vision}</ObjectiveCard>
                <ObjectiveCard label={ab.missionLabel}>{ab.mission}</ObjectiveCard>
              </div>
            </div>

            <div className="anim" style={{ transitionDelay: '280ms' }}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                {ab.objectivesHeading}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {ab.objectives.map((obj, i) => (
                  <ObjectiveCard key={i}>{obj}</ObjectiveCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right — foto memenuhi tinggi kolom */}
          <div className="anim-r flex h-full min-h-[280px]" style={{ transitionDelay: '100ms' }}>
            <div className="relative w-full h-full min-h-[280px] lg:min-h-full rounded-xl overflow-hidden img-zoom shadow-section">
              <img
                src="/Kilang_Fraksinasi_Sungai_Gerong.JPG"
                alt={ab.facilityLabel}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <div className="text-white font-semibold text-sm leading-tight">{ab.facilityLabel}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
