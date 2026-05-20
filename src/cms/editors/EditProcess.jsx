import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell, Section, Field, TextArea } from '../EditorShell';

export default function EditProcess() {
  const { content, updateSection, resetSection } = useContent();
  const [steps, setSteps] = useState(content.process.map((s) => ({ ...s })));

  function setStep(i, k, v) {
    setSteps((prev) => prev.map((s, idx) => (idx === i ? { ...s, [k]: v } : s)));
  }
  function addStep() {
    setSteps((p) => [...p, { no: String(p.length + 1).padStart(2, '0'), icon: '🔹', title: '', desc: '', meta: '' }]);
  }
  function removeStep(i) { setSteps((p) => p.filter((_, idx) => idx !== i)); }

  return (
    <EditorShell
      title="Proses Bisnis"
      icon="⚙️"
      onSave={() => updateSection('process', steps)}
      onReset={() => { resetSection('process'); setSteps(content.process.map((s) => ({ ...s }))); }}
    >
      {steps.map((step, i) => (
        <Section key={i} title={`Langkah ${i + 1}: ${step.title || '(belum ada judul)'}`}>
          <div className="flex gap-3">
            <div className="w-20 flex-shrink-0">
              <label className="block text-xs text-gray-500 mb-1">Nomor</label>
              <input
                type="text"
                value={step.no}
                onChange={(e) => setStep(i, 'no', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
            </div>
            <div className="w-20 flex-shrink-0">
              <label className="block text-xs text-gray-500 mb-1">Icon</label>
              <input
                type="text"
                value={step.icon}
                onChange={(e) => setStep(i, 'icon', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#0075BF]"
              />
            </div>
            <div className="flex-1">
              <Field label="Judul Langkah" value={step.title} onChange={(v) => setStep(i, 'title', v)} />
            </div>
          </div>
          <TextArea label="Deskripsi" value={step.desc} onChange={(v) => setStep(i, 'desc', v)} rows={2} />
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <Field label="Meta / Spesifikasi singkat" value={step.meta} onChange={(v) => setStep(i, 'meta', v)} placeholder="cth: ±200 mmscfd" />
            </div>
            {steps.length > 1 && (
              <button onClick={() => removeStep(i)} className="text-red-400 hover:text-red-600 text-sm mt-4 font-medium">
                🗑 Hapus
              </button>
            )}
          </div>
        </Section>
      ))}
      <button onClick={addStep} className="w-full border-2 border-dashed border-gray-200 hover:border-[#0075BF] text-gray-400 hover:text-[#0075BF] py-3 rounded-xl text-sm font-medium transition">
        + Tambah Langkah
      </button>
    </EditorShell>
  );
}
