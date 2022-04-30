import React, { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'




const useGetFilm = (film: any) => useQuery(["films",film], async()=> {
    const response = await fetch(`https://swapi.dev/api/films?search=${film}`)
    const films = await  response.json()
     return films

}, {
       
        
    })

   
   export const SearchFilm = () => {

        const [film,setFilm] = useState<string>('')
        const {data, isLoading,isFetching} = useGetFilm(film)
       
         return   <div className='bg-yellow-200'>
            <input type="text" value={film} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilm(e.target.value)} />
                { isLoading ? 'Loading...' :
            data?.results.map((film: any) => (
            <div className='mb-2 border-b-2' key={film.title}>
                <strong>Film:</strong>
                <a href="/pageAll/componentsStudy/FilmPage">{film.title}</a>
            </div>
            ))
        }
        {/* {isFetching ? '...Loading' : null} */}

        </div>
        
      }
