import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

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

export default function EditNews() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState(content.news.map((n) => ({ ...n })));
  const [expandedId, setExpandedId] = useState(null);

  function setItem(i, k, v) {
    setItems((prev) => prev.map((n, idx) => (idx === i ? { ...n, [k]: v } : n)));
  }
  function addItem() {
    const newId = Math.max(...items.map((n) => n.id || 0), 0) + 1;
    setItems((p) => [
      ...p,
      {
        id: newId, published: false, cat: 'Korporat', date: '', read: '',
        author: 'Tim Redaksi PSG', title: '', excerpt: '', content: '', img: '',
      },
    ]);
    setExpandedId(newId);
  }
  function removeItem(i) {
    if (!window.confirm('Hapus artikel ini?')) return;
    setItems((p) => p.filter((_, idx) => idx !== i));
  }
  function moveItem(i, dir) {
    const copy = [...items];
    const j = i + dir;
    if (j < 0 || j >= copy.length) return;
    [copy[i], copy[j]] = [copy[j], copy[i]];
    setItems(copy);
  }

  const publishedCount = items.filter((n) => n.published !== false).length;

  return (
    <EditorShell
      title="Berita"
      icon="📰"
      onSave={() => updateSection('news', items)}
      onReset={() => { resetSection('news'); setItems(content.news.map((n) => ({ ...n }))); }}
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { val: items.length, label: 'Total Artikel', color: 'bg-blue-50 text-psg-blue border-blue-100' },
          { val: publishedCount, label: 'Dipublikasikan', color: 'bg-green-50 text-green-700 border-green-100' },
          { val: items.length - publishedCount, label: 'Draft', color: 'bg-gray-50 text-gray-500 border-gray-200' },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl border p-3 text-center ${s.color}`}>
            <div className="text-2xl font-extrabold">{s.val}</div>
            <div className="text-xs font-medium mt-0.5 opacity-80">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 flex gap-2">
        <span className="text-lg">💡</span>
        <div>
          <strong>Tips:</strong> Artikel dengan status <strong>Draft</strong> tidak akan muncul di website publik.
          Homepage hanya menampilkan <strong>5 berita terbaru</strong> yang dipublikasikan.
          Urutan di sini menentukan urutan tampil (teratas = terbaru).
        </div>
      </div>

      {/* Articles list */}
      <div className="space-y-3">
        {items.map((item, i) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white border-2 rounded-xl overflow-hidden transition-all ${
                item.published !== false ? 'border-gray-200' : 'border-dashed border-gray-300'
              }`}
            >
              {/* Article header (always visible) */}
              <div className="flex items-center gap-3 px-4 py-3">
                {/* Order arrows */}
                <div className="flex flex-col gap-0.5 flex-shrink-0">
                  <button onClick={() => moveItem(i, -1)} disabled={i === 0} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-xs leading-none">▲</button>
                  <button onClick={() => moveItem(i, 1)} disabled={i === items.length - 1} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-xs leading-none">▼</button>
                </div>
                <span className="text-xs text-gray-400 w-5 text-center font-mono">{i + 1}</span>

                {/* Status dot */}
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.published !== false ? 'bg-green-500' : 'bg-gray-300'}`} />

                {/* Title preview */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.title || '(belum ada judul)'}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                    <span className="px-1.5 py-0.5 rounded bg-gray-100 text-[10px] font-bold">{item.cat || '-'}</span>
                    <span>{item.date || 'tanpa tanggal'}</span>
                    {item.published !== false ? (
                      <span className="text-green-600 font-semibold">● Dipublikasikan</span>
                    ) : (
                      <span className="text-gray-400 font-semibold">○ Draft</span>
                    )}
                  </p>
                </div>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="flex-shrink-0 text-sm text-gray-400 hover:text-psg-blue border border-gray-200 hover:border-psg-blue px-3 py-1 rounded-lg transition font-medium"
                >
                  {isExpanded ? 'Tutup' : 'Edit'}
                </button>
                <button onClick={() => removeItem(i)} className="flex-shrink-0 text-red-400 hover:text-red-600 text-xl leading-none px-1">×</button>
              </div>

              {/* Expanded form */}
              {isExpanded && (
                <div className="border-t border-gray-100 px-4 pb-5 pt-4 space-y-4">
                  <Toggle
                    label="Status Publikasi"
                    checked={item.published !== false}
                    onChange={(v) => setItem(i, 'published', v)}
                    hint={item.published !== false ? 'Artikel tampil di website' : 'Artikel disimpan sebagai draft'}
                  />

                  <Grid2>
                    <Field label="Kategori" value={item.cat} onChange={(v) => setItem(i, 'cat', v)} placeholder="Korporat / Operasional / HSSE / CSR" />
                    <Field label="Tanggal" value={item.date} onChange={(v) => setItem(i, 'date', v)} placeholder="15 Mei 2026" />
                  </Grid2>
                  <Grid2>
                    <Field label="Estimasi Baca" value={item.read} onChange={(v) => setItem(i, 'read', v)} placeholder="3 menit" />
                    <Field label="Penulis / Author" value={item.author || ''} onChange={(v) => setItem(i, 'author', v)} placeholder="Tim Redaksi PSG" />
                  </Grid2>
                  <Field label="Judul Artikel" value={item.title} onChange={(v) => setItem(i, 'title', v)} />
                  <TextArea label="Ringkasan (Excerpt)" value={item.excerpt} onChange={(v) => setItem(i, 'excerpt', v)} rows={2} hint="Ditampilkan di homepage dan daftar berita" />
                  <Field
                    label="URL Gambar Thumbnail"
                    value={item.img}
                    onChange={(v) => setItem(i, 'img', v)}
                    hint="Letakkan file di public/ → /nama.jpg, atau pakai URL eksternal"
                    placeholder="https://... atau /foto-berita.jpg"
                  />
                  {item.img && (
                    <img src={item.img} alt="preview" className="w-56 h-32 object-cover rounded-xl border border-gray-200" />
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Konten Artikel Lengkap</label>
                    <p className="text-xs text-gray-400 mb-1.5">
                      Pisahkan paragraf dengan baris kosong. Konten ini ditampilkan di halaman detail artikel.
                    </p>
                    <textarea
                      rows={10}
                      value={item.content || ''}
                      onChange={(e) => setItem(i, 'content', e.target.value)}
                      placeholder="Tulis isi artikel di sini...&#10;&#10;Paragraf baru dipisahkan dengan baris kosong."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition resize-y font-mono"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={addItem}
        className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-4 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2"
      >
        <span className="text-lg">+</span> Tambah Artikel Baru
      </button>
    </EditorShell>
  );
}
