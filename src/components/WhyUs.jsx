import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import {
  Hand,
  Megaphone,
  CheckCircle2,
  Shield,
  ListChecks,
  Briefcase,
  ShieldCheck,
  Scale,
  TrendingUp,
  HeartHandshake,
  Award,
  Target,
  BadgeCheck,
  HardHat,
  HeartPulse,
  Leaf,
  FileCheck,
  Eye,
  Building2,
  Coins,
  BarChart3,
  LineChart,
  ThumbsUp,
  Star,
  PackageCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import IdRichText from './IdRichText';

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

const GOLDEN_RULE_ICONS = [CheckCircle2, Hand, Megaphone];

const PSGAS_CARD_META = [
  {
    Icon: Briefcase,
    main: { color: '#0075BF', bg: '#ffffff' },
    accents: [
      { Icon: Award, color: '#8a6914', bg: '#fff9ec' },
      { Icon: Target, color: '#0075BF', bg: '#eef6fc' },
      { Icon: BadgeCheck, color: '#2d6a9f', bg: '#f3f8fc' },
    ],
  },
  {
    Icon: ShieldCheck,
    main: { color: '#E03A3E', bg: '#ffffff' },
    accents: [
      { Icon: HardHat, color: '#c42f32', bg: '#fff1f1' },
      { Icon: HeartPulse, color: '#d4383b', bg: '#fdeeee' },
      { Icon: Leaf, color: '#3d7a45', bg: '#f2faf3' },
    ],
  },
  {
    Icon: Scale,
    main: { color: '#003060', bg: '#ffffff' },
    accents: [
      { Icon: FileCheck, color: '#003060', bg: '#eef3f8' },
      { Icon: Eye, color: '#1a5a8f', bg: '#f0f6fb' },
      { Icon: Building2, color: '#4a6278', bg: '#f4f6f8' },
    ],
  },
  {
    Icon: TrendingUp,
    main: { color: '#5c6e14', bg: '#ffffff' },
    accents: [
      { Icon: Coins, color: '#7a6210', bg: '#faf8ef' },
      { Icon: BarChart3, color: '#6b7a19', bg: '#f5f8eb' },
      { Icon: LineChart, color: '#4a5510', bg: '#f0f4e6' },
    ],
  },
  {
    Icon: HeartHandshake,
    main: { color: '#6d8a12', bg: '#ffffff' },
    accents: [
      { Icon: ThumbsUp, color: '#7a9218', bg: '#f8fbea' },
      { Icon: Star, color: '#9aad20', bg: '#fcfef0' },
      { Icon: PackageCheck, color: '#5a7218', bg: '#f3f7e8' },
    ],
  },
];

const PSGAS_THEMES = [
  {
    gradient: 'linear-gradient(180deg, #8fd4f5 0%, #3aa3e0 35%, #0075BF 65%, #002848 100%)',
    glow: 'rgba(0,117,191,0.45)',
    titleClass: 'text-white',
    descClass: 'text-blue-50/90',
  },
  {
    gradient: 'linear-gradient(180deg, #ffb8ba 0%, #f06a6d 35%, #E03A3E 65%, #7a1518 100%)',
    glow: 'rgba(224,58,62,0.4)',
    titleClass: 'text-white',
    descClass: 'text-red-50/90',
  },
  {
    gradient: 'linear-gradient(180deg, #6eb5e8 0%, #2a7ab8 35%, #003060 65%, #000d1f 100%)',
    glow: 'rgba(0,48,96,0.5)',
    titleClass: 'text-white',
    descClass: 'text-blue-100/85',
  },
  {
    gradient: 'linear-gradient(180deg, #e4eea0 0%, #a8be3a 35%, #6b7a19 65%, #3a4210 100%)',
    glow: 'rgba(107,122,25,0.4)',
    titleClass: 'text-white',
    descClass: 'text-lime-50/90',
  },
  {
    gradient: 'linear-gradient(180deg, #f2f8c4 0%, #c5dc5a 35%, #ADC32B 65%, #4a6312 100%)',
    glow: 'rgba(173,195,43,0.38)',
    titleClass: 'text-white',
    descClass: 'text-lime-50/90',
  },
];

function PsgasValueCard({ value, index, theme }) {
  const meta = PSGAS_CARD_META[index] ?? PSGAS_CARD_META[0];
  const MainIcon = meta.Icon;

  return (
    <div
      className="group relative flex flex-col min-h-[12rem] sm:min-h-[13rem] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        transitionDelay: `${280 + index * 60}ms`,
        background: theme.gradient,
        boxShadow: `0 8px 24px -6px ${theme.glow}`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 42%)',
        }}
      />

      <div className="relative shrink-0 border-b border-white/20 px-2.5 pt-3.5 pb-3 sm:px-3 sm:pt-4 sm:pb-3.5">
        <div className="flex justify-center mb-2.5">
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,.12)]"
            style={{ backgroundColor: meta.main.bg }}
          >
            <MainIcon
              className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
              style={{ color: meta.main.color }}
              strokeWidth={2}
            />
          </div>
        </div>

        <h3 className="font-bold text-[13px] sm:text-[15px] lg:text-[17px] leading-[1.25] text-center text-white tracking-tight [text-wrap:balance] drop-shadow-[0_1px_2px_rgba(0,0,0,.25)] [&_em]:italic [&_em]:font-semibold px-0.5">
          <IdRichText text={value.title} />
        </h3>
        <div className="mt-2 mx-auto h-0.5 w-10 rounded-full bg-white/50" aria-hidden />
      </div>

      <div className="relative flex flex-1 flex-col px-2.5 py-3 sm:px-3 sm:py-3.5">
        <p
          className={`text-[10px] sm:text-[11px] lg:text-xs leading-relaxed text-center flex-1 ${theme.descClass}`}
        >
          <IdRichText text={value.desc} />
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-white/20">
          {meta.accents.map((accent, ai) => (
            <div
              key={ai}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,.08)]"
              style={{ backgroundColor: accent.bg }}
              aria-hidden
            >
              <accent.Icon
                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                style={{ color: accent.color }}
                strokeWidth={2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PsgasValuesRow({ values }) {
  return (
    <div
      className="anim mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto md:overflow-visible overscroll-x-contain pb-2 md:pb-0 [scrollbar-width:thin]"
      style={{ transitionDelay: '200ms' }}
    >
      <div className="grid grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4 min-w-[36rem] sm:min-w-0 w-full">
        {values.map((v, i) => (
          <PsgasValueCard
            key={`${v.no}-${i}`}
            value={v}
            index={i}
            theme={PSGAS_THEMES[i] ?? PSGAS_THEMES[0]}
          />
        ))}
      </div>
    </div>
  );
}

/** Aksen merah · biru · hijau Pertamina (bergilir) */
const PERTAMINA_PILLAR_THEME = [
  { border: 'border-l-psg-red', accent: 'bg-psg-red', title: 'text-psg-red' },
  { border: 'border-l-psg-blue', accent: 'bg-psg-blue', title: 'text-psg-blue' },
  { border: 'border-l-psg-green', accent: 'bg-psg-green', title: 'text-[#5c7210]' },
];

function OnePertaminaPillarCard({ pillar, index }) {
  const theme = PERTAMINA_PILLAR_THEME[index % 3];

  return (
    <article
      className={`rounded-lg border border-psg-border bg-white ${theme.border} border-l-[4px] px-4 py-4 sm:px-5 sm:py-[1.125rem]`}
    >
      <h4 className={`font-semibold text-[15px] sm:text-base leading-snug mb-2 ${theme.title}`}>
        {pillar.title}
      </h4>
      <div className={`w-9 h-0.5 rounded-full ${theme.accent} mb-2.5 opacity-90`} aria-hidden />
      <p className="text-gray-600 text-[13px] sm:text-sm leading-[1.7]">
        {pillar.desc}
      </p>
    </article>
  );
}

function OnePertaminaBlock() {
  const { t } = useLanguage();
  const block = t('whyus.onePertamina');
  if (!block) return null;

  return (
    <div className="rounded-2xl overflow-hidden border border-psg-border shadow-section">
      <div className="flex h-1.5">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue" />
        <div className="flex-1 bg-psg-green" />
      </div>

      <div className="relative bg-gradient-to-br from-psg-light via-white to-red-50/30">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 15%, rgba(0,117,191,.12) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(224,58,62,.08) 0%, transparent 40%)',
          }}
          aria-hidden
        />

        <div className="relative p-5 sm:p-8 lg:p-10">
          {/* Mobile / tablet: maskot sejajar teks pengantar */}
          <div className="flex flex-row items-center gap-3 sm:gap-6 mb-6 lg:hidden">
            <div className="flex-shrink-0 w-[40%] sm:w-[38%] max-w-[220px] md:max-w-[280px]">
              <img
                src="/button-go-to-top.png"
                alt={block.mascotAlt || 'Pertamina'}
                className="w-full h-auto max-h-[180px] sm:max-h-[240px] md:max-h-[300px] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,48,96,.18)]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <img
                src="/pertamina-logo.svg"
                alt="Pertamina"
                className="h-7 sm:h-8 w-auto max-w-[11rem] object-contain object-left mb-2"
                loading="lazy"
                decoding="async"
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-psg-blue mb-1">
                {block.groupLabel || 'Pertamina Group'}
              </p>
              <h3 className="font-bold text-psg-navy text-lg sm:text-xl leading-tight mb-3">
                <IdRichText text={block.title} />
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                <IdRichText text={block.desc} />
              </p>
            </div>
          </div>

          {/* Desktop: pengantar lebar penuh */}
          <div className="hidden lg:block mb-8 max-w-3xl">
            <img
              src="/pertamina-logo.svg"
              alt="Pertamina"
              className="h-9 w-auto max-w-[12rem] object-contain object-left mb-2.5"
              loading="lazy"
              decoding="async"
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-psg-blue mb-1">
              {block.groupLabel || 'Pertamina Group'}
            </p>
            <h3 className="font-bold text-psg-navy text-2xl leading-tight mb-4">
              <IdRichText text={block.title} />
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              <IdRichText text={block.desc} />
            </p>
          </div>

          {/* Desktop: maskot hanya di samping kartu pilar */}
          {Array.isArray(block.pillars) && (
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-8 xl:gap-10">
              <div className="hidden lg:flex flex-shrink-0 w-[260px] xl:w-[320px] items-end justify-center self-stretch pb-1">
                <img
                  src="/button-go-to-top.png"
                  alt={block.mascotAlt || 'Pertamina'}
                  className="w-full h-auto max-h-[420px] xl:max-h-[480px] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,48,96,.18)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {block.pillars.map((p, i) => (
                  <OnePertaminaPillarCard key={p.title} pillar={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
              <h3 className="text-white font-bold text-2xl sm:text-3xl leading-tight drop-shadow-sm">
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
                <h5 className="font-bold text-xl mb-2" style={{ color: '#5C4510' }}>{rule.title}</h5>
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
  const VALUES = t('whyus.values');

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

        <PsgasValuesRow values={VALUES} />

        <div className="anim mb-10" style={{ transitionDelay: '400ms' }}>
          <OnePertaminaBlock />
        </div>

        {/* Budaya Keselamatan (HSSE) */}
        <div className="anim" style={{ transitionDelay: '450ms' }}>
          <HsseCultureBlock />
        </div>

      </div>
    </section>
  );
}
