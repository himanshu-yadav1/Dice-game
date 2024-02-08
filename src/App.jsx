import Game from "./components/Game"
import Home from "./components/Home"

import styled from "styled-components"

import { useState } from "react"

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => setIsGameStarted((prev) => !prev)

  return (
    <div className=""> 
      { isGameStarted ? <Game/> : <Home toggle={toggleGamePlay}/>} 
    </div>
  )
}

export default App