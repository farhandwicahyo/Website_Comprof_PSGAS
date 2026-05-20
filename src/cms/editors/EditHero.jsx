import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, Grid2 } from '../EditorShell';

const LINK_TYPES = [
  { value: 'scroll', label: '⚓ Scroll ke Section (cth: #tentang)' },
  { value: 'internal', label: '📄 Halaman Internal (cth: /about)' },
  { value: 'external', label: '🌐 URL Eksternal (cth: https://...)' },
];

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

function LinkField({ label, value, linkValue, typeValue, onChangeText, onChangeLink, onChangeType }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder="Teks tombol"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition"
      />
      <div className="flex gap-2">
        <select
          value={typeValue}
          onChange={(e) => onChangeType(e.target.value)}
          className="w-44 px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition bg-white"
        >
          {LINK_TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <input
          type="text"
          value={linkValue}
          onChange={(e) => onChangeLink(e.target.value)}
          placeholder={typeValue === 'scroll' ? '#tentang' : typeValue === 'internal' ? '/halaman' : 'https://...'}
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition"
        />
      </div>
      <p className="text-xs text-gray-400">
        {typeValue === 'scroll' && 'Akan scroll ke section dengan ID tersebut di halaman ini.'}
        {typeValue === 'internal' && 'Akan membuka halaman lain di website yang sama.'}
        {typeValue === 'external' && 'Akan membuka URL di tab baru.'}
      </p>
    </div>
  );
}

export default function EditHero() {
  const { content, updateSection, resetSection } = useContent();
  const [form, setForm] = useState({ ...content.hero });
  const [stats, setStats] = useState(content.stats.map((s) => ({ ...s })));

  function set(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }
  function setToggle(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }

  function setStat(i, k, v) {
    setStats((prev) => prev.map((s, idx) => (idx === i ? { ...s, [k]: k === 'value' ? Number(v) : v } : s)));
  }
  function addStat() { setStats((p) => [...p, { value: 0, suffix: '', label: 'Label Baru' }]); }
  function removeStat(i) { setStats((p) => p.filter((_, idx) => idx !== i)); }

  function handleSave() {
    updateSection('hero', form);
    updateSection('stats', stats);
  }
  function handleReset() {
    resetSection('hero');
    resetSection('stats');
    setForm({ ...content.hero });
    setStats(content.stats.map((s) => ({ ...s })));
  }

  return (
    <EditorShell title="Hero / Cover" icon="🖼️" onSave={handleSave} onReset={handleReset}>
      <Section title="Teks Utama">
        <Field label="Eyebrow (teks kecil di atas)" value={form.eyebrow} onChange={set('eyebrow')} />
        <Grid2>
          <Field label="Judul Baris 1" value={form.headline1} onChange={set('headline1')} />
          <Field label="Judul Baris 2 (highlight warna)" value={form.headline2} onChange={set('headline2')} />
        </Grid2>
        <Field label="Judul Baris 3" value={form.headline3} onChange={set('headline3')} />
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi</label>
          <textarea
            rows={3}
            value={form.description}
            onChange={(e) => set('description')(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition resize-y"
          />
        </div>
      </Section>

      <Section title="Tombol CTA">
        <LinkField
          label="Tombol Utama (merah)"
          value={form.btnPrimary}
          linkValue={form.btnPrimaryLink || '#tentang'}
          typeValue={form.btnPrimaryType || 'scroll'}
          onChangeText={set('btnPrimary')}
          onChangeLink={set('btnPrimaryLink')}
          onChangeType={set('btnPrimaryType')}
        />

        <div className="border-t border-gray-100 pt-4">
          <Toggle
            label="Tampilkan Tombol Kedua"
            checked={form.btnSecondaryVisible !== false}
            onChange={setToggle('btnSecondaryVisible')}
          />
          {form.btnSecondaryVisible !== false && (
            <div className="mt-3">
              <LinkField
                label="Tombol Kedua (transparan)"
                value={form.btnSecondary}
                linkValue={form.btnSecondaryLink || '#proses'}
                typeValue={form.btnSecondaryType || 'scroll'}
                onChangeText={set('btnSecondary')}
                onChangeLink={set('btnSecondaryLink')}
                onChangeType={set('btnSecondaryType')}
              />
            </div>
          )}
        </div>
      </Section>

      <Section title="Pemegang Saham">
        <Toggle
          label="Tampilkan Badge Pemegang Saham"
          checked={form.showShareholders !== false}
          onChange={setToggle('showShareholders')}
        />
        {form.showShareholders !== false && (
          <>
            <Grid2>
              <Field label="Nama Pemegang Saham 1" value={form.shareholder1Name} onChange={set('shareholder1Name')} />
              <Field label="Persentase" value={form.shareholder1Pct} onChange={set('shareholder1Pct')} placeholder="cth: 66%" />
            </Grid2>
            <Grid2>
              <Field label="Nama Pemegang Saham 2" value={form.shareholder2Name} onChange={set('shareholder2Name')} />
              <Field label="Persentase" value={form.shareholder2Pct} onChange={set('shareholder2Pct')} placeholder="cth: 34%" />
            </Grid2>
          </>
        )}
      </Section>

      <Section title="Statistik">
        {stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 items-end">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Nilai #{i + 1}</label>
              <input
                type="number"
                value={stat.value}
                onChange={(e) => setStat(i, 'value', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Satuan</label>
              <input
                type="text"
                value={stat.suffix}
                onChange={(e) => setStat(i, 'suffix', e.target.value)}
                placeholder=" MT/Hari"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Label</label>
              <input
                type="text"
                value={stat.label}
                onChange={(e) => setStat(i, 'label', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
            </div>
            <button onClick={() => removeStat(i)} className="pb-1 text-red-400 hover:text-red-600 text-xl leading-none">×</button>
          </div>
        ))}
        <button onClick={addStat} className="text-sm text-[#0075BF] hover:underline font-medium mt-1">
          + Tambah Statistik
        </button>
      </Section>
    </EditorShell>
  );
}
