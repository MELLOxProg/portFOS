import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Mwindow from './components/windows/Mwindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'



function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Navbar windowState={windowState} setwindowState={setwindowState} />
      <Dock windowState={windowState} setwindowState={setwindowState} />
    {windowState.github && <Github windowName="github"  setwindowState={setwindowState}/>}
    {windowState.note && <Note windowName="note" setwindowState={setwindowState}/>}
    {windowState.resume && <Resume windowName="resume"  setwindowState={setwindowState}/>}
    {windowState.spotify && <Spotify windowName="spotify" setwindowState={setwindowState}/>}
    {windowState.cli && <Cli windowName="cli"  setwindowState={setwindowState}/>}
    </main>
  )
}

export default App
