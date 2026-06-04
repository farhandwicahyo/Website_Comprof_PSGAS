import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';

const AUTO_MS = 5500;

/** Encode spasi di path public (mis. /csr/CSR_MOTOR SAMPAH.png) */
function publicSrc(src) {
  if (!src || /^https?:\/\//i.test(src)) return src;
  return src
    .split('/')
    .map((part, i) => (i === 0 ? part : encodeURIComponent(part)))
    .join('/');
}

export default function Contribute() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const { t } = useLanguage();
  const contributeT = t('contribute');
  const cmsPhotos = content.contribute?.photos ?? [];
  const translatedPhotos = contributeT.photos ?? [];
  // Merge: use CMS src if available (so CMS image overrides work), translated title/caption
  const photos = translatedPhotos.length
    ? translatedPhotos.map((tp, i) => ({
        ...tp,
        src: cmsPhotos[i]?.src || tp.src,
      }))
    : cmsPhotos;

  const [index, setIndex] = useState(0);
  const n = photos.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + n) % n),
    [n],
  );

  useEffect(() => {
    if (n <= 1) return undefined;
    const timer = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(timer);
  }, [n, go]);

  if (!n) return null;

  const current = photos[index];

  return (
    <section id="contribute" className="py-12 lg:py-16 section-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <div className="anim">
            <span className="section-label">{contributeT.eyebrow}</span>
          </div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>
            {contributeT.heading}
          </h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            {contributeT.sub}
          </p>
        </div>

        {/* Main carousel */}
        <div className="anim relative max-w-5xl mx-auto" style={{ transitionDelay: '200ms' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-section border border-psg-border bg-psg-navy aspect-[16/9] sm:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <img
                  src={publicSrc(current.src)}
                  alt={current.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/90 via-psg-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                  </p>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">{current.title}</h3>
                  <p className="text-blue-100/90 text-sm max-w-2xl leading-relaxed">{current.caption}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {n > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={contributeT.prevLabel}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-psg-border shadow-lg flex items-center justify-center text-psg-navy hover:bg-psg-navy hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={contributeT.nextLabel}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-psg-border shadow-lg flex items-center justify-center text-psg-navy hover:bg-psg-navy hover:text-white transition-colors"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {n > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-psg-blue' : 'w-2 bg-gray-300 hover:bg-psg-blue/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Photo grid — dummy gallery */}
        <div className="anim mt-10" style={{ transitionDelay: '280ms' }}>
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">
            {contributeT.galleryLabel}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {photos.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                onClick={() => setIndex(i)}
                className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === index
                    ? 'border-psg-blue ring-2 ring-psg-blue/30 scale-[1.02] shadow-md'
                    : 'border-psg-border hover:border-psg-blue/50 opacity-90 hover:opacity-100'
                }`}
              >
                <img
                  src={publicSrc(photo.src)}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-psg-navy/0 group-hover:bg-psg-navy/25 transition-colors" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
