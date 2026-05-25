import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

export default function Roadmap() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const MILESTONES = t('roadmap.milestones');

  return (
    <section id="roadmap" className="relative py-12 lg:py-16 bg-psg-light overflow-x-clip" ref={ref}>
      <img
        src="/Kilang_Fraksinasi_Sungai_Gerong.JPG"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.06] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="anim"><span className="section-label">{t('roadmap.eyebrow')}</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>{t('roadmap.heading')}</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            {t('roadmap.sub')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[26px] sm:left-[27px] lg:left-1/2 top-0 bottom-0 w-[3px] sm:w-1 rounded-full bg-gradient-to-b from-psg-blue via-psg-blue/60 to-psg-blue/25 lg:-translate-x-1/2" />

          <div className="space-y-6">
            {MILESTONES.map((m, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`anim relative flex gap-6 lg:items-center lg:gap-0 ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Card */}
                  <div className={`ml-14 lg:ml-0 flex-1 lg:w-[calc(50%-40px)] ${isRight ? 'lg:pr-14' : 'lg:pl-14'}`}>
                    <div className={`card p-6 bg-white/95 backdrop-blur-[2px] ${m.done ? 'border-l-4 border-l-psg-blue' : 'border-l-4 border-l-gray-200'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{m.icon}</span>
                        {m.year !== '—' && (
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            m.done ? 'bg-psg-blue/10 text-psg-blue' : 'bg-gray-100 text-gray-400'
                          }`}>{m.year}</span>
                        )}
                        {/* <span className={`ml-auto text-[10px] font-bold uppercase tracking-wider ${
                          m.done ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {m.done ? t('roadmap.achieved') : t('roadmap.planned')}
                        </span> */}
                      </div>
                      <h3 className="font-bold text-psg-navy text-base mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex-shrink-0 flex flex-col items-center">
                    <div className={`min-w-[3.5rem] h-14 px-2 rounded-full border-4 flex items-center justify-center font-extrabold text-[10px] sm:text-xs shadow-md z-10 ${
                      m.done
                        ? 'bg-psg-blue border-white text-white shadow-psg-blue/30'
                        : 'bg-white border-gray-200 text-gray-400'
                    }`}>
                      {m.year !== '—' ? m.year : '★'}
                    </div>
                  </div>

                  {/* Empty right */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Trophy CTA */}
        <div className="anim mt-16 bg-psg-navy/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-section" style={{ transitionDelay: '580ms' }}>
          <div className="w-16 h-16 bg-psg-red/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">🏆</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-extrabold text-xl mb-1">{t('roadmap.ctaHeading')}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{t('roadmap.ctaSub')}</p>
          </div>
          <button
            onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex-shrink-0"
          >
            {t('roadmap.ctaBtn')}
          </button>
        </div>

      </div>
    </section>
  );
}
