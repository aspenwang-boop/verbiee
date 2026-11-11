import { type Verb } from '../data/verbs'

export function Conjugation({ verb }: { verb: Verb }) {
  return <dl className="conjugation" aria-label="Present tense" lang="fr">
    {verb.conjugations.present.map((form, index) => form && <div className="conjugation-row" key={index}>
      <dt>{form.subject}</dt>
      <dd>{form.pronoun}{form.stem}<span className="ending">{form.ending}</span></dd>
    </div>)}
  </dl>
}
