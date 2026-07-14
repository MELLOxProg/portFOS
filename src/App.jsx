import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Dock />
    </main>
  )
}

export default App
