import React , {useState,useEffect} from 'react'
import {Square} from './componentsAbout/Square'
import { Patterns } from './componentsAbout/Patterns';



const AboutPage: React.FC = () => {
    const [board,setBoard] = useState(['','','','','','','','','']);
    const [player, setPlayer] = useState<string>('0');
    const [result,setResult] = useState({winner: 'none', state: 'none'})
    const chooseSquare = (square: number) => {
        setBoard(board.map((val: any,idx: any) => {
            if(idx == square && val == '') {
                return player
            }
            return val
        }))

      
    }

useEffect(() => {
    chechWin()
    if(player == 'X') {
        setPlayer('O')
    } else {
        setPlayer('X')
    }
},[board])

useEffect(() => {
    if(result.state != 'none') {
        alert(`Game Finished! Winning player: ${result.winner}`)
    }
    
},[result])

    const chechWin = () => {
     
        Patterns.forEach((currentPattern) => {
       
            const firstPlayer = board[currentPattern[0]]
            if(firstPlayer == '') return;
            let isWinnerFound = true
            currentPattern.forEach(i=>{  
               
                if(board[i] != firstPlayer){
                  isWinnerFound = false
                }
            })

            if(isWinnerFound){
               setResult({winner: player, state: 'won'})
                
            }
            
        })
    }
  
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[500px] h-[500px] mx-auto bg-blue-300 border border-gray-900 flex flex-col '>
                <div className='flex basis-1/3 flex-row border border-black'>
                    <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
                    <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
                    <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
                </div>
                <div className='flex basis-1/3 flex-row border border-black'>
                <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
                    <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
                    <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
                </div>
                <div className='flex basis-1/3 flex-row border border-black'>
                <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
                    <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
                    <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
                </div>

            </div>
        </div>

        <a className='h-10 w-10 bg-purple-400 ' href='/'>COme back</a>
    </>
  )
}

export default AboutPage