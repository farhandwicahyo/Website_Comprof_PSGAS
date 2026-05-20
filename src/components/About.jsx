import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { useContent } from '../context/ContentContext';

export default function About() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();
  const ab = content.about;
  const keyFacts = [
    { val: ab.founded, label: 'Tanggal Pendirian' },
    { val: ab.capacity, label: 'Kapasitas Desain' },
    { val: ab.plants, label: 'Fasilitas Produksi' },
    { val: ab.hq, label: 'Kantor Pusat' },
  ];

  return (
    <section id="tentang" className="py-24 lg:py-32 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="anim">
              <span className="section-label">Tentang Perusahaan</span>
            </div>
            <h2 className="anim section-heading mb-6" style={{ transitionDelay: '80ms' }}>
              {ab.heading}
            </h2>

            <p className="anim text-gray-500 leading-relaxed mb-5" style={{ transitionDelay: '140ms' }}>
              {ab.body1}
            </p>
            <p className="anim text-gray-500 leading-relaxed mb-8" style={{ transitionDelay: '180ms' }}>
              {ab.body2}
            </p>

            {/* Key objectives */}
            <div className="anim mb-10" style={{ transitionDelay: '220ms' }}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Tujuan & Maksud Perseroan</h3>
              <div className="space-y-3">
                {ab.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-psg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-psg-blue">
                        <path d="M10 3L5 8.5 2 5.5l1-1 2 2 4-4.5 1 1z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visi Misi */}
            <div className="anim grid sm:grid-cols-2 gap-4" style={{ transitionDelay: '280ms' }}>
              <div className="bg-psg-navy rounded-xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300 mb-2">Visi</div>
                <p className="text-white text-sm font-medium leading-relaxed">{ab.vision}</p>
              </div>
              <div className="bg-psg-light border border-psg-border rounded-xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-psg-red mb-2">Misi</div>
                <p className="text-gray-600 text-sm leading-relaxed">{ab.mission}</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Image */}
            <div className="anim-r rounded-2xl overflow-hidden img-zoom shadow-section mb-6" style={{ transitionDelay: '100ms' }}>
              <div className="relative aspect-[16/10]">
                <img
                  src="/Kilang_Fraksinasi_Sungai_Gerong.png"
                  alt="Kilang Fraksinasi Sungai Gerong — Fractionation Plant, Musi River"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-semibold text-sm">Kilang Fraksinasi Sungai Gerong</div>
                  <div className="text-blue-200 text-xs mt-0.5">Banyuasin, Sumatera Selatan</div>
                </div>
              </div>
            </div>

            {/* Key facts grid */}
            <div className="anim-r grid grid-cols-2 gap-3 mb-6" style={{ transitionDelay: '180ms' }}>
              {keyFacts.map((f) => (
                <div key={f.label} className="card p-5">
                  <div className="text-lg font-extrabold text-psg-blue mb-1">{f.val}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{f.label}</div>
                </div>
              ))}
            </div>

            {/* Shareholders */}
            <div className="anim-r card p-5" style={{ transitionDelay: '240ms' }}>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Komposisi Pemegang Saham</div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 h-3 rounded-full overflow-hidden bg-gray-100 flex">
                  <div className="bg-psg-red h-full rounded-l-full" style={{ width: '66%' }} />
                  <div className="bg-psg-green h-full rounded-r-full" style={{ width: '34%' }} />
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-psg-red flex-shrink-0" />
                  <span className="font-semibold text-psg-navy">Pertamina Gas <span className="text-psg-red font-bold">66%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-psg-green flex-shrink-0" />
                  <span className="font-semibold text-psg-navy">ST International <span className="text-[#6b7a19] font-bold">34%</span></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
