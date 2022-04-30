export interface ITodo {
    title: string
    id: number
    completed: boolean
    randomColor: any
    defaultPos: Idef
    
}

export interface Idef {
    x: any
    y: any
}

export interface CharacterModel {
    id:number | string
    image: string
    name:string 
}