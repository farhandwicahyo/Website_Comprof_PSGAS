import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea, Grid2 } from '../EditorShell';

const EMPTY_PHOTO = { src: '', title: '', caption: '' };

/** Encode spasi di path public untuk preview */
function publicSrc(src) {
  if (!src || /^https?:\/\//i.test(src)) return src;
  return src.split('/').map((part, i) => (i === 0 ? part : encodeURIComponent(part))).join('/');
}

export default function EditContribute() {
  const { content, updateSection, resetSection } = useContent();

  const raw = content.contribute ?? {};
  const [header, setHeader] = useState({
    eyebrow:  raw.eyebrow  ?? 'Kontribusi & Kegiatan',
    heading:  raw.heading  ?? 'Kontribusi Kami',
    subtitle: raw.subtitle ?? raw.sub ?? '',
  });
  const [photos, setPhotos] = useState((raw.photos ?? []).map(p => ({ ...p })));

  function setHeaderField(k, v) { setHeader(h => ({ ...h, [k]: v })); }
  function setPhoto(i, k, v) { setPhotos(prev => prev.map((p, idx) => (idx === i ? { ...p, [k]: v } : p))); }
  function addPhoto() { setPhotos(p => [...p, { ...EMPTY_PHOTO }]); }
  function removePhoto(i) { setPhotos(p => p.filter((_, idx) => idx !== i)); }
  function movePhoto(i, dir) {
    setPhotos(prev => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  function handleSave() {
    updateSection('contribute', { ...raw, ...header, photos });
  }
  function handleReset() {
    resetSection('contribute');
    const fresh = content.contribute ?? {};
    setHeader({ eyebrow: fresh.eyebrow ?? '', heading: fresh.heading ?? '', subtitle: fresh.subtitle ?? fresh.sub ?? '' });
    setPhotos((fresh.photos ?? []).map(p => ({ ...p })));
  }

  return (
    <EditorShell
      title="Kontribusi & Kegiatan"
      icon="🤲"
      onSave={handleSave}
      onReset={handleReset}
    >
      {/* Section header */}
      <Section title="Header Section">
        <Grid2>
          <Field label="Eyebrow (label kecil)" value={header.eyebrow} onChange={v => setHeaderField('eyebrow', v)} placeholder="Kontribusi & Kegiatan" />
          <Field label="Judul Utama" value={header.heading} onChange={v => setHeaderField('heading', v)} placeholder="Kontribusi Kami" />
        </Grid2>
        <TextArea label="Sub-judul / Deskripsi" value={header.subtitle} onChange={v => setHeaderField('subtitle', v)} rows={2} />
      </Section>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
        <span className="text-xl flex-shrink-0">📸</span>
        <div>
          <p className="text-sm font-semibold text-blue-800">Carousel + Galeri Grid</p>
          <p className="text-sm text-blue-700 mt-0.5">
            Foto ditampilkan dalam dua cara: carousel besar (slideshow otomatis) dan grid thumbnail di bawahnya.
            Letakkan file foto di{' '}
            <code className="bg-blue-100 px-1 rounded">/public/csr/</code> lalu isi URL-nya, atau gunakan URL eksternal.
          </p>
        </div>
      </div>

      {photos.length === 0 && (
        <div className="text-center py-8 text-gray-400 text-sm">Belum ada foto. Klik "+ Tambah Foto" untuk memulai.</div>
      )}

      {photos.map((photo, i) => (
        <Section key={i} title={`Foto ${i + 1}: ${photo.title || '(belum ada judul)'}`}>
          <Field
            label="URL / Path Foto"
            value={photo.src}
            onChange={v => setPhoto(i, 'src', v)}
            hint="Letakkan di public/csr/ → isi /csr/nama-file.png, atau URL eksternal"
            placeholder="/csr/CSR_MOTOR SAMPAH.png"
          />
          {photo.src && (
            <div className="relative rounded-xl overflow-hidden aspect-video max-w-sm border border-gray-200">
              <img
                src={publicSrc(photo.src)}
                alt="preview"
                className="w-full h-full object-cover"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          )}
          <Grid2>
            <Field label="Judul Foto" value={photo.title} onChange={v => setPhoto(i, 'title', v)} placeholder="cth: Program Motor Sampah" />
            <TextArea label="Keterangan (caption)" value={photo.caption} onChange={v => setPhoto(i, 'caption', v)} rows={2} />
          </Grid2>

          <div className="flex items-center justify-between pt-1">
            <div className="flex gap-2">
              <button type="button" onClick={() => movePhoto(i, -1)} disabled={i === 0}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition">↑ Naik</button>
              <button type="button" onClick={() => movePhoto(i, 1)} disabled={i === photos.length - 1}
                className="px-2 py-1 text-xs border border-gray-200 rounded-lg text-gray-500 hover:border-[#0075BF] hover:text-[#0075BF] disabled:opacity-30 transition">↓ Turun</button>
            </div>
            <button type="button" onClick={() => removePhoto(i)}
              className="text-red-400 hover:text-red-600 text-sm font-medium transition">🗑 Hapus Foto</button>
          </div>
        </Section>
      ))}

      <button type="button" onClick={addPhoto}
        className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition">
        + Tambah Foto
      </button>
    </EditorShell>
  );
}
