import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Dock />
    </main>
  )
}

export default App
