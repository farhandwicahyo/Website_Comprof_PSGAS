import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const MILESTONES = [
  {
    year: '2008',
    title: 'Pendirian Perseroan',
    desc: 'PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008. Dimiliki 66% Pertamina Gas & 34% ST International untuk memproduksi LPG mendukung program konversi BBM pemerintah.',
    done: true, icon: '🏗️',
  },
  {
    year: '2013',
    title: 'Fase Komersial',
    desc: 'Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013. Dimulainya produksi penuh LPG dan Kondensat dari kedua kilang terintegrasi.',
    done: true, icon: '🚀',
  },
  {
    year: '2018',
    title: '1 Juta Ton LPG',
    desc: 'Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga Oktober 2018 — tonggak bersejarah dalam perjalanan perusahaan.',
    done: true, icon: '🏆',
  },
  {
    year: '—',
    title: 'Proper Hijau',
    desc: 'Meraih penghargaan Proper Hijau dari Kementerian LHK RI atas komitmen pengelolaan lingkungan hidup yang unggul di seluruh area operasional.',
    done: true, icon: '🌿',
  },
  {
    year: '—',
    title: 'Patra Nirbaya Karya Madya',
    desc: 'Meraih Penghargaan Keselamatan Kerja kategori Jam Kerja Aman — bukti nyata implementasi budaya HSSE yang konsisten.',
    done: true, icon: '🛡️',
  },
  {
    year: '2026+',
    title: 'Diversifikasi & Pertumbuhan',
    desc: 'Eksplorasi peluang bisnis di seluruh Indonesia, penguatan kemitraan strategis dengan Pemerintah, dan pengembangan potensi bisnis yang lebih luas.',
    done: false, icon: '🌐',
  },
];

export default function Roadmap() {
  const ref = useScrollAnimationMultiple();

  return (
    <section id="roadmap" className="py-24 lg:py-32 section-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="anim"><span className="section-label">Perjalanan Kami</span></div>
          <h2 className="anim section-heading mb-4" style={{ transitionDelay: '80ms' }}>Pencapaian Perseroan</h2>
          <p className="anim section-sub mx-auto text-center" style={{ transitionDelay: '140ms' }}>
            Tonggak penting dalam perjalanan PT Perta-Samtan Gas sejak pendirian hingga menjadi
            perusahaan LPG terkemuka di Indonesia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-psg-blue via-psg-blue/50 to-gray-200 lg:-translate-x-px" />

          <div className="space-y-6">
            {MILESTONES.map((m, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={`${m.year}-${m.title}`}
                  className={`anim relative flex gap-6 ${
                    'lg:items-center lg:gap-0'
                  } ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Card */}
                  <div className={`ml-14 lg:ml-0 flex-1 lg:w-[calc(50%-40px)] ${isRight ? 'lg:pr-14' : 'lg:pl-14'}`}>
                    <div className={`card p-6 ${m.done ? 'border-l-4 border-l-psg-blue' : 'border-l-4 border-l-gray-200'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{m.icon}</span>
                        {m.year !== '—' && (
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            m.done ? 'bg-psg-blue/10 text-psg-blue' : 'bg-gray-100 text-gray-400'
                          }`}>{m.year}</span>
                        )}
                        <span className={`ml-auto text-[10px] font-bold uppercase tracking-wider ${
                          m.done ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {m.done ? '✓ Tercapai' : '→ Rencana'}
                        </span>
                      </div>
                      <h3 className="font-bold text-psg-navy text-base mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Node (desktop center) */}
                  <div className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex-shrink-0 flex flex-col items-center`}>
                    <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center font-extrabold text-xs shadow-md z-10 ${
                      m.done
                        ? 'bg-psg-blue border-white text-white shadow-psg-blue/30'
                        : 'bg-white border-gray-200 text-gray-400'
                    }`}>
                      {m.year !== '—' ? m.year.slice(-2) : '★'}
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
        <div className="anim mt-16 bg-psg-navy rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6" style={{ transitionDelay: '580ms' }}>
          <div className="w-16 h-16 bg-psg-red/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">🏆</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-extrabold text-xl mb-1">1 Juta Ton LPG Diproduksi</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Sejak fase komersial 1 Mei 2013 hingga Oktober 2018 — pencapaian bersejarah yang membuktikan
              kapabilitas operasional PT Perta-Samtan Gas dalam mendukung ketahanan energi nasional.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex-shrink-0"
          >
            Hubungi Kami
          </button>
        </div>

      </div>
    </section>
  );
}
