import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector({ error, setError, selectedNumber, setSelectedNumber}) {
    const arrNumber = [1,2,3,4,5,6]

    const handleOnClick = (value) => {
        setSelectedNumber(value)
        setError("")
    }

  return (
    <NumberSelectorComtainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {arrNumber.map((value, i) => 
                <Box key={i} 
                    isSelected={value === selectedNumber}
                    onClick={() => handleOnClick(value)}> 
                    {value} 
                </Box>
            )} 
        </div>

        <p>Select a Number</p>
    </NumberSelectorComtainer>
  )
}

export default NumberSelector



const NumberSelectorComtainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`

const Box = styled.div`
    background-color: #6b6a6a;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

`
