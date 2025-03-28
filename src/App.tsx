import { useState } from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Footer } from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 m-0 p-0 min-h-screen flex flex-col">
      <Navbar />  
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default App