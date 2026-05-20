import { Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const SocialIcons = {
  Facebook: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  X: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><circle cx="4" cy="4" r="2"/><rect x="2" y="9" width="4" height="12"/></svg>,
  YouTube: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
};

const LINKS = {
  'Perusahaan': [
    { l: 'Tentang Kami', h: '#tentang' },
    { l: 'Visi & Misi', h: '#tentang' },
    { l: 'Tata Nilai (AKHLAK)', h: '#kenapa' },
    { l: 'Pencapaian', h: '#roadmap' },
    { l: 'Karir', h: '#' },
  ],
  'Operasional': [
    { l: 'Proses Bisnis', h: '#proses' },
    { l: 'Kilang Prabumulih', h: '#fasilitas' },
    { l: 'Kilang Sungai Gerong', h: '#fasilitas' },
    { l: 'Pipa NGL', h: '#fasilitas' },
    { l: 'Distribusi LPG', h: '#fasilitas' },
  ],
  'Informasi': [
    { l: 'Produk LPG', h: '#produk' },
    { l: 'Berita & Artikel', h: '#berita' },
    { l: 'Penghargaan', h: '#pelanggan' },
    { l: 'GCG', h: '#' },
    { l: 'Hubungi Kami', h: '#kontak' },
  ],
};

export default function Footer() {
  const { content } = useContent();
  const ct = content.contact;
  const goto = (e, h) => { if (h !== '#') { e.preventDefault(); document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' }); } };

  return (
    <footer id="kontak" className="bg-psg-navy text-white">
      {/* Top accent */}
      <div className="flex h-1">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue" />
        <div className="flex-1 bg-psg-green" />
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex flex-col gap-[4px]">
                <div className="h-1.5 w-10 bg-psg-red rounded-sm" />
                <div className="h-1.5 w-10 bg-psg-blue rounded-sm" />
                <div className="h-1.5 w-10 bg-psg-green rounded-sm" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-blue-300 uppercase tracking-widest leading-none">Perta-Samtan</div>
                <div className="text-[20px] font-black text-white leading-tight">GAS</div>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xs">
              Perusahaan pengolahan gas bumi dengan kapasitas desain 250 MMSCFD, mendukung
              program konversi energi dan ketahanan energi nasional Indonesia.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-7">
              {[
                { icon: <Phone size={13} />, text: ct.phone1, sub: ct.phone1Sub, href: 'tel:+6271157407001' },
                { icon: <Phone size={13} />, text: ct.phone2, sub: ct.phone2Sub, href: 'tel:+6202157958218' },
                { icon: <Globe size={13} />, text: ct.website, sub: 'Website Resmi', href: `https://${ct.website}` },
                { icon: <MapPin size={13} />, text: ct.address, sub: ct.addressSub, href: null },
              ].map((c, i) => (
                <div key={i} className={`flex items-start gap-3 text-blue-200 text-sm ${c.href ? 'hover:text-white transition-colors cursor-pointer' : ''}`}
                  onClick={c.href ? () => window.open(c.href, '_blank') : undefined}>
                  <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-medium">{c.text}</div>
                    <div className="text-[11px] text-blue-400 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { key: 'socialFacebook', label: 'Facebook', Icon: SocialIcons.Facebook },
                { key: 'socialX', label: 'X', Icon: SocialIcons.X },
                { key: 'socialInstagram', label: 'Instagram', Icon: SocialIcons.Instagram },
                { key: 'socialLinkedin', label: 'LinkedIn', Icon: SocialIcons.LinkedIn },
                { key: 'socialYoutube', label: 'YouTube', Icon: SocialIcons.YouTube },
              ]
                .filter(({ key }) => ct[key] && ct[key] !== '')
                .map(({ key, label, Icon }) => (
                  <a key={key} href={ct[key]} aria-label={label} target="_blank" rel="noreferrer"
                    className="w-9 h-9 bg-white/8 hover:bg-psg-blue rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Icon />
                  </a>
                ))
              }
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300 mb-5">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.l}>
                    <a href={link.h} onClick={(e) => goto(e, link.h)}
                      className="text-blue-200 text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5 group">
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {link.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Liaison office strip */}
      {ct.showLiaisonStrip !== false && (
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-[11px] text-blue-400">
              <span className="font-bold text-blue-300 flex-shrink-0">Kantor Perwakilan Jakarta:</span>
              <span>{ct.liaisonAddress}</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-blue-400 text-xs">{ct.copyright}</span>
          <div className="flex items-center gap-5 text-xs text-blue-400">
            {['Kebijakan Privasi', 'Syarat & Ketentuan', 'GCG', 'Sitemap'].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
