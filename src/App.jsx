import { useEffect, useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

import wallpaper1 from './assets/wallpapers/1.png'
import wallpaper2 from './assets/wallpapers/2.png'
import wallpaper3 from './assets/wallpapers/3.png'
import wallpaper4 from './assets/wallpapers/4.jpg'
import wallpaper5 from './assets/wallpapers/5.png'
import wallpaper6 from './assets/wallpapers/6.webp'
import wallpaper7 from './assets/wallpapers/7.jpg'
import wallpaper8 from './assets/wallpapers/8.jpg'

const wallpapers = [
  wallpaper1,
  wallpaper2,
  wallpaper3,
  wallpaper4,
  wallpaper5,
  wallpaper6,
  wallpaper7,
  wallpaper8,
]

function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  const [wallpaperIndex, setWallpaperIndex] = useState(() => {
    const saved = Number(window.localStorage.getItem('portfos-wallpaper-index') || 0)
    return Number.isFinite(saved) ? saved % wallpapers.length : 0
  })

  useEffect(() => {
    window.localStorage.setItem('portfos-wallpaper-index', String(wallpaperIndex))
  }, [wallpaperIndex])

  const cycleWallpaper = () => {
    setWallpaperIndex((current) => (current + 1) % wallpapers.length)
  }

  const isDarkNavbarWallpaper = wallpaperIndex === 6

  return (
    <main
      className={isDarkNavbarWallpaper ? 'wallpaper-theme-dark' : ''}
      style={{
        backgroundImage: `url(${wallpapers[wallpaperIndex]})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <button
        type="button"
        className="wallpaper-switcher"
        onClick={cycleWallpaper}
        aria-label="Cycle wallpaper"
      >
        Change wallpaper
      </button>

      <Navbar windowState={windowState} setwindowState={setwindowState} />
      <Dock windowState={windowState} setwindowState={setwindowState} />
      {windowState.github && <Github windowName="github" setwindowState={setwindowState} />}
      {windowState.note && <Note windowName="note" setwindowState={setwindowState} />}
      {windowState.resume && <Resume windowName="resume" setwindowState={setwindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" setwindowState={setwindowState} />}
      {windowState.cli && <Cli windowName="cli" setwindowState={setwindowState} />}
    </main>
  )
}

export default App
