import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea } from '../EditorShell';

export default function EditContact() {
  const { content, updateSection, resetSection } = useContent();
  const [form, setForm] = useState({ ...content.contact });

  function set(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }
  const offices = Array.isArray(form.offices) ? form.offices : [];

  function setOffice(i, key, value) {
    setForm((f) => {
      const next = [...(f.offices || [])];
      next[i] = { ...next[i], [key]: value };
      return { ...f, offices: next };
    });
  }

  return (
    <EditorShell
      title="Kontak & Footer"
      icon="📞"
      onSave={() => updateSection('contact', form)}
      onReset={() => { resetSection('contact'); setForm({ ...content.contact }); }}
    >
      {offices.map((office, i) => (
        <Section key={i} title={office.label || `Kantor ${i + 1}`}>
          <Field label="Judul" value={office.label} onChange={(v) => setOffice(i, 'label', v)} />
          <TextArea label="Alamat (Enter = baris baru)" value={office.address} onChange={(v) => setOffice(i, 'address', v)} rows={3} />
          <Field label="Telepon" value={office.phone} onChange={(v) => setOffice(i, 'phone', v)} />
        </Section>
      ))}

      <Section title="Website & Lainnya">
        <Field label="Website" value={form.website} onChange={set('website')} placeholder="www...." />
        <TextArea label="Copyright" value={form.copyright} onChange={set('copyright')} rows={2} />
      </Section>
    </EditorShell>
  );
}
