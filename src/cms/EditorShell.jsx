import { useState } from 'react';

/**
 * Wrapper used by every section editor.
 * Handles save / reset feedback.
 */
export function EditorShell({ title, icon, children, onSave, onReset }) {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    onSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleReset() {
    if (window.confirm('Reset bagian ini ke nilai bawaan?')) onReset();
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h1 className="text-xl font-bold text-[#003060]">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleReset} className="text-sm text-gray-500 hover:text-red-600 border border-gray-200 hover:border-red-300 px-4 py-2 rounded-lg transition font-medium">
            Reset Bawaan
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm ${saved ? 'bg-green-500 text-white' : 'bg-[#0075BF] hover:bg-[#005f99] text-white'}`}
          >
            {saved ? (
              <>✓ Tersimpan!</>
            ) : (
              <>💾 Simpan Perubahan</>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

/** Reusable single-line text input */
export function Field({ label, value, onChange, placeholder = '', hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition"
      />
    </div>
  );
}

/** Reusable textarea */
export function TextArea({ label, value, onChange, rows = 3, hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0075BF] transition resize-y"
      />
    </div>
  );
}

/** Card wrapper for a group of fields */
export function Section({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
      {title && <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">{title}</h2>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

/** Two-column grid shortcut */
export function Grid2({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}
