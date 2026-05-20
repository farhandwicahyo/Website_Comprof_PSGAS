import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

function Ticker({ to, suffix }) {
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGo(true); },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!go) return;
    let f = 0;
    const total = 60;
    const id = setInterval(() => {
      f++;
      setN(Math.round((f / total) * to));
      if (f >= total) clearInterval(id);
    }, 1600 / total);
    return () => clearInterval(id);
  }, [go, to]);

  const formatted = to >= 1000 ? n.toLocaleString('id-ID') : n;
  return <span ref={ref}>{formatted}{suffix}</span>;
}

function handleCtaClick(link, type) {
  if (!link) return;
  if (type === 'external') {
    window.open(link.startsWith('http') ? link : `https://${link}`, '_blank', 'noreferrer');
  } else if (type === 'internal') {
    window.location.href = link;
  } else {
    // scroll (default)
    const target = link.startsWith('#') ? link : `#${link}`;
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Hero() {
  const { content } = useContent();
  const hero = content.hero;
  const STATS = content.stats;
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.ht').forEach((el, i) => {
        setTimeout(() => el.classList.add('show'), i * 140);
      });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen flex flex-col" ref={ref}>
      <div className="absolute inset-0">
        <img
          src="/Cover.png"
          alt="Fasilitas pengolahan gas PT Perta-Samtan Gas"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px] flex z-10">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue" />
        <div className="flex-1 bg-psg-green" />
      </div>

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-12 lg:pt-40">
          <div className="max-w-3xl">
            <div className="ht flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-psg-green animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-psg-blue opacity-60" />
                <span className="w-2 h-2 rounded-full bg-psg-red opacity-40" />
              </div>
              <span className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="ht text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-black text-white leading-[1.08] tracking-tight mb-6">
              {hero.headline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-psg-green via-[#d4ed3a] to-[#ADC32B]">
                {hero.headline2}
              </span>
              <br />
              {hero.headline3}
            </h1>

            <p className="ht text-blue-100 text-lg leading-relaxed mb-10 max-w-xl font-light">
              {hero.description}
            </p>

            <div className="ht flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleCtaClick(hero.btnPrimaryLink || '#tentang', hero.btnPrimaryType || 'scroll')}
                className="inline-flex items-center gap-2.5 bg-psg-red hover:bg-red-600 text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg transition-all active:scale-95"
              >
                {hero.btnPrimary}
                <ArrowRight size={17} />
              </button>
              {hero.btnSecondaryVisible !== false && (
                <button
                  type="button"
                  onClick={() => handleCtaClick(hero.btnSecondaryLink || '#proses', hero.btnSecondaryType || 'scroll')}
                  className="inline-flex items-center gap-2.5 border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all active:scale-95"
                >
                  {hero.btnSecondary}
                </button>
              )}
            </div>

            {hero.showShareholders !== false && (
            <div className="ht flex flex-wrap gap-3 mt-8">
              {[
                { pct: hero.shareholder1Pct, name: hero.shareholder1Name, dot: 'bg-psg-red' },
                { pct: hero.shareholder2Pct, name: hero.shareholder2Name, dot: 'bg-psg-green' },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                  <span className="text-white/90 text-xs font-semibold">{s.name}</span>
                  <span className="text-blue-300 text-xs font-bold">{s.pct}</span>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative bg-white border-t-4 border-psg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="py-5 px-3 sm:px-4 text-center border-r border-gray-100 last:border-0 hover:bg-psg-light transition-colors"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-psg-navy tabular-nums">
                  <Ticker to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium mt-0.5 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ht { opacity:0; transform:translateY(24px); transition:opacity .6s ease,transform .6s ease; }
        .ht.show { opacity:1; transform:none; }
      `}</style>
    </section>
  );
}
