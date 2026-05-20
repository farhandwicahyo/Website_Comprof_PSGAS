import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field } from '../EditorShell';

function Toggle({ label, checked, onChange, hint }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        {hint && <p className="text-xs text-gray-400 mt-0.5">{hint}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ml-6 ${checked ? 'bg-[#0075BF]' : 'bg-gray-200'}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );
}

export default function EditSettings() {
  const { content, updateSection, resetSection } = useContent();
  const [settings, setSettings] = useState({ ...content.settings });
  const [contact, setContact] = useState({ ...content.contact });

  function setS(k) { return (v) => setSettings((f) => ({ ...f, [k]: v })); }
  function setToggleS(k) { return (v) => setSettings((f) => ({ ...f, [k]: v })); }
  function setC(k) { return (v) => setContact((f) => ({ ...f, [k]: v })); }
  function setToggleC(k) { return (v) => setContact((f) => ({ ...f, [k]: v })); }

  function handleSave() {
    updateSection('settings', settings);
    updateSection('contact', contact);
  }
  function handleReset() {
    resetSection('settings');
    resetSection('contact');
    setSettings({ ...content.settings });
    setContact({ ...content.contact });
  }

  return (
    <EditorShell title="Pengaturan Global" icon="⚙️" onSave={handleSave} onReset={handleReset}>
      <Section title="Identitas Website">
        <Field label="Nama Website / Perusahaan" value={settings.siteName} onChange={setS('siteName')} />
        <Field label="Tagline" value={settings.siteTagline} onChange={setS('siteTagline')} />
      </Section>

      <Section title="Fitur Umum">
        <Toggle
          label="Tombol Scroll to Top"
          checked={settings.showScrollToTop !== false}
          onChange={setToggleS('showScrollToTop')}
          hint="Tombol bulat di pojok kanan bawah untuk kembali ke atas"
        />
      </Section>

      <Section title="Media Sosial">
        <p className="text-xs text-gray-400 mb-3">Isi URL profil media sosial. Kosongkan untuk menyembunyikan ikon tersebut di footer.</p>
        <Field label="Facebook" value={contact.socialFacebook || ''} onChange={setC('socialFacebook')} placeholder="https://facebook.com/..." />
        <Field label="Instagram" value={contact.socialInstagram || ''} onChange={setC('socialInstagram')} placeholder="https://instagram.com/..." />
        <Field label="LinkedIn" value={contact.socialLinkedin || ''} onChange={setC('socialLinkedin')} placeholder="https://linkedin.com/..." />
        <Field label="YouTube" value={contact.socialYoutube || ''} onChange={setC('socialYoutube')} placeholder="https://youtube.com/..." />
        <Field label="X / Twitter" value={contact.socialX || ''} onChange={setC('socialX')} placeholder="https://x.com/..." />
      </Section>

      <Section title="Footer Tambahan">
        <Toggle
          label="Tampilkan Strip Kantor Perwakilan Jakarta"
          checked={contact.showLiaisonStrip !== false}
          onChange={setToggleC('showLiaisonStrip')}
        />
      </Section>
    </EditorShell>
  );
}
