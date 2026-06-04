import { useState } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';

const NAV = [
  { to: '/admin/dashboard', icon: '🏠', label: 'Dashboard', group: null },
  { group: 'Pengaturan', items: [
    { to: '/admin/settings', icon: '⚙️', label: 'Pengaturan Global' },
    { to: '/admin/sections', icon: '👁️', label: 'Visibilitas Section' },
    { to: '/admin/navbar',   icon: '🗂️', label: 'Navbar & Menu' },
  ]},
  { group: 'Konten', items: [
    { to: '/admin/hero',       icon: '🖼️', label: 'Hero / Cover' },
    { to: '/admin/about',      icon: '🏢', label: 'Tentang Perusahaan' },
    { to: '/admin/process',    icon: '⚗️', label: 'Proses Bisnis' },
    { to: '/admin/facilities', icon: '🏭', label: 'Fasilitas' },
    { to: '/admin/products',   icon: '📦', label: 'Produk' },
    { to: '/admin/partners',   icon: '🤝', label: 'Ekosistem & Mitra' },
    { to: '/admin/awards',     icon: '🏆', label: 'Penghargaan' },
    { to: '/admin/roadmap',    icon: '🗺️', label: 'Perjalanan Kami' },
    { to: '/admin/contribute', icon: '🤲', label: 'Kontribusi & Kegiatan' },
    { to: '/admin/news',       icon: '📰', label: 'Berita' },
    { to: '/admin/contact',    icon: '📞', label: 'Kontak & Footer' },
  ]},
];

export default function AdminLayout() {
  const { logout } = useAuth();
  const { content } = useContent();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const draftCount = (content.news || []).filter((n) => n.published === false).length;

  function handleLogout() {
    logout();
    navigate('/admin');
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#003060] text-white flex flex-col transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <img src="/logo-web.png" alt="PSG" className="h-8 w-auto object-contain" />
          {/* <div>
            <p className="text-[11px] font-bold leading-tight">PT Perta-Samtan Gas</p>
            <p className="text-[9px] text-white/50 leading-tight">Admin CMS</p>
          </div> */}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-2 space-y-0.5">
          {NAV.map((item, idx) => {
            if (item.group === null) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150
                    ${isActive ? 'bg-[#0075BF] text-white shadow-inner' : 'text-white/70 hover:bg-white/10 hover:text-white'}`
                  }
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </NavLink>
              );
            }
            return (
              <div key={idx}>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/30 px-3 pt-3 pb-1">{item.group}</p>
                {item.items.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150
                      ${isActive ? 'bg-[#0075BF] text-white shadow-inner' : 'text-white/70 hover:bg-white/10 hover:text-white'}`
                    }
                  >
                    <span className="text-sm">{sub.icon}</span>
                    <span className="flex-1">{sub.label}</span>
                    {sub.to === '/admin/news' && draftCount > 0 && (
                      <span className="text-[10px] font-bold bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full">{draftCount}</span>
                    )}
                  </NavLink>
                ))}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-2 py-2 border-t border-white/10 space-y-0.5">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            <span className="text-sm">🌐</span> Lihat Website
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] text-red-300 hover:bg-red-900/30 hover:text-red-200 transition"
          >
            <span className="text-sm">🚪</span> Keluar
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 h-14 flex items-center justify-between flex-shrink-0">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <span className="hidden sm:block text-sm text-gray-500">Logged in as</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003060] bg-blue-50 px-3 py-1 rounded-full">
              <span>👤</span> Admin
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
