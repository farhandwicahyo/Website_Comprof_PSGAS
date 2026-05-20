import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

export default function EditProducts() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState(content.products.map((p) => ({ ...p })));

  function setItem(i, k, v) {
    setItems((prev) => prev.map((p, idx) => (idx === i ? { ...p, [k]: v } : p)));
  }
  function addItem() {
    setItems((p) => [...p, { no: String(p.length + 1).padStart(2, '0'), icon: '📦', title: '', sub: '', desc: '', stat: '', color: 'psg-blue' }]);
  }
  function removeItem(i) { setItems((p) => p.filter((_, idx) => idx !== i)); }

  return (
    <EditorShell
      title="Produk"
      icon="📦"
      onSave={() => updateSection('products', items)}
      onReset={() => { resetSection('products'); setItems(content.products.map((p) => ({ ...p }))); }}
    >
      {items.map((item, i) => (
        <Section key={i} title={`Produk ${i + 1}: ${item.title || '(belum ada judul)'}`}>
          <Grid2>
            <div className="flex gap-3">
              <div className="w-16">
                <label className="block text-xs text-gray-500 mb-1">No</label>
                <input type="text" value={item.no} onChange={(e) => setItem(i, 'no', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]" />
              </div>
              <div className="w-16">
                <label className="block text-xs text-gray-500 mb-1">Icon</label>
                <input type="text" value={item.icon} onChange={(e) => setItem(i, 'icon', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#0075BF]" />
              </div>
              <div className="flex-1">
                <Field label="Judul" value={item.title} onChange={(v) => setItem(i, 'title', v)} />
              </div>
            </div>
            <div className="space-y-3">
              <Field label="Sub-judul" value={item.sub} onChange={(v) => setItem(i, 'sub', v)} placeholder="cth: Propane + Butane" />
              <Field label="Statistik / Angka" value={item.stat} onChange={(v) => setItem(i, 'stat', v)} placeholder="cth: 710 MT/Hari" />
            </div>
          </Grid2>
          <TextArea label="Deskripsi" value={item.desc} onChange={(v) => setItem(i, 'desc', v)} rows={3} />
          <div className="flex items-center justify-between">
            <Field label="Warna (Tailwind class)" value={item.color} onChange={(v) => setItem(i, 'color', v)} placeholder="psg-red / psg-blue" />
            {items.length > 1 && (
              <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600 text-sm mt-5 ml-4 font-medium">🗑 Hapus</button>
            )}
          </div>
        </Section>
      ))}
      <button onClick={addItem} className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition">
        + Tambah Produk
      </button>
    </EditorShell>
  );
}
