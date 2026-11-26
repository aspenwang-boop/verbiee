import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Explore } from './components/Explore'
import { Quiz } from './components/Quiz'
import { Focus } from './components/Focus'
import { cleanSettings, defaults } from './quiz'
import { useStored } from './storage'
import './style.css'

const getPage = () => {
  const hash = window.location.hash
  return hash === '#quiz' ? 'quiz' : hash === '#focus' ? 'focus' : 'explore'
}

function App() {
  const [page, setPage] = useState(getPage)
  const quiz = page === 'quiz'
  const focus = page === 'focus'
  const [settings, setSettings] = useStored('quiz', defaults, cleanSettings)

  useEffect(() => {
    const navigate = () => setPage(getPage())
    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  }, [])

  useEffect(() => {
    document.title = quiz ? 'TEST · VERBIEE' : focus ? 'FOCUS · VERBIEE' : 'VERBIEE'
    window.scrollTo(0, 0)
  }, [page, quiz, focus])

  return <main className="shell">
    <header className="page-header">
      <h1 className="page-title" aria-label={focus ? 'FOCUS' : undefined}>
        {!focus && (quiz ? 'TEST' : 'VERBIEE')}
        {!quiz && <a className={`page-star-link ${focus ? 'is-focus' : ''}`}
          href={focus ? '#explore' : '#focus'}
          aria-label={focus ? '返回 VERBIEE 首頁' : '開啟 FOCUS'}
          title={focus ? 'VERBIEE' : 'FOCUS'}>
          <span className="page-title-icon" aria-hidden="true" />
        </a>}
      </h1>
      <nav className="page-navigation" aria-label="Pages">
        {quiz && <a className="button secondary page-link" href="#explore"><ArrowLeft size={15} />VERBIEE</a>}
        {!quiz && <a className="button secondary page-link" href="#quiz">TEST<ArrowUpRight size={15} /></a>}
      </nav>
    </header>
    {quiz ? <Quiz settings={settings} set={setSettings} /> : focus ? <Focus /> : <Explore />}
  </main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
