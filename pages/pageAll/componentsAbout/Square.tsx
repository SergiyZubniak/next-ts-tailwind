import React from 'react'

interface squareProps {
  val: string
  chooseSquare: () => any
}

export const Square: React.FC<squareProps> = ({val,chooseSquare}) => {
  return (
    <div className='flex basis-1/3 justify-center items-center border border-black text-3xl text-black active:bg-blue-400' onClick={chooseSquare}>
        {val}
    </div>
  )
  }

