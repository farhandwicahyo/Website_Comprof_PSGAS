import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';

function LangSwitch({ onHero }) {
  const { lang, setLang } = useLanguage();
  const isId = lang === 'id';

  return (
    <div
      role="group"
      aria-label="Pilih Bahasa / Select Language"
      className={`flex items-center rounded-full p-[3px] gap-0.5 select-none transition-all ${
        onHero
          ? 'bg-white/15 border border-white/30'
          : 'bg-gray-100 border border-gray-200'
      }`}
    >
      <button
        type="button"
        onClick={() => setLang('id')}
        aria-pressed={isId}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide transition-all duration-200 ${
          isId
            ? onHero
              ? 'bg-white text-psg-navy shadow-sm'
              : 'bg-psg-blue text-white shadow-sm'
            : onHero
              ? 'text-white/55 hover:text-white/80'
              : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span>🇮🇩</span>
        <span>IND</span>
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={!isId}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide transition-all duration-200 ${
          !isId
            ? onHero
              ? 'bg-white text-psg-navy shadow-sm'
              : 'bg-psg-blue text-white shadow-sm'
            : onHero
              ? 'text-white/55 hover:text-white/80'
              : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span>🇬🇧</span>
        <span>ENG</span>
      </button>
    </div>
  );
}

export default function Navbar() {
  const { content } = useContent();
  const { t } = useLanguage();
  const nav = content.navbar;
  const navT = t('nav');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [pathname]);

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
    if (href.startsWith('/#')) { navigate(href); return; }
    const target = href.startsWith('#') ? href : `#${href}`;
    if (pathname !== '/') {
      navigate('/' + target);
      return;
    }
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = navT.menuItems ?? nav?.menuItems ?? [];
  const onHero = pathname === '/' && !scrolled;
  const linkIdle = onHero
    ? 'text-white border-transparent hover:text-white/80 hover:border-white/80'
    : 'text-gray-700 border-transparent hover:text-psg-blue hover:border-psg-blue';
  const linkActive = onHero
    ? 'text-white border-white'
    : 'text-psg-blue border-psg-blue';

  return (
    <>
      {/* Top strip */}
      {nav?.showTopStrip !== false && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-psg-navy text-white hidden lg:block h-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
            <span className="text-[11px] text-blue-200 tracking-wide">
              {navT.topStrip}
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
          scrolled || pathname !== '/'
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => goto('#beranda')}
              className="flex items-center flex-shrink-0 group"
              aria-label={navT.brandName}
              style={{ height: "72px" }}
            >
              <img
                src="/logo.png"
                alt={navT.brandName}
                className="block"
                style={{height: "64px", width: "auto", maxWidth: "260px", objectFit: "contain", display: "block" }}
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {menuItems.map((link) => {
                const itemKey = link.link || link.label;
                return (
                <div key={itemKey} className="relative" onMouseLeave={() => setDropdown(null)}>
                  {link.children ? (
                    <button
                      type="button"
                      onMouseEnter={() => setDropdown(itemKey)}
                      className={`flex items-center gap-1 px-3.5 py-5 text-[13px] font-medium transition-colors border-b-2 ${
                        dropdown === itemKey ? linkActive : linkIdle
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${dropdown === itemKey ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => goto(link.link)}
                      className={`flex items-center px-3.5 py-5 text-[13px] font-medium border-b-2 transition-all ${linkIdle}`}
                    >
                      {link.label}
                    </button>
                  )}

                  {link.children && dropdown === itemKey && (
                    <div
                      className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl overflow-hidden"
                      onMouseEnter={() => setDropdown(itemKey)}
                    >
                      {link.children.map((c) => (
                        <button
                          key={c.link || c.href || c.label}
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
              );})}
            </nav>

            {/* Lang switch + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LangSwitch onHero={onHero} />
              <button
                type="button"
                onClick={() => goto(nav?.ctaLink || '#kontak')}
                className="btn-primary shadow-sm"
              >
                {navT.contact}
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                onHero ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={navT.menuAria}
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
              <div key={link.link || link.label}>
                <button
                  type="button"
                  onClick={() => goto(link.link)}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-psg-blue hover:bg-psg-light rounded-lg transition-colors"
                >
                  {link.label}
                </button>
                {link.children?.map((c) => (
                  <button
                    key={c.link || c.href || c.label}
                    type="button"
                    onClick={() => goto(c.link || c.href)}
                    className="w-full text-left pl-7 pr-3 py-2 text-sm text-gray-500 hover:text-psg-blue hover:bg-psg-light rounded-lg transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            ))}
            <div className="pt-2 pb-1 flex flex-col gap-2">
              <div className="flex justify-center">
                <LangSwitch onHero={false} />
              </div>
              <button
                type="button"
                onClick={() => goto(nav?.ctaLink || '#kontak')}
                className="w-full btn-primary justify-center flex"
              >
                {navT.contact}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
