import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

export default function EditFacilities() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState(content.facilities.map((f) => ({ ...f })));

  function setItem(i, k, v) {
    setItems((prev) => prev.map((f, idx) => (idx === i ? { ...f, [k]: v } : f)));
  }
  function addItem() {
    setItems((p) => [...p, { title: '', label: '', location: '', desc: '', image: '', spec1k: '', spec1v: '', spec2k: '', spec2v: '', spec3k: '', spec3v: '' }]);
  }
  function removeItem(i) { setItems((p) => p.filter((_, idx) => idx !== i)); }

  return (
    <EditorShell
      title="Fasilitas"
      icon="🏭"
      onSave={() => updateSection('facilities', items)}
      onReset={() => { resetSection('facilities'); setItems(content.facilities.map((f) => ({ ...f }))); }}
    >
      {items.map((item, i) => (
        <Section key={i} title={`Fasilitas ${i + 1}: ${item.title || '(belum ada judul)'}`}>
          <Grid2>
            <Field label="Judul Fasilitas" value={item.title} onChange={(v) => setItem(i, 'title', v)} />
            <Field label="Label (sub)" value={item.label} onChange={(v) => setItem(i, 'label', v)} placeholder="cth: Extraction Plant" />
          </Grid2>
          <Field label="Lokasi" value={item.location} onChange={(v) => setItem(i, 'location', v)} />
          <TextArea label="Deskripsi" value={item.desc} onChange={(v) => setItem(i, 'desc', v)} rows={2} />
          <Field
            label="URL Gambar"
            value={item.image}
            onChange={(v) => setItem(i, 'image', v)}
            hint="Letakkan file di folder public/ lalu isi /nama-file.png, atau gunakan URL eksternal"
            placeholder="/KilangEkstraksi.png"
          />
          {item.image && (
            <img src={item.image} alt="preview" className="w-40 h-24 object-cover rounded-lg border border-gray-200" />
          )}
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Spesifikasi (3 baris)</p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-2">
                <input
                  type="text"
                  placeholder={`Label ${n}`}
                  value={item[`spec${n}k`]}
                  onChange={(e) => setItem(i, `spec${n}k`, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
                />
                <input
                  type="text"
                  placeholder={`Nilai ${n}`}
                  value={item[`spec${n}v`]}
                  onChange={(e) => setItem(i, `spec${n}v`, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
                />
              </div>
            ))}
          </div>
          {items.length > 1 && (
            <div className="text-right">
              <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600 text-sm font-medium">🗑 Hapus Fasilitas</button>
            </div>
          )}
        </Section>
      ))}
      <button onClick={addItem} className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition">
        + Tambah Fasilitas
      </button>
    </EditorShell>
  );
}
