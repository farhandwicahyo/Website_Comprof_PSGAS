import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { EditorShell } from '../EditorShell';

function Toggle({ label, desc, checked, onChange }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${checked ? 'border-[#0075BF] bg-blue-50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${checked ? 'bg-green-500' : 'bg-gray-300'}`} />
        <div>
          <p className="text-sm font-semibold text-gray-800">{label}</p>
          {desc && <p className="text-xs text-gray-400 mt-0.5">{desc}</p>}
        </div>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors flex-shrink-0 ml-4 ${checked ? 'bg-[#0075BF]' : 'bg-gray-200'}`}
      >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );
}

export default function EditSections() {
  const { content, updateSection, resetSection } = useContent();
  const [secs, setSecs] = useState({ ...content.sections });

  function toggle(key) {
    setSecs((prev) => ({ ...prev, [key]: { ...prev[key], visible: !prev[key].visible } }));
  }

  return (
    <EditorShell
      title="Visibilitas Section"
      icon="👁️"
      onSave={() => updateSection('sections', secs)}
      onReset={() => { resetSection('sections'); setSecs({ ...content.sections }); }}
    >
      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Aktifkan / Nonaktifkan Section</h2>
        <p className="text-sm text-gray-400 mb-5">
          Section yang dinonaktifkan tidak akan tampil di website publik. Pengaturan disimpan bersamaan dengan tombol <strong>Simpan Perubahan</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(secs).map(([key, sec]) => (
            <Toggle
              key={key}
              label={sec.label}
              desc={`ID: #${
                key === 'whyus' ? 'kenapa'
                  : key === 'clients' ? 'pelanggan'
                    : key === 'contribute' ? 'contribute'
                      : key
              }`}
              checked={sec.visible}
              onChange={() => toggle(key)}
            />
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <span className="text-xl flex-shrink-0">⚠️</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">Catatan</p>
          <p className="text-sm text-amber-700 mt-0.5">
            Hero/Beranda selalu ditampilkan dan tidak bisa dinonaktifkan. Navbar dan Footer juga selalu tampil.
          </p>
        </div>
      </div>
    </EditorShell>
  );
}
