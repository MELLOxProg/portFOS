import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Mwindow from './components/windows/Mwindow'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Dock />
      <Mwindow >
        <p>This is the content of the window.</p>
      </Mwindow>
    </main>
  )
}

export default App
