import { useState } from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-zinc-800">
      <Navbar />  
      <Home />
    </div>
  )
}

export default App
