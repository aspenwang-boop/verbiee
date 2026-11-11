import { useEffect, useRef, useState } from 'react'
import { Clipboard, RotateCcw, Search } from 'lucide-react'
import { categories, families, matches, verbById, verbs } from '../data/verbs'
import { counts, defaults, generatePrompt, levels, modes, scopes, selectedVerbs, tenses, type Settings } from '../quiz'

export function Quiz({ settings, set }: { settings: Settings; set: (value: Settings) => void }) {
  const [search, setSearch] = useState('')
  const [notice, setNotice] = useState('')
  const promptArea = useRef<HTMLTextAreaElement>(null)
  const ids = selectedVerbs(settings)
  const prompt = generatePrompt(settings, ids)
  const change = (patch: Partial<Settings>) => set({ ...settings, ...patch })
  useEffect(() => setNotice(''), [prompt])
  async function copy() {
    if (!prompt) return
    try {
      await navigator.clipboard.writeText(prompt)
      setNotice('Prompt copied to clipboard.')
    } catch {
      promptArea.current?.focus()
      promptArea.current?.select()
      if (document.execCommand('copy')) setNotice('Prompt copied to clipboard.')
      else setNotice('Prompt selected. Press Ctrl+C or ⌘C to copy.')
    }
  }
  const customResults = verbs.filter(v => matches(v, search))
  return <div className="quiz-layout">
      <section className="panel workspace-panel settings-panel">
        <h2>Quiz Settings</h2>
        <label className="field">Verb scope<select value={settings.scope} onChange={e => change({ scope: e.target.value as Settings['scope'] })}>{Object.entries(scopes).map(([id,label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        {settings.scope === 'category' && <label className="field">Everyday category<select value={settings.category} onChange={e => change({ category: e.target.value })}>{categories.map(([id,en,zh]) => <option key={id} value={id}>{en} · {zh}</option>)}</select></label>}
        {settings.scope === 'family' && <label className="field">Verb family<select value={settings.family} onChange={e => change({ family: e.target.value })}>{families.map(f => <option key={f.id} value={f.id}>{f.title}</option>)}</select></label>}
        {settings.scope === 'regular' && <p className="field-note">Includes first-group spelling variants and predictable second- and third-group patterns.</p>}
        {settings.scope === 'custom' && <div className="custom-picker">
          <div className="search-field"><Search size={16} /><input aria-label="Search custom verbs" value={search} onChange={e => setSearch(e.target.value)} placeholder="Find verbs to add" /></div>
          <div className="selection-list" aria-label="Select verbs">{customResults.map(v => <label className="check" key={v.infinitive}>
            <input type="checkbox" checked={settings.custom.includes(v.infinitive)} onChange={e => change({ custom: e.target.checked ? [...settings.custom, v.infinitive] : settings.custom.filter(id => id !== v.infinitive) })} />
            <span lang="fr">{v.infinitive}</span><small>{v.extension ? 'Extension' : v.translation_zh}</small>
          </label>)}{!customResults.length && <p className="field-note">No matching verbs.</p>}</div>
          {!!settings.custom.length && <div className="selected-chips">{settings.custom.map(id => <button className="related" key={id} lang="fr" aria-label={`Remove ${id}`} onClick={() => change({ custom: settings.custom.filter(other => id !== other) })}>{id} ×</button>)}</div>}
        </div>}
        <label className="field">Tense<select value={settings.tense} onChange={e => change({ tense: e.target.value as Settings['tense'] })}>{tenses.map(tense => <option key={tense} value={tense}>{tense}{tense !== 'Présent' ? ' · verified by ChatGPT' : ''}</option>)}</select></label>
        {settings.tense !== 'Présent' && <p className="field-note">The prompt asks ChatGPT to generate and verify questions for these tenses.</p>}
        <label className="field">Quiz mode<select value={settings.mode} onChange={e => change({ mode: Number(e.target.value) })}>{modes.map(([name],i) => <option value={i} key={name}>{name}</option>)}</select></label>
        <div className="field-grid">
          <label className="field">Questions<select value={settings.count} onChange={e => change({ count: Number(e.target.value) as Settings['count'] })}>{counts.map(n => <option key={n} value={n}>{n} questions</option>)}</select></label>
          <label className="field">Difficulty<select value={settings.level} onChange={e => change({ level: e.target.value as Settings['level'] })}>{levels.map(level => <option key={level}>{level}</option>)}</select></label>
        </div>
        <button className="button text-button" onClick={() => { set(defaults); setSearch(''); setNotice('') }}><RotateCcw size={16} /> Reset Settings</button>
      </section>
      <section className="panel workspace-panel prompt-panel">
        <div className="section-head"><h2>Generated Prompt</h2><span className="count">{ids.length} {ids.length === 1 ? 'verb' : 'verbs'}</span></div>
        {!!ids.length && ids.length <= 8 && <div className="selected-chips">{ids.map(id => <span className="pill green" lang="fr" key={id}>{id}{verbById.get(id)?.extension ? ' · Extension' : ''}</span>)}</div>}
        <textarea aria-label="Generated prompt" lang="zh-Hant" ref={promptArea} className="prompt-box" value={prompt} placeholder="Select at least one verb to generate a prompt." readOnly />
        <div className="prompt-actions">
          <button className="button primary" disabled={!prompt} onClick={copy}><Clipboard size={17} /> Copy Prompt</button>
        </div>
        <p className="copy-status" role="status">{notice}</p>
      </section>
  </div>
}
