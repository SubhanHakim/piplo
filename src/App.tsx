import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Art } from './sections/Art'
import { Support } from './sections/Support'
import { Footer } from './components/Footer'

function App() {
  // Simple effect to simulate node counting or status check
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-bg-dark text-text-main font-body pb-20">
      <Navbar />
      <Hero />
      <About />
      <Art />
      <Support />
      <Footer />
    </div>
  )
}

export default App
