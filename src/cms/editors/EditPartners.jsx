import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, Grid2 } from '../EditorShell';

const EMPTY_PARTNER = { name: '', logo: '' };

export default function EditPartners() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState((content.partners ?? []).map(p => ({ ...p })));

  function setItem(i, k, v) {
    setItems(prev => prev.map((p, idx) => (idx === i ? { ...p, [k]: v } : p)));
  }
  function addItem() { setItems(p => [...p, { ...EMPTY_PARTNER }]); }
  function removeItem(i) { setItems(p => p.filter((_, idx) => idx !== i)); }
  function moveItem(i, dir) {
    setItems(prev => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  return (
    <EditorShell
      title="Ekosistem & Mitra"
      icon="🤝"
      onSave={() => updateSection('partners', items)}
      onReset={() => { resetSection('partners'); setItems((content.partners ?? []).map(p => ({ ...p }))); }}
    >
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
        <span className="text-xl flex-shrink-0">ℹ️</span>
        <div>
          <p className="text-sm font-semibold text-blue-800">Marquee Otomatis</p>
          <p className="text-sm text-blue-700 mt-0.5">
            Logo mitra ditampilkan dalam marquee (animasi geser) di halaman publik. Letakkan file logo di folder{' '}
            <code className="bg-blue-100 px-1 rounded">/public/partners/</code> lalu isi URL-nya di bawah.
          </p>
        </div>
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-gray-400 text-sm">Belum ada mitra. Klik "+ Tambah Mitra" untuk memulai.</div>
      )}

      {items.map((item, i) => (
        <Section key={i} title={`Mitra ${i + 1}: ${item.name || '(belum ada nama)'}`}>
          <Grid2>
            <Field label="Nama Perusahaan / Mitra" value={item.name} onChange={v => setItem(i, 'name', v)} placeholder="cth: Pertamina Gas Negara" />
            <Field
              label="URL Logo"
              value={item.logo}
              onChange={v => setItem(i, 'logo', v)}
              hint="Letakkan file di public/partners/ → isi /partners/nama-file.png, atau URL eksternal"
              placeholder="/partners/logo.png"
            />
          </Grid2>

          {item.logo && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <img src={item.logo} alt="preview" className="h-12 w-auto object-contain" />
              <span className="text-xs text-gray-400">Preview logo</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => moveItem(i, -1)}
                disabled={i === 0}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition"
              >↑ Naik</button>
              <button
                type="button"
                onClick={() => moveItem(i, 1)}
                disabled={i === items.length - 1}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition"
              >↓ Turun</button>
            </div>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-red-400 hover:text-red-600 text-sm font-medium transition"
            >🗑 Hapus</button>
          </div>
        </Section>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition"
      >
        + Tambah Mitra
      </button>
    </EditorShell>
  );
}
