import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Calendar, Clock, User } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const TAG_STYLES = {
  'Korporat': 'text-psg-blue bg-psg-blue/10',
  'Operasional': 'text-psg-red bg-psg-red/10',
  'HSSE': 'text-[#6b7a19] bg-psg-green/15',
  'CSR': 'text-gray-600 bg-gray-100',
};
function tagStyle(cat) { return TAG_STYLES[cat] || 'text-purple-700 bg-purple-50'; }

const PAGE_SIZE = 9;

export default function NewsPage() {
  const { content } = useContent();
  const allNews = useMemo(
    () => (content.news || []).filter((n) => n.published !== false),
    [content.news]
  );

  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(allNews.map((n) => n.cat)))],
    [allNews]
  );

  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('Semua');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = allNews;
    if (cat !== 'Semua') result = result.filter((n) => n.cat === cat);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [allNews, cat, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCat(c) { setCat(c); setPage(1); }
  function handleSearch(e) { setSearch(e.target.value); setPage(1); }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Page hero */}
      <div className="bg-psg-navy text-white">
        {/* Brand stripe */}
        <div className="flex h-1">
          <div className="flex-1 bg-psg-red" />
          <div className="flex-[2.5] bg-psg-blue" />
          <div className="flex-1 bg-psg-green" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <Link
            to="/#berita"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={15} /> Kembali ke Beranda
          </Link> */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-2">Ruang Redaksi</p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Berita &amp; Artikel
              </h1>
              <p className="text-blue-200 mt-2 text-sm">
                {filtered.length} artikel ditemukan
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Cari judul atau kata kunci..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-white border-b border-gray-100 sticky top-16 lg:top-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleCat(c)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  cat === c
                    ? 'bg-psg-blue text-white shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {paginated.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-lg font-semibold text-gray-600">Tidak ada artikel ditemukan.</p>
            <p className="text-sm text-gray-400 mt-1">Coba ubah kata kunci atau kategori.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((n) => (
              <Link
                key={n.id}
                to={`/berita/${n.id}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-psg-blue hover:shadow-xl transition-all duration-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-4 left-4 text-[11px] font-bold px-2.5 py-1 rounded-full ${tagStyle(n.cat)}`}>
                    {n.cat}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3 flex-wrap">
                    <span className="flex items-center gap-1"><Calendar size={11} />{n.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{n.read} baca</span>
                  </div>
                  <h2 className="font-bold text-psg-navy text-base leading-snug mb-2 group-hover:text-psg-blue transition-colors line-clamp-2 flex-1">
                    {n.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{n.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    {n.author && (
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <User size={11} />{n.author}
                      </span>
                    )}
                    <span className="ml-auto text-xs font-semibold text-psg-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition"
            >
              <ArrowLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold transition ${
                  p === page
                    ? 'bg-psg-blue text-white shadow-sm'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
