import React, { useEffect, useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

function Game() {

  const [selectedNumber, setSelectedNumber] = useState()
  const [imgNum, setImgNum] = useState(1)

  const [totalScore, setTotalScore] = useState(0)
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const rollDicefxn = () => {
    if(!selectedNumber) {
      setError("Please Select a Number")
      return
    }
    
    const random = Math.floor(Math.random()*6+1)
    setImgNum(random)

    if(selectedNumber === random){
      setTotalScore((prev) => prev + imgNum)
    }
    else{
      setTotalScore((prev) => prev-2)
    }

    setSelectedNumber(undefined)
  }


  const handleOutlineButton = () => {
    setTotalScore(0)
  }


  return (
    <MainContainer>

      <div className='top_section'>
        <TotalScore totalScore={totalScore}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      
      <RollDice imgNum={imgNum} rollDicefxn={rollDicefxn}/>

      <div className='btns'>
        <OutlineButton onClick={handleOutlineButton}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev) }>{ showRules?"Hide":"Show" } rules</Button>
      </div>

      { showRules && <Rules/>}
    </MainContainer>
  )
}

export default Game

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
 `
