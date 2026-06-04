import { Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';
import BrandLogo from './BrandLogo';

const SocialIcons = {
  Facebook: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  X: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><circle cx="4" cy="4" r="2"/><rect x="2" y="9" width="4" height="12"/></svg>,
  YouTube: () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
};

function OfficeLines({ address, phone }) {
  return (
    <>
      {address.split('\n').map((line) => (
        <div key={line} className="leading-snug">{line}</div>
      ))}
      <div className="mt-1 font-medium text-white">{phone}</div>
    </>
  );
}

export default function Footer() {
  const { content } = useContent();
  const { t } = useLanguage();
  const ct = content.contact ?? {};
  const nav = content.navbar ?? {};
  const footerT = t('footer');
  const LINKS = footerT.sections;
  const offices = Array.isArray(ct.offices) && ct.offices.length
    ? ct.offices
    : [];
  const goto = (e, h) => { if (h !== '#') { e.preventDefault(); document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' }); } };

  return (
    <footer id="kontak" className="bg-psg-navy text-white">
      <div className="flex h-1">
        <div className="flex-1 bg-psg-red" />
        <div className="flex-[2.5] bg-psg-blue" />
        <div className="flex-1 bg-psg-green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <div className="mb-6 brightness-0 invert">
              <BrandLogo
                alt="PT Perta-Samtan Gas"
                fullSrc={nav.logoUrl || '/logo.png'}
                markSrc={nav.logoMarkUrl || '/logo-web.png'}
                variant="footer"
              />
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xs">
              {footerT.desc}
            </p>

            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300 mb-4">
              {footerT.contactHeading || 'Hubungi Kami'}
            </h4>
            <div className="space-y-5 mb-7">
              {offices.map((office) => (
                <div key={office.label} className="flex items-start gap-3 text-blue-200 text-sm">
                  <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={13} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white mb-1">{office.label}</div>
                    <OfficeLines address={office.address} phone={office.phone} />
                  </div>
                </div>
              ))}
              {ct.website && (
                <a
                  href={`https://${ct.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-blue-200 text-sm hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe size={13} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{footerT.websiteLabel || footerT.websiteSub}</div>
                    <div className="mt-0.5">{ct.website}</div>
                  </div>
                </a>
              )}
            </div>

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

          {Object.entries(LINKS).map(([key, col]) => (
            <div key={key}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300 mb-5">{col.label}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
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

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-blue-400 text-xs">{ct.copyright}</span>
          <div className="flex items-center gap-5 text-xs text-blue-400">
            {footerT.legal.map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
