import React from 'react'
import { CharacterModel } from '../../interfaces'

interface PropTypes {
    character: CharacterModel
  
}

function HeroCard(props: PropTypes) {
    console.log('image',props.character.image);
    
  return (
    <div className='shadow-xl pointer flex flex-col justify-center items-center border-md w-full'>
       <div >
       <img className='mr-5 w-[240px] h-full border-md ' src={props.character.image} alt={props.character.name} />
       </div>
           
            
          
           
  
        <div className='uppercase font-bold text-xl tracking-tight'>
            {props.character.name}
        </div>
        
    </div>
  )
}

export default HeroCard