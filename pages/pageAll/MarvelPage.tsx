import React, { useEffect, useState } from 'react'
import Header from './componentsMarvel/Header'
import HeroCard from './componentsMarvel/HeroCard'
import axios from 'axios'
import { CharacterModel } from '../interfaces'

const hash = 'bf22cf86c1884f6108dd462264682018'

const MarvelPage: React.FC = () => {
const [characterList,setCharacterList] = useState<CharacterModel[]>([])
const [loading,setLoading] = useState<boolean>(false)



useEffect(()=> {
getCharacters()
},[])

const getCharacters=() => {
    let heroesArray: CharacterModel[] = []

    const url = 'https://gateway.marvel.com:443/v1/public/characters?&limit=100&ts=100&apikey=c9c136405a7e6c9e353396a48b844c42&hash='+hash
    axios.get(url).then((res) => {
console.log('res',res);
res.data.data.results.forEach((item: any)=>{
        heroesArray.push({
            id: item.id,
            image: item.thumbnail.path+'/portrait_xlarge.'+item.thumbnail.extension,
            name: item.name

        })
})
    setCharacterList(heroesArray)
    }).catch((err)=> {
console.log('err',err);

    })
}


    return <>
            <Header />
            <div className='flex p-5  mx-auto mt-10 w-full overflow-auto h-[calc(100%-12.5rem)]'>
              
                    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24'>
                        {characterList.length>0 && characterList.map((item:CharacterModel,index: number) => {
                            return (<HeroCard key={index} character={item}/>)
                            
                        })}
                      
                  
                    
                </div>
            </div>
    </>
}

export default MarvelPage