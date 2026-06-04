import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

export default function EditAbout() {
  const { content, updateSection, resetSection } = useContent();
  const [form, setForm] = useState({ ...content.about });
  const [objectives, setObjectives] = useState([...content.about.objectives]);

  function set(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }

  function handleSave() {
    updateSection('about', { ...form, objectives });
  }
  function handleReset() {
    resetSection('about');
    setForm({ ...content.about });
    setObjectives([...content.about.objectives]);
  }

  function addObjective() { setObjectives((p) => [...p, '']); }
  function removeObjective(i) { setObjectives((p) => p.filter((_, idx) => idx !== i)); }
  function updateObjective(i, v) { setObjectives((p) => p.map((o, idx) => (idx === i ? v : o))); }

  return (
    <EditorShell title="Tentang Perusahaan" icon="🏢" onSave={handleSave} onReset={handleReset}>
      <Section title="Tampilan">
        <Field
          label="URL Gambar Latar"
          value={form.heroImage || ''}
          onChange={set('heroImage')}
          placeholder="/Kilang_Fraksinasi_Sungai_Gerong.JPG"
        />
      </Section>

      <Section title="Profil Utama">
        <Field label="Nama Perusahaan" value={form.heading} onChange={set('heading')} />
        <TextArea label="Paragraf 1" value={form.body1} onChange={set('body1')} rows={4} />
        <TextArea label="Paragraf 2" value={form.body2} onChange={set('body2')} rows={3} />
      </Section>

      <Section title="Visi & Misi">
        <TextArea label="Visi" value={form.vision} onChange={set('vision')} rows={2} />
        <TextArea label="Misi" value={form.mission} onChange={set('mission')} rows={3} />
      </Section>

      <Section title="Fakta Kunci">
        <Grid2>
          <Field label="Tanggal Berdiri" value={form.founded} onChange={set('founded')} placeholder="cth: 7 Mei 2008" />
          <Field label="Kapasitas" value={form.capacity} onChange={set('capacity')} placeholder="cth: 250 MMSCFD" />
        </Grid2>
        <Grid2>
          <Field label="Jumlah Kilang" value={form.plants} onChange={set('plants')} placeholder="cth: 2 Kilang" />
          <Field label="Kantor Pusat" value={form.hq} onChange={set('hq')} />
        </Grid2>
      </Section>

      <Section title="Tujuan Usaha">
        <div className="space-y-2">
          {objectives.map((obj, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={obj}
                onChange={(e) => updateObjective(i, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
              <button onClick={() => removeObjective(i)} className="text-red-400 hover:text-red-600 px-2 text-lg">×</button>
            </div>
          ))}
        </div>
        <button
          onClick={addObjective}
          className="mt-2 text-sm text-[#0075BF] hover:underline font-medium"
        >
          + Tambah Tujuan
        </button>
      </Section>
    </EditorShell>
  );
}
