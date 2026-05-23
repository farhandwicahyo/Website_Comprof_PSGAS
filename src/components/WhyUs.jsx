import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { Hand, Megaphone, CheckCircle2, Shield, ListChecks } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Tameng HSSE dengan ikon checklist di dalam */
function HsseShieldChecklistIcon({ size = 28, className = '' }) {
  const checklistSize = Math.round(size * 0.46);
  return (
    <span
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Shield
        size={size}
        className="text-amber-50"
        strokeWidth={1.75}
        fill="rgba(255,255,255,0.15)"
      />
      <ListChecks
        size={checklistSize}
        className="absolute text-amber-50"
        style={{ top: '52%', left: '50%', transform: 'translate(-50%, -50%)' }}
        strokeWidth={2.25}
      />
    </span>
  );
}

const VALUE_ICONS = ['🎯', '🛡️', '⚖️', '📊', '🤝', '🌟'];
const GOLDEN_RULE_ICONS = [CheckCircle2, Hand, Megaphone];

function HsseCultureBlock() {
  const { t } = useLanguage();
  const goldenRules = t('whyus.goldenRules').map((r, i) => ({ ...r, Icon: GOLDEN_RULE_ICONS[i] }));
  return (
      <div className="rounded-2xl overflow-hidden border border-amber-200/60 shadow-[0_20px_50px_-12px_rgba(180,134,11,0.25)]">
        <div
          className="relative px-6 sm:px-10 py-9 sm:py-11 overflow-hidden"
          style={{
            background: 'linear-gradient(125deg, #5C4510 0%, #9A7618 22%, #C9A227 48%, #E8D48B 72%, #B8860B 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,.4) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,.25) 0%, transparent 40%)',
            }}
          />
          <div className="absolute top-4 right-6 opacity-25 pointer-events-none">
            <HsseShieldChecklistIcon size={80} />
          </div>

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-amber-100/40 flex items-center justify-center flex-shrink-0 shadow-lg">
              <HsseShieldChecklistIcon size={30} />
            </div>
            <div>
              <p className="text-amber-100/90 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">{t('whyus.hsseEyebrow')}</p>
              <h3 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight drop-shadow-sm">
                {t('whyus.hsseHeading')}
              </h3>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {goldenRules.map((rule, i) => (
              <div
                key={rule.title}
                className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,.95) 0%, rgba(251,240,210,.98) 100%)',
                  border: '1px solid rgba(255,255,255,.5)',
                }}
              >
                <span
                  className="absolute -right-2 -top-3 text-[4.5rem] font-black leading-none select-none opacity-[0.07]"
                  style={{ color: '#7A5C10' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #C9A227, #E8D48B)', color: '#5C4510' }}
                >
                  <rule.Icon size={24} strokeWidth={2} />
                </div>
                <h5 className="font-extrabold text-xl mb-2" style={{ color: '#5C4510' }}>{rule.title}</h5>
                <p className="text-sm leading-relaxed" style={{ color: '#6B5420' }}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default function WhyUs() {
  const ref = useScrollAnimationMultiple();
  const { t } = useLanguage();
  const VALUES = t('whyus.values').map((v, i) => ({ ...v, icon: VALUE_ICONS[i] }));

  return (
    <section id="kenapa" className="py-12 lg:py-16 section-white relative overflow-hidden" ref={ref}>
      {/* Subtle decorative accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-psg-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-psg-red/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue" />
        <div className="flex-1 bg-psg-green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="anim">
            <span className="section-label">{t('whyus.eyebrow')}</span>
          </div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>
            {t('whyus.heading')}
          </h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            {t('whyus.sub')}
          </p>
        </div>

        {/* Values grid — adapts columns based on item count */}
        <div className={[
          'gap-4 mb-10',
          VALUES.length === 1 ? 'grid grid-cols-1 max-w-sm mx-auto' :
          VALUES.length === 2 ? 'grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' :
          VALUES.length <= 4 ? 'grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' :
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        ].join(' ')}>
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="anim group card p-6 hover:-translate-y-1"
              style={{ transitionDelay: `${280 + i * 70}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-psg-light border border-psg-border flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-psg-blue/10 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black text-psg-blue uppercase tracking-[0.15em] mb-0.5">{v.no}</div>
                  <h3 className="font-bold text-psg-navy text-base leading-tight">{v.title}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Budaya Keselamatan (HSSE) */}
        <div className="anim" style={{ transitionDelay: '450ms' }}>
          <HsseCultureBlock />
        </div>

      </div>
    </section>
  );
}
