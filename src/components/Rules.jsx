import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play Dice game</h2>

        <div className="text">
            <p>- Select any Number</p>
            <p>- Click on Dice to Roll</p>
            <p>- After click on dice if selected number is equal to dice number you will get same point as dice {" "}</p>
            <p>- If your guess is wrong then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 2px auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`
