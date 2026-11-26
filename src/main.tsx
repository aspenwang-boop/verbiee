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
      <h1 className="page-title">
        {quiz ? 'TEST' : focus ? 'FOCUS' : 'VERBIEE'}
        {page === 'explore' && <img className="page-title-icon" src="./verbiee-icon.png" alt="" width={192} height={192} />}
      </h1>
      <nav className="page-navigation" aria-label="Pages">
        {page !== 'explore' && <a className="button secondary page-link" href="#explore"><ArrowLeft size={15} />VERBIEE</a>}
        {!focus && <a className="button secondary page-link" href="#focus">FOCUS<ArrowUpRight size={15} /></a>}
        {!quiz && <a className="button secondary page-link" href="#quiz">TEST<ArrowUpRight size={15} /></a>}
      </nav>
    </header>
    {quiz ? <Quiz settings={settings} set={setSettings} /> : focus ? <Focus /> : <Explore />}
  </main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
