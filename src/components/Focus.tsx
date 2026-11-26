import { useEffect, useRef, useState } from 'react'
import { focusTenses } from '../data/focus'

type Tense = typeof focusTenses[number]

function Exceptions({ tense }: { tense: Tense }) {
  if (!('etrePairs' in tense)) return <>
    <h4>IRREGULAR VERBS</h4>
    <dl className="focus-irregulars" lang="fr">
      {tense.irregulars.map(([verb, form]) => <div key={verb}><dt>{verb}</dt><dd>{form}</dd></div>)}
    </dl>
  </>

  return <>
    <h4>ÊTRE VERB PAIRS</h4>
    <ul className="focus-pairs" lang="fr">
      {tense.etrePairs.map(pair => <li key={pair.verbA}>
        <span title={pair.meaningA}>{pair.verbA}</span><span aria-hidden="true">↔</span><span title={pair.meaningB}>{pair.verbB}</span>
        <small>{pair.pastParticipleA}</small><span /><small>{pair.pastParticipleB}</small>
      </li>)}
    </ul>
    <h4>OTHER ÊTRE VERBS</h4>
    <ul className="focus-participles" lang="fr">
      {tense.otherEtreVerbs.map(item => <li key={item.verb}>{item.verb} <span>→ {item.pastParticiple}</span></li>)}
    </ul>
    <p className="focus-agreement"><span lang="fr">être + participe passé</span> → 性數配合 <span lang="fr">allé · allée · allés · allées</span></p>
    <h4>AVOIR</h4>
    <ul className="focus-participles" lang="fr">
      {tense.avoir.map(item => <li key={item.verb}>{item.verb} <span>→ {item.pastParticiple}</span></li>)}
    </ul>
  </>
}

export function Focus() {
  const [active, setActive] = useState<string | null>(null)
  const container = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function keepOpen() {
    clearTimeout(closeTimer.current)
  }

  function closeSoon() {
    keepOpen()
    closeTimer.current = setTimeout(() => setActive(null), 180)
  }

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setActive(null)
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        clearTimeout(closeTimer.current)
        setActive(null)
      }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      clearTimeout(closeTimer.current)
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [])

  return <section className="focus-page" ref={container} aria-label="French tense timeline"
    onPointerLeave={event => { if (event.pointerType === 'mouse') closeSoon() }} onPointerEnter={keepOpen}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) closeSoon() }}
    onFocus={keepOpen}>
    <div className="focus-eras" aria-hidden="true"><span>PASSÉ</span><span>PRÉSENT</span><span>FUTUR</span></div>
    <ol className="focus-timeline">
      {focusTenses.map(tense => {
        const selected = active === tense.id
        return <li className="focus-node" data-tone={tense.tone} key={tense.id}>
          <button type="button" className="focus-trigger" aria-expanded={selected}
            aria-controls={`focus-${tense.id}`}
            onPointerEnter={event => {
              if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) {
                keepOpen()
                setActive(tense.id)
              }
            }}
            onFocus={() => { keepOpen(); setActive(tense.id) }}
            onClick={() => { keepOpen(); setActive(tense.id) }}>
            <span className="focus-dot" aria-hidden="true" />
            <span lang="fr">{tense.title}</span>
          </button>
          <div className={`focus-panels ${'etrePairs' in tense ? 'focus-compound' : ''}`}
            id={`focus-${tense.id}`} hidden={!selected}
            onPointerEnter={keepOpen}>
            <div className="focus-formation" role="region" aria-label={`${tense.title} formation`} tabIndex={0}>
              <h3 lang="fr">{tense.title}</h3><p className="focus-zh" lang="zh-Hant">{tense.zh}</p>
              <h4>FORMATION</h4><p className="focus-formula">{tense.formula}</p>
            </div>
            <div className="focus-exceptions" role="region" aria-label={`${tense.title} exceptions`} tabIndex={0}>
              <Exceptions tense={tense} />
            </div>
          </div>
        </li>
      })}
    </ol>
  </section>
}
