import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

const EMPTY_AWARD = { title: '', org: '', desc: '', img: '' };

export default function EditAwards() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState((content.awards ?? []).map(a => ({ ...a })));

  function setItem(i, k, v) {
    setItems(prev => prev.map((a, idx) => (idx === i ? { ...a, [k]: v } : a)));
  }
  function addItem() { setItems(p => [...p, { ...EMPTY_AWARD }]); }
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
      title="Penghargaan & Pengakuan"
      icon="🏆"
      onSave={() => updateSection('awards', items)}
      onReset={() => { resetSection('awards'); setItems((content.awards ?? []).map(a => ({ ...a }))); }}
    >
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <span className="text-xl flex-shrink-0">💡</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">Carousel Arc 3D</p>
          <p className="text-sm text-amber-700 mt-0.5">
            Penghargaan ditampilkan dalam carousel arc 3D. Setiap kartu menampilkan foto/gambar, nama penyelenggara, dan
            judul penghargaan. Hover pada kartu tengah menampilkan deskripsi lengkap.
          </p>
        </div>
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-gray-400 text-sm">Belum ada penghargaan. Klik "+ Tambah Penghargaan" untuk memulai.</div>
      )}

      {items.map((item, i) => (
        <Section key={i} title={`Penghargaan ${i + 1}: ${item.title || '(belum ada judul)'}`}>
          <Grid2>
            <Field label="Judul Penghargaan" value={item.title} onChange={v => setItem(i, 'title', v)} placeholder="cth: Proper Hijau" />
            <Field label="Penyelenggara / Organisasi" value={item.org} onChange={v => setItem(i, 'org', v)} placeholder="cth: Kementerian LHK RI" />
          </Grid2>
          <TextArea label="Deskripsi (muncul saat hover)" value={item.desc} onChange={v => setItem(i, 'desc', v)} rows={2} />
          <Field
            label="URL Foto / Gambar Piagam"
            value={item.img}
            onChange={v => setItem(i, 'img', v)}
            hint="Gunakan URL gambar (Unsplash, CDN, atau file di /public) — dipakai sebagai latar belakang kartu carousel"
            placeholder="https://... atau /awards/piagam.jpg"
          />
          {item.img && (
            <div className="relative rounded-xl overflow-hidden aspect-video max-w-xs border border-gray-200">
              <img src={item.img} alt="preview" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/70 to-transparent flex items-end px-3 pb-2">
                <span className="text-white text-[10px] font-bold truncate">{item.title || 'Preview'}</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              <button type="button" onClick={() => moveItem(i, -1)} disabled={i === 0}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition">↑ Naik</button>
              <button type="button" onClick={() => moveItem(i, 1)} disabled={i === items.length - 1}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition">↓ Turun</button>
            </div>
            <button type="button" onClick={() => removeItem(i)}
              className="text-red-400 hover:text-red-600 text-sm font-medium transition">🗑 Hapus</button>
          </div>
        </Section>
      ))}

      <button type="button" onClick={addItem}
        className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition">
        + Tambah Penghargaan
      </button>
    </EditorShell>
  );
}
