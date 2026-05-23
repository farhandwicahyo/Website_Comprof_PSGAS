import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const SECTIONS_SETTINGS = [
  { to: '/admin/settings', icon: '⚙️', label: 'Pengaturan Global', desc: 'Nama site, media sosial, fitur umum', badge: null },
  { to: '/admin/sections', icon: '👁️', label: 'Visibilitas Section', desc: 'Aktifkan atau nonaktifkan section website', badge: 'Baru' },
  { to: '/admin/navbar', icon: '🗂️', label: 'Navbar & Menu', desc: 'Brand, menu navigasi, tombol CTA navbar', badge: 'Baru' },
];

const SECTIONS_CONTENT = [
  { to: '/admin/hero',       icon: '🖼️',  label: 'Hero / Cover',            desc: 'Judul utama, CTA dengan link, statistik' },
  { to: '/admin/about',      icon: '🏢',  label: 'Tentang Perusahaan',       desc: 'Profil, visi, misi, tujuan perseroan' },
  { to: '/admin/process',    icon: '⚗️',  label: 'Proses Bisnis',            desc: 'Langkah-langkah pengolahan gas' },
  { to: '/admin/facilities', icon: '🏭',  label: 'Fasilitas',                desc: 'Kilang, pipa NGL, depot & jetty' },
  { to: '/admin/products',   icon: '📦',  label: 'Produk',                   desc: 'LPG Mixed, Kondensat' },
  { to: '/admin/partners',   icon: '🤝',  label: 'Ekosistem & Mitra',        desc: 'Logo mitra di marquee animasi' },
  { to: '/admin/awards',     icon: '🏆',  label: 'Penghargaan & Pengakuan',  desc: 'Kartu penghargaan di carousel arc 3D' },
  { to: '/admin/roadmap',    icon: '🗺️',  label: 'Perjalanan Kami',          desc: 'Timeline milestone pencapaian perusahaan' },
  { to: '/admin/contribute', icon: '🤲',  label: 'Kontribusi & Kegiatan',    desc: 'Foto CSR/kegiatan sosial — carousel & galeri' },
  { to: '/admin/news',       icon: '📰',  label: 'Berita',                   desc: 'Artikel terbaru dan press release' },
  { to: '/admin/contact',    icon: '📞',  label: 'Kontak & Footer',          desc: 'Telepon, alamat, info kaki halaman' },
];

function SectionCard({ to, icon, label, desc, badge, isVisible }) {
  return (
    <Link
      to={to}
      className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0075BF] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 bg-blue-50 group-hover:bg-[#0075BF]/10 rounded-xl flex items-center justify-center text-xl transition flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-semibold text-gray-800 group-hover:text-[#0075BF] transition text-sm">{label}</p>
            {badge && (
              <span className="text-[10px] font-bold bg-[#E03A3E] text-white px-2 py-0.5 rounded-full">{badge}</span>
            )}
            {isVisible === false && (
              <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">Disembunyikan</span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="text-xs text-[#0075BF] font-medium group-hover:underline">Edit konten →</span>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const { content, resetAll } = useContent();
  const sec = content.sections || {};

  const visibleCount = Object.values(sec).filter((s) => s.visible).length;
  const totalCount = Object.values(sec).length;

  function handleResetAll() {
    if (window.confirm('Reset semua konten ke nilai bawaan? Tindakan ini tidak dapat dibatalkan.')) {
      resetAll();
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#003060]">Dashboard CMS</h1>
          <p className="text-gray-500 mt-1">Kelola seluruh konten website PT Perta-Samtan Gas</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <a href="/" target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#0075BF] border border-[#D6E8F5] hover:border-[#0075BF] bg-[#E8F5FD] hover:bg-blue-50 px-4 py-2 rounded-lg transition font-medium">
            🌐 Lihat Website
          </a>
          <button onClick={handleResetAll}
            className="text-sm text-red-600 hover:text-red-800 border border-red-200 hover:border-red-400 px-4 py-2 rounded-lg transition font-medium">
            🔄 Reset Semua
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {[
          { val: `${visibleCount}/${totalCount}`, label: 'Section Aktif',    color: 'text-green-600  bg-green-50  border-green-100'  },
          { val: content.news?.length        || 0, label: 'Artikel Berita',  color: 'text-blue-600   bg-blue-50   border-blue-100'   },
          { val: content.facilities?.length  || 0, label: 'Fasilitas',       color: 'text-orange-600 bg-orange-50 border-orange-100' },
          { val: content.products?.length    || 0, label: 'Produk',          color: 'text-purple-600 bg-purple-50 border-purple-100' },
          { val: content.partners?.length    || 0, label: 'Mitra',           color: 'text-teal-600   bg-teal-50   border-teal-100'   },
          { val: content.awards?.length      || 0, label: 'Penghargaan',     color: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl border p-4 ${s.color}`}>
            <div className="text-2xl font-extrabold">{s.val}</div>
            <div className="text-xs font-medium mt-0.5 opacity-70">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pengaturan */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Pengaturan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SECTIONS_SETTINGS.map((s) => (
          <SectionCard key={s.to} {...s} />
        ))}
      </div>

      {/* Konten */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Konten Website</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS_CONTENT.map((s) => {
          const key = s.to.replace('/admin/', '');
          const secKey = key === 'contact' ? null : key;
          const isVisible = secKey ? sec[secKey]?.visible : undefined;
          return <SectionCard key={s.to} {...s} isVisible={isVisible} />;
        })}
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        Perubahan disimpan di browser (localStorage). Untuk produksi, integrasikan dengan backend API.
      </p>
    </div>
  );
}
