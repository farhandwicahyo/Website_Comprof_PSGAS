import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';
import IdRichText from './IdRichText';

const DEFAULT_HERO_IMAGE = '/Kilang_Fraksinasi_Sungai_Gerong.JPG';

function VmCard({ label, children }) {
  return (
    <div className="rounded-xl bg-white px-5 py-4 shadow-lg shadow-black/20">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-psg-blue mb-2">{label}</p>
      <p className="text-sm text-gray-700 leading-relaxed">
        {typeof children === 'string' ? <IdRichText text={children} /> : children}
      </p>
    </div>
  );
}

export default function About() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const { t } = useLanguage();
  const ab = t('about');
  const heroImage = content.about?.heroImage || DEFAULT_HERO_IMAGE;

  return (
    <section id="tentang" ref={ref} className="relative overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35 lg:to-black/25"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,380px)] lg:gap-10 xl:gap-14 lg:items-center">
          {/* Kiri — judul & narasi profil */}
          <div className="anim mb-8 lg:mb-0">
            <p className="text-white/85 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {ab.eyebrow}
            </p>
            <h2 className="text-white text-4xl sm:text-[2.75rem] lg:text-5xl font-bold leading-[1.1] tracking-tight mb-3">
              {ab.heroTitle}
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-medium mb-5">{ab.heading}</p>
            {ab.intro && (
              <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                <IdRichText text={ab.intro} />
              </p>
            )}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3 max-w-xl text-justify">
              <IdRichText text={ab.body1} />
            </p>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl text-justify">
              <IdRichText text={ab.body2} />
            </p>
          </div>

          {/* Kanan — visi & misi */}
          <div className="anim flex flex-col gap-3 sm:gap-4" style={{ transitionDelay: '100ms' }}>
            <VmCard label={ab.visionLabel}>{ab.vision}</VmCard>
            <VmCard label={ab.missionLabel}>{ab.mission}</VmCard>
          </div>
        </div>

        {ab.objectives?.length > 0 && (
          <div
            className="anim mt-8 lg:mt-10 rounded-xl border border-white/15 bg-black/30 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5"
            style={{ transitionDelay: '160ms' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 mb-3">
              {ab.objectivesHeading}
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2.5 text-sm text-white/90 leading-snug">
              {ab.objectives.map((obj, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-psg-green font-bold flex-shrink-0" aria-hidden>·</span>
                  <span><IdRichText text={obj} /></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
