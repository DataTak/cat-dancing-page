import { useState } from 'react'
import './styles/global.css'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>춤추는 고양이</h1>
      </header>
      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls isAnimating={isAnimating} onToggle={handleToggleAnimation} />
      </main>
    </div>
  )
}

export default App
