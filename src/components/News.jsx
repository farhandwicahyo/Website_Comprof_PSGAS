import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const TAG_STYLES = [
  'text-psg-blue bg-psg-blue/10',
  'text-psg-red bg-psg-red/10',
  'text-[#6b7a19] bg-psg-green/15',
  'text-gray-600 bg-gray-100',
  'text-purple-700 bg-purple-50',
];

function tagStyle(cat) {
  const map = {
    'Korporat': TAG_STYLES[0],
    'Operasional': TAG_STYLES[1],
    'HSSE': TAG_STYLES[2],
    'CSR': TAG_STYLES[3],
  };
  return map[cat] || TAG_STYLES[4];
}

export default function News() {
  const ref = useScrollAnimationMultiple();
  const { content } = useContent();

  // Only published, max 5
  const published = (content.news || []).filter((n) => n.published !== false);
  const featured = published[0];
  const rest = published.slice(1, 5);

  if (!featured) return null;

  return (
    <section id="berita" className="py-24 lg:py-32 section-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="anim"><span className="section-label">Update Terbaru</span></div>
            <h2 className="anim section-heading" style={{ transitionDelay: '80ms' }}>Berita Terkini</h2>
          </div>
          {/* <Link
            to="/berita"
            className="anim group inline-flex items-center gap-2 text-sm font-semibold text-psg-blue hover:text-psg-navy transition-colors"
            style={{ transitionDelay: '140ms' }}
          >
            Semua Berita
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link> */}
        </div>

        {/* Layout: Featured left + right column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Featured article */}
          <Link
            to={`/berita/${featured.id}`}
            className="anim-l lg:col-span-3 group card overflow-hidden flex flex-col"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative h-72 img-zoom overflow-hidden flex-shrink-0">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/80 via-psg-navy/20 to-transparent" />
              <span className={`absolute top-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full ${tagStyle(featured.cat)}`}>
                {featured.cat}
              </span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 flex-wrap">
                <span className="flex items-center gap-1.5"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{featured.read} baca</span>
                {featured.author && <span className="flex items-center gap-1.5"><User size={12} />{featured.author}</span>}
              </div>
              <h3 className="font-extrabold text-psg-navy text-xl leading-tight mb-3 group-hover:text-psg-blue transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-psg-blue group-hover:gap-3 transition-all">
                Baca Selengkapnya <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((n, i) => (
              <Link
                key={n.id}
                to={`/berita/${n.id}`}
                className="anim-r group card overflow-hidden flex flex-row"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative w-28 flex-shrink-0 img-zoom overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-psg-navy/20" />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagStyle(n.cat)}`}>{n.cat}</span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 ml-auto">
                      <Calendar size={10} />{n.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-psg-navy text-sm leading-snug mb-1.5 group-hover:text-psg-blue transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{n.excerpt}</p>
                </div>
              </Link>
            ))}

            {/* See all button */}
            <Link
              to="/berita"
              className="anim-r group mt-auto border-2 border-dashed border-psg-border hover:border-psg-blue rounded-xl p-4 flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 hover:text-psg-blue transition-all"
              style={{ transitionDelay: `${(rest.length + 1) * 100}ms` }}
            >
              Lihat Semua Berita
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
