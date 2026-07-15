import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Mwindow from './components/windows/Mwindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Dock />
    <Github />
    <Note />
    <Resume />
    </main>
  )
}

export default App
