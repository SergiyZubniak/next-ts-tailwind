import React from 'react'
import { useQuery } from 'react-query'
import { SearchFilm } from './FindFilms'

interface Props {
    queryKey: string
}

const useGetQuery = (queryKey: any) =>    useQuery(queryKey, ()=> {
        return fetch(`https://swapi.dev/api/${queryKey}`).then(res => res.json() )})

 const FilmsLenght = () => {
        const {data: {results = []} = {}, isLoading } = useGetQuery('films')
            return (<p>Тут {results.length} фільмів</p>
        )}

    export const Films: React.FC<Props> =({}) => {
    return (
    <div>
        <FilmsLenght />
        <SearchFilm />
        <div>lol</div>
    </div>
  )}

 