import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

export default function EditContact() {
  const { content, updateSection, resetSection } = useContent();
  const [form, setForm] = useState({ ...content.contact });

  function set(k) { return (v) => setForm((f) => ({ ...f, [k]: v })); }

  return (
    <EditorShell
      title="Kontak & Footer"
      icon="📞"
      onSave={() => updateSection('contact', form)}
      onReset={() => { resetSection('contact'); setForm({ ...content.contact }); }}
    >
      <Section title="Kontak Kantor Pusat">
        <Field label="Nomor Telepon" value={form.phone1} onChange={set('phone1')} placeholder="+62-..." />
        <Field label="Keterangan Telepon" value={form.phone1Sub} onChange={set('phone1Sub')} placeholder="cth: Kantor Pusat, Banyuasin" />
      </Section>

      <Section title="Kontak Kantor Perwakilan Jakarta">
        <Field label="Nomor Telepon" value={form.phone2} onChange={set('phone2')} placeholder="021-..." />
        <Field label="Keterangan Telepon" value={form.phone2Sub} onChange={set('phone2Sub')} placeholder="cth: Kantor Perwakilan Jakarta" />
      </Section>

      <Section title="Website & Alamat">
        <Field label="Website" value={form.website} onChange={set('website')} placeholder="www...." />
        <Grid2>
          <Field label="Alamat (baris 1)" value={form.address} onChange={set('address')} />
          <Field label="Alamat (baris 2)" value={form.addressSub} onChange={set('addressSub')} />
        </Grid2>
      </Section>

      <Section title="Kantor Liaison Jakarta">
        <TextArea label="Alamat Lengkap" value={form.liaisonAddress} onChange={set('liaisonAddress')} rows={3} />
      </Section>

      <Section title="Teks Lain">
        <Field label="Teks Strip Atas" value={form.topStrip} onChange={set('topStrip')} hint="Teks banner kecil di atas navbar" />
        <TextArea label="Copyright" value={form.copyright} onChange={set('copyright')} rows={2} />
      </Section>
    </EditorShell>
  );
}
