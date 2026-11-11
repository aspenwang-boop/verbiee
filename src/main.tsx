import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Explore } from './components/Explore'
import { Quiz } from './components/Quiz'
import { cleanSettings, defaults } from './quiz'
import { useStored } from './storage'
import './style.css'

const isQuiz = () => window.location.hash === '#quiz'

function App() {
  const [quiz, setQuiz] = useState(isQuiz)
  const [settings, setSettings] = useStored('quiz', defaults, cleanSettings)

  useEffect(() => {
    const navigate = () => setQuiz(isQuiz())
    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  }, [])

  useEffect(() => {
    document.title = quiz ? 'TEST · VERBIEE' : 'VERBIEE'
    window.scrollTo(0, 0)
  }, [quiz])

  return <main className="shell">
    <header className="page-header">
      <h1>{quiz ? 'TEST' : 'VERBIEE'}</h1>
      <a className="button secondary page-link" href={quiz ? '#explore' : '#quiz'}>
        {quiz && <ArrowLeft size={15} />}
        {quiz ? 'VERBIEE' : 'TEST'}
        {!quiz && <ArrowUpRight size={15} />}
      </a>
    </header>
    {quiz ? <Quiz settings={settings} set={setSettings} /> : <Explore />}
  </main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
