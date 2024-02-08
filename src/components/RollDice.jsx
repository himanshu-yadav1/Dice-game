import React, { useState } from 'react'
import styled from 'styled-components'

function RollDice({ imgNum ,rollDicefxn}) {

  return (
    <DiceContainer>
        <div onClick={rollDicefxn} className='dice'>
            <img src={`/images/dice/dice_${imgNum}w.png`} alt="Dice 1" />    
        </div>

        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;        
    }
    
`
