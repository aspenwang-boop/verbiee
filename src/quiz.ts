import { categories, coreVerbs, families, verbById, verbs } from './data/verbs.ts'

export const scopes = {
  all: 'All 125 verbs',
  category: 'By everyday category',
  regular: 'Regular verbs',
  irregular: 'Irregular verbs',
  family: 'By verb family',
  custom: 'Custom selection',
}
export const tenses = ['Présent', 'Passé composé', 'Imparfait', 'Futur simple', 'Mixed tenses'] as const
export const levels = ['A1', 'A2', 'A2+', 'B1'] as const
export const modes = [
  ['Translation', '中文＋英文 → 法文翻譯'],
  ['Six-person conjugation', '動詞六人稱變位默寫'],
  ['Fill in the blank', '法文句子填空'],
  ['Correct the conjugation', '動詞變位錯誤修正'],
  ['Mixed practice', '混合測驗'],
] as const
export const counts = [5, 10, 15, 20] as const
export type Settings = {
  scope: keyof typeof scopes; category: string; family: string; custom: string[]
  tense: typeof tenses[number]; mode: number; level: typeof levels[number]; count: typeof counts[number]
}
export const defaults: Settings = {
  scope: 'all', category: 'essentials', family: 'modals', custom: [],
  tense: 'Présent', mode: 0, level: 'A2', count: 10,
}
export function cleanSettings(value: unknown): Settings {
  const s = (value ?? {}) as Partial<Settings>
  return {
    scope: typeof s.scope === 'string' && Object.hasOwn(scopes, s.scope) ? s.scope : defaults.scope,
    category: categories.some(([id]) => id === s.category) ? s.category! : defaults.category,
    family: families.some(family => family.id === s.family) ? s.family! : defaults.family,
    custom: Array.isArray(s.custom) ? [...new Set(s.custom.filter(id => verbById.has(id)))] : [],
    tense: tenses.includes(s.tense!) ? s.tense! : defaults.tense,
    mode: Number.isInteger(s.mode) && s.mode! >= 0 && s.mode! < modes.length ? s.mode! : defaults.mode,
    level: levels.includes(s.level!) ? s.level! : defaults.level,
    count: counts.includes(s.count!) ? s.count! : defaults.count,
  }
}
export function selectedVerbs(settings: Settings): string[] {
  switch (settings.scope) {
    case 'all': return coreVerbs.map(v => v.infinitive)
    case 'category': return coreVerbs.filter(v => v.categories.some(c => c === settings.category)).map(v => v.infinitive)
    case 'regular': return coreVerbs.filter(v => v.regularity !== 'irregular').map(v => v.infinitive)
    case 'irregular': return coreVerbs.filter(v => v.regularity === 'irregular').map(v => v.infinitive)
    case 'family': return families.find(f => f.id === settings.family)?.members ?? []
    case 'custom': return verbs.filter(v => settings.custom.includes(v.infinitive)).map(v => v.infinitive)
  }
}
export function generatePrompt(settings: Settings, ids: string[]): string {
  if (!ids.length) return ''
  const mixedTenses = settings.tense === 'Mixed tenses'
  const tense = mixedTenses ? '混合時態（Présent、Passé composé、Imparfait、Futur simple）' : settings.tense
  const mode = modes[settings.mode][1] + (settings.mode === 4 ? '（翻譯、變位默寫、填空、錯誤修正）' : '')
  const impersonal = ids.some(id => verbById.get(id)?.tags.includes('Impersonal'))
  return [
    '你現在是我的法文老師，我目前的法文程度是 A2。\n請根據以下設定，幫我進行法文動詞測驗。',
    `【練習動詞】\n${ids.join('、')}\n【練習時態】\n${tense}\n【測驗模式】\n${mode}\n【難度】\n${settings.level}\n【題目數量】\n${settings.count} 題`,
    [
      '測驗規則：',
      '1. 請根據指定動詞與時態出題。',
      '2. 題目以 A2 常見生活情境為主，難度依上述設定調整。',
      '3. 中文翻譯測驗必須提供繁體中文與英文對照。',
      '4. 不要一開始顯示正確答案。',
      '5. 讓我先完成所有題目，再進行批改。',
      '6. 逐題檢查動詞變位、拼字、時態、文法與自然程度。',
      '7. 接受不同但文法正確、意思相同的答案。',
      '8. 區分「真正錯誤」與「可以更自然的表達」。',
      '9. 對錯誤提供簡短的繁體中文文法解釋。',
      '10. 批改完成後，整理我的常見錯誤及需要複習的動詞。',
      '11. 不要擅自加入指定清單以外的目標測驗動詞。',
      '12. 如果我要求下一回合，優先針對前一回合的錯誤出新的題目，避免直接重複原題。',
      ...(impersonal ? ['補充：無人稱動詞只考適用的第三人稱單數。'] : []),
      ...(settings.tense !== 'Présent' ? ['補充：請自行產生並驗證指定時態的題目與變位。'] : []),
    ].join('\n'),
    '請直接開始出題，不需要額外介紹。',
  ].join('\n\n')
}
