import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const TAG_STYLES = {
  'Korporat': 'text-psg-blue bg-psg-blue/10 border-psg-blue/20',
  'Operasional': 'text-psg-red bg-psg-red/10 border-psg-red/20',
  'HSSE': 'text-[#6b7a19] bg-psg-green/15 border-psg-green/30',
  'CSR': 'text-gray-600 bg-gray-100 border-gray-200',
};
function tagStyle(cat) { return TAG_STYLES[cat] || 'text-purple-700 bg-purple-50 border-purple-200'; }

/** Render plain text with paragraph breaks */
function ArticleBody({ text }) {
  if (!text) return null;
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-5 text-[17px] leading-[1.85]">{p.trim()}</p>
      ))}
    </div>
  );
}

export default function NewsDetail() {
  const { id } = useParams();
  const { content } = useContent();

  const article = useMemo(
    () => (content.news || []).find((n) => String(n.id) === String(id) && n.published !== false),
    [content.news, id]
  );

  const related = useMemo(
    () =>
      (content.news || [])
        .filter((n) => n.published !== false && String(n.id) !== String(id))
        .slice(0, 3),
    [content.news, id]
  );

  if (!article) return <Navigate to="/berita" replace />;

  return (
    <div className="min-h-full bg-white">
      {/* Hero image */}
      <div className="relative h-64 sm:h-80 lg:h-[480px] overflow-hidden bg-psg-navy">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-psg-navy/90 via-psg-navy/40 to-transparent" />
        {/* Brand stripe */}
        <div className="absolute top-0 left-0 right-0 flex h-1">
          <div className="flex-1 bg-psg-red" />
          <div className="flex-[2.5] bg-psg-blue" />
          <div className="flex-1 bg-psg-green" />
        </div>
        {/* Category badge */}
        <div className="absolute bottom-6 left-4 sm:left-8">
          <span className={`inline-block text-sm font-bold px-4 py-1.5 rounded-full border ${tagStyle(article.cat)}`}>
            {article.cat}
          </span>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 xl:gap-16">

          {/* Article content */}
          <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-psg-blue transition-colors">Beranda</Link>
              <span>/</span>
              <Link to="/berita" className="hover:text-psg-blue transition-colors">Berita</Link>
              <span>/</span>
              <span className="text-gray-600 line-clamp-1">{article.title}</span>
            </nav>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-psg-navy leading-[1.2] mb-6">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-2"><Calendar size={15} className="text-psg-blue" />{article.date}</span>
              <span className="flex items-center gap-2"><Clock size={15} className="text-psg-blue" />{article.read} baca</span>
              {article.author && (
                <span className="flex items-center gap-2"><User size={15} className="text-psg-blue" />{article.author}</span>
              )}
            </div>

            {/* Lead / excerpt */}
            <p className="text-lg text-psg-navy font-medium leading-relaxed mb-8 pl-4 border-l-4 border-psg-red bg-psg-light rounded-r-xl py-4 pr-4">
              {article.excerpt}
            </p>

            {/* Body */}
            <ArticleBody text={article.content} />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-3 flex-wrap">
              <Tag size={15} className="text-gray-400" />
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tagStyle(article.cat)}`}>{article.cat}</span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-gray-50">PT Perta-Samtan Gas</span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-gray-50">LPG</span>
            </div>

            {/* Back button */}
            <div className="mt-10 flex items-center gap-4">
              <Link
                to="/berita"
                className="inline-flex items-center gap-2 text-sm font-semibold text-psg-blue hover:text-psg-navy border border-psg-border hover:border-psg-blue px-5 py-2.5 rounded-xl transition-all"
              >
                <ArrowLeft size={15} /> Semua Berita
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-psg-navy px-5 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
              >
                Beranda
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* About company card */}
            <div className="bg-psg-navy text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex flex-col gap-[3px]">
                  <div className="h-[4px] w-7 bg-psg-red rounded-sm" />
                  <div className="h-[4px] w-7 bg-psg-blue rounded-sm" />
                  <div className="h-[4px] w-7 bg-psg-green rounded-sm" />
                </div>
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Tentang Kami</span>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                PT Perta-Samtan Gas adalah perusahaan pengolahan gas bumi dengan kapasitas desain 250 MMSCFD,
                mendukung program konversi energi dan ketahanan energi nasional Indonesia.
              </p>
              <Link
                to="/#tentang"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
              >
                Profil Lengkap <ArrowRight size={12} />
              </Link>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Berita Lainnya</h3>
                <div className="space-y-3">
                  {related.map((n) => (
                    <Link
                      key={n.id}
                      to={`/berita/${n.id}`}
                      className="group flex gap-3 p-3 rounded-xl border border-gray-100 hover:border-psg-blue hover:bg-blue-50/30 transition-all"
                    >
                      <img
                        src={n.img}
                        alt={n.title}
                        className="w-16 h-14 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagStyle(n.cat)}`}>{n.cat}</span>
                        <p className="text-xs font-semibold text-psg-navy group-hover:text-psg-blue mt-1 line-clamp-2 leading-snug transition-colors">
                          {n.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1"><Calendar size={9} />{n.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/berita"
                  className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-psg-blue hover:text-psg-navy border border-psg-border rounded-xl py-2.5 hover:border-psg-blue transition-all"
                >
                  Semua Berita <ArrowRight size={12} />
                </Link>
              </div>
            )}

            {/* Contact card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Pertanyaan Media</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Untuk pertanyaan media dan informasi lebih lanjut, hubungi tim Humas kami.
              </p>
              <a
                href="tel:+6271157407001"
                className="text-sm font-semibold text-psg-blue hover:text-psg-navy transition-colors"
              >
                +62-711 5740701
              </a>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
