import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, Grid2 } from '../EditorShell';

function Toggle({ label, checked, onChange, hint }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        {hint && <p className="text-xs text-gray-400">{hint}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ml-4 ${checked ? 'bg-[#0075BF]' : 'bg-gray-200'}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );
}

export default function EditNavbar() {
  const { content, updateSection, resetSection } = useContent();
  const [form, setForm] = useState({ ...content.navbar });
  const [menuItems, setMenuItems] = useState(content.navbar.menuItems.map((m) => ({ ...m })));

  function set(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }
  function setToggle(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }

  function setMenuItem(i, k, v) {
    setMenuItems((prev) => prev.map((m, idx) => (idx === i ? { ...m, [k]: v } : m)));
  }
  function addMenuItem() { setMenuItems((p) => [...p, { label: 'Menu Baru', link: '#' }]); }
  function removeMenuItem(i) { setMenuItems((p) => p.filter((_, idx) => idx !== i)); }
  function moveMenuItem(i, dir) {
    const copy = [...menuItems];
    const j = i + dir;
    if (j < 0 || j >= copy.length) return;
    [copy[i], copy[j]] = [copy[j], copy[i]];
    setMenuItems(copy);
  }

  function handleSave() { updateSection('navbar', { ...form, menuItems }); }
  function handleReset() { resetSection('navbar'); setForm({ ...content.navbar }); setMenuItems(content.navbar.menuItems.map((m) => ({ ...m }))); }

  return (
    <EditorShell title="Navbar" icon="🗂️" onSave={handleSave} onReset={handleReset}>
      <Section title="Identitas Brand">
        <Grid2>
          <Field label="Nama Brand (baris 1)" value={form.brandName} onChange={set('brandName')} hint="Baris kecil di atas" />
          <Field label="Nama Brand (baris 2 besar)" value={form.brandSub} onChange={set('brandSub')} hint="Baris besar" />
        </Grid2>
      </Section>

      <Section title="Strip Info Atas">
        <Toggle
          label="Tampilkan Strip Info"
          checked={form.showTopStrip !== false}
          onChange={setToggle('showTopStrip')}
          hint="Teks banner kecil di bagian paling atas halaman"
        />
        {form.showTopStrip !== false && (
          <Field label="Teks Strip" value={form.topStrip} onChange={set('topStrip')} />
        )}
      </Section>

      <Section title="Tombol CTA di Navbar">
        <Grid2>
          <Field label="Label Tombol" value={form.ctaLabel} onChange={set('ctaLabel')} placeholder="cth: Hubungi Kami" />
          <Field label="Link Tujuan" value={form.ctaLink} onChange={set('ctaLink')} placeholder="cth: #kontak atau https://..." />
        </Grid2>
        <p className="text-xs text-gray-400">Gunakan <code className="bg-gray-100 px-1 rounded">#section-id</code> untuk scroll ke section, atau URL lengkap untuk halaman lain.</p>
      </Section>

      <Section title="Item Menu Navigasi">
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2">
              {/* Drag order */}
              <div className="flex flex-col gap-0.5 flex-shrink-0">
                <button onClick={() => moveMenuItem(i, -1)} disabled={i === 0} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 leading-none text-xs">▲</button>
                <button onClick={() => moveMenuItem(i, 1)} disabled={i === menuItems.length - 1} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 leading-none text-xs">▼</button>
              </div>
              <span className="text-xs text-gray-400 w-5 text-center">{i + 1}</span>
              <input
                type="text"
                value={item.label}
                onChange={(e) => setMenuItem(i, 'label', e.target.value)}
                placeholder="Label menu"
                className="flex-1 min-w-0 px-2 py-1.5 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
              <input
                type="text"
                value={item.link}
                onChange={(e) => setMenuItem(i, 'link', e.target.value)}
                placeholder="#section atau /halaman"
                className="flex-1 min-w-0 px-2 py-1.5 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
              <button onClick={() => removeMenuItem(i)} className="text-red-400 hover:text-red-600 text-lg leading-none px-1 flex-shrink-0">×</button>
            </div>
          ))}
        </div>
        <button onClick={addMenuItem} className="text-sm text-[#0075BF] hover:underline font-medium mt-2">
          + Tambah Item Menu
        </button>
        <p className="text-xs text-gray-400 mt-1">Gunakan <code className="bg-gray-100 px-1 rounded">#id-section</code> untuk scroll, atau <code className="bg-gray-100 px-1 rounded">/halaman</code> untuk navigasi.</p>
      </Section>
    </EditorShell>
  );
}
