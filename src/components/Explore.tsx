import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { coreVerbs, matches, type Verb } from '../data/verbs'
import { Conjugation } from './Conjugation'

const essentialVerbs = coreVerbs.filter(verb => verb.categories.includes('essentials'))
const otherVerbs = coreVerbs.filter(verb => !verb.categories.includes('essentials'))
const endingGroups = ['er', 'ir', 're', 'oir'].map(ending => ({
  id: `ending-${ending}`,
  title: `-${ending.toUpperCase()}`,
  verbs: otherVerbs.filter(verb => verb.infinitive.match(/(?:oir|er|ir|re)$/)?.[0] === ending),
}))

function VerbGroup({ id, title, verbs }: { id: string; title: string; verbs: Verb[] }) {
  if (!verbs.length) return null

  return <section className="verb-group" aria-labelledby={id}>
    <h2 id={id}>{title}</h2>
    <div className="verb-grid">
      {verbs.map(verb => {
        const previewId = `preview-${encodeURIComponent(verb.infinitive)}`
        return <div className="verb-item" key={verb.infinitive}>
          <button type="button" className="verb-card" lang="fr" popoverTarget={previewId}>{verb.infinitive}</button>
          <div id={previewId} popover="auto" className="verb-preview" role="region" aria-labelledby={`${previewId}-title`}>
            <h3 id={`${previewId}-title`} lang="fr">{verb.infinitive}</h3>
            <p className="verb-translation">
              <span lang="zh-Hant">{verb.translation_zh}</span><span>{verb.translation_en}</span>
            </p>
            <Conjugation verb={verb} />
          </div>
        </div>
      })}
    </div>
  </section>
}

export function Explore() {
  const [query, setQuery] = useState('')
  const essentials = essentialVerbs.filter(verb => matches(verb, query))
  const groups = endingGroups.map(group => ({
    ...group,
    verbs: group.verbs.filter(verb => matches(verb, query)),
  }))

  return <>
    <div className="search-field">
      <Search size={18} aria-hidden="true" />
      <input type="text" aria-label="Search verbs" placeholder="Search verbs" value={query} onChange={event => setQuery(event.target.value)} />
      {query && <button type="button" className="icon-button" aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}
    </div>
    <VerbGroup id="essentials" title="Essential verbs" verbs={essentials} />
    {groups.map(group => <VerbGroup key={group.id} {...group} />)}
    {!essentials.length && groups.every(group => !group.verbs.length) && <p className="empty-state" role="status">No matching verbs.</p>}
  </>
}
