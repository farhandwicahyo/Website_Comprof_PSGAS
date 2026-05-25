import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

const EMPTY_MILESTONE = { year: '', icon: '📌', done: false, title: '', desc: '' };

const ICON_SUGGESTIONS = ['🏗️', '🚀', '🏆', '🌿', '🛡️', '🌐', '📌', '⭐', '💡', '🔧', '📈', '🤝'];

export default function EditRoadmap() {
  const { content, updateSection, resetSection } = useContent();
  const [items, setItems] = useState((content.milestones ?? []).map(m => ({ ...m })));

  function setItem(i, k, v) {
    setItems(prev => prev.map((m, idx) => (idx === i ? { ...m, [k]: v } : m)));
  }
  function addItem() { setItems(p => [...p, { ...EMPTY_MILESTONE }]); }
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
      title="Perjalanan Kami"
      icon="🗺️"
      onSave={() => updateSection('milestones', items)}
      onReset={() => { resetSection('milestones'); setItems((content.milestones ?? []).map(m => ({ ...m }))); }}
    >
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
        <span className="text-xl flex-shrink-0">ℹ️</span>
        <div>
          <p className="text-sm font-semibold text-blue-800">Timeline Zigzag</p>
          <p className="text-sm text-blue-700 mt-0.5">
            Milestone ditampilkan dalam timeline vertikal (zigzag di desktop). Isi{' '}
            <strong>Tahun</strong> dengan angka (cth: <code className="bg-blue-100 px-1 rounded">2008</code>) atau tanda{' '}
            <code className="bg-blue-100 px-1 rounded">—</code> untuk penghargaan tanpa tahun spesifik.
            Tahun ditampilkan penuh di timeline (mis. <code className="bg-blue-100 px-1 rounded">2026</code>).
          </p>
        </div>
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-gray-400 text-sm">Belum ada milestone. Klik "+ Tambah Milestone" untuk memulai.</div>
      )}

      {items.map((item, i) => (
        <Section key={i} title={`Milestone ${i + 1}: ${item.title || '(belum ada judul)'}`}>
          <Grid2>
            <Field
              label="Tahun"
              value={item.year}
              onChange={v => setItem(i, 'year', v)}
              placeholder="2008 atau 2026"
            />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ikon Emoji</label>
              <input
                type="text"
                value={item.icon}
                onChange={e => setItem(i, 'icon', e.target.value)}
                maxLength={4}
                placeholder="🏗️"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {ICON_SUGGESTIONS.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setItem(i, 'icon', emoji)}
                    className={`text-lg rounded-lg p-1 transition border ${item.icon === emoji ? 'border-[#0075BF] bg-blue-50' : 'border-transparent hover:bg-gray-100'}`}
                  >{emoji}</button>
                ))}
              </div>
            </div>
          </Grid2>

          <Field label="Judul Milestone" value={item.title} onChange={v => setItem(i, 'title', v)} placeholder="cth: Fase Komersial" />
          <TextArea label="Deskripsi" value={item.desc} onChange={v => setItem(i, 'desc', v)} rows={2} />

          {/* Status toggle */}
          <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${item.done ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-white'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.done ? 'bg-green-500' : 'bg-gray-300'}`} />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.done ? '✓ Sudah Tercapai' : '→ Masih Rencana'}
                </p>
                <p className="text-xs text-gray-400">Mengubah tampilan kartu (garis biru = tercapai, abu = rencana)</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setItem(i, 'done', !item.done)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors flex-shrink-0 ml-4 ${item.done ? 'bg-green-500' : 'bg-gray-200'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${item.done ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
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
        + Tambah Milestone
      </button>
    </EditorShell>
  );
}
