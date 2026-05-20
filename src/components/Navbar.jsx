import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Navbar() {
  const { content } = useContent();
  const nav = content.navbar;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Scroll ke section setelah navigasi dari halaman lain (mis. /berita → /#tentang)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const goto = (href) => {
    setMobileOpen(false);
    setDropdown(null);
    if (!href || href === '#') return;
    if (href.startsWith('http')) { window.open(href, '_blank', 'noreferrer'); return; }
    if (href.startsWith('/berita')) { navigate(href); return; }
    const target = href.startsWith('#') ? href : `#${href}`;
    if (pathname !== '/') {
      navigate('/' + target);
      return;
    }
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = nav?.menuItems || [];

  return (
    <>
      {/* Top strip */}
      {nav?.showTopStrip !== false && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-psg-navy text-white hidden lg:block h-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
            <span className="text-[11px] text-blue-200 tracking-wide">
              {nav?.topStrip || 'PT Perta-Samtan Gas'}
            </span>
            <a
              href="tel:+6271157407001"
              className="flex items-center gap-1.5 text-[11px] text-blue-200 hover:text-white transition-colors"
            >
              <Phone size={11} />
              +62-711 5740701
            </a>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 ${
          nav?.showTopStrip !== false ? 'lg:top-8' : ''
        } ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,.08)]'
            : 'bg-white/98 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => goto('#beranda')}
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label={nav?.brandName || 'PT Perta-Samtan Gas'}
            >
              <div className="flex flex-col gap-[3px]">
                <div className="h-[6px] w-10 bg-psg-red rounded-sm" />
                <div className="h-[6px] w-10 bg-psg-blue rounded-sm" />
                <div className="h-[6px] w-10 bg-psg-green rounded-sm" />
              </div>
              <div className="-space-y-0.5">
                <div className="text-[13px] font-bold text-gray-500 leading-none tracking-wider uppercase">
                  {nav?.brandName || 'Perta-Samtan'}
                </div>
                <div className="text-[19px] font-black text-psg-navy leading-none tracking-tight">
                  {nav?.brandSub || 'GAS'}
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {menuItems.map((link) => (
                <div key={link.label} className="relative" onMouseLeave={() => setDropdown(null)}>
                  {link.children ? (
                    <button
                      type="button"
                      onMouseEnter={() => setDropdown(link.label)}
                      className={`flex items-center gap-1 px-3.5 py-5 text-[13px] font-medium transition-colors border-b-2 ${
                        dropdown === link.label
                          ? 'text-psg-blue border-psg-blue'
                          : 'text-gray-700 border-transparent hover:text-psg-blue hover:border-psg-blue'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => goto(link.link)}
                      className="flex items-center px-3.5 py-5 text-[13px] font-medium text-gray-700 hover:text-psg-blue border-b-2 border-transparent hover:border-psg-blue transition-all"
                    >
                      {link.label}
                    </button>
                  )}

                  {link.children && dropdown === link.label && (
                    <div
                      className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl overflow-hidden"
                      onMouseEnter={() => setDropdown(link.label)}
                    >
                      {link.children.map((c) => (
                        <button
                          key={c.label}
                          type="button"
                          onClick={() => goto(c.link || c.href)}
                          className="w-full text-left px-5 py-3 text-[13px] text-gray-700 hover:bg-psg-light hover:text-psg-blue border-l-2 border-transparent hover:border-psg-blue transition-all block"
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={() => goto(nav?.ctaLink || '#kontak')}
                className="btn-primary shadow-sm"
              >
                {nav?.ctaLabel || 'Hubungi Kami'}
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 ${
            mobileOpen ? 'max-h-[600px]' : 'max-h-0'
          }`}
        >
          <div className="bg-white px-4 py-3 space-y-0.5">
            {menuItems.map((link) => (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => goto(link.link)}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-psg-blue hover:bg-psg-light rounded-lg transition-colors"
                >
                  {link.label}
                </button>
                {link.children?.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => goto(c.link || c.href)}
                    className="w-full text-left pl-7 pr-3 py-2 text-sm text-gray-500 hover:text-psg-blue hover:bg-psg-light rounded-lg transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <button
                type="button"
                onClick={() => goto(nav?.ctaLink || '#kontak')}
                className="w-full btn-primary justify-center flex"
              >
                {nav?.ctaLabel || 'Hubungi Kami'}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
