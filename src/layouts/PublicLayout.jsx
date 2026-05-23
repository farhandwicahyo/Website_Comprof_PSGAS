import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContent } from '../context/ContentContext';

function ScrollTop() {
  useEffect(() => {
    const btn = document.getElementById('stb');
    const fn = () => { if (btn) btn.style.opacity = window.scrollY > 500 ? '1' : '0'; };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <button
      id="stb"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
      style={{ opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-psg-blue hover:bg-psg-navy rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white stroke-2 fill-none">
        <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function PublicLayout() {
  const { pathname } = useLocation();
  const { content } = useContent();
  const settings = content.settings || {};
  const isHome = pathname === '/';

  // Scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-20 lg:pt-24'}`}>
        <Outlet />
      </main>
      <Footer />
      {settings.showScrollToTop !== false && <ScrollTop />}
    </div>
  );
}
