import React, {useState,useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
// const [title, setTitle] = useState<string>('')   
// const ref = useRef<HTMLInputElement>(null)


// const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value)
// }

const keyPressHandle = (e: any) => {
    if(e.key === 'Enter') {
        
      onAdd(e.target.value)
      e.target.value= ''
    
        
        // console.log(title);
        // setTitle('')
    }
    
}

    return (
        <div className="flex flex-col items-center text-white">
            <label className="uppercase w-[520px] flex items-center justify-center text-white text-xs font-bold mb-2 pt-10">
        Шось введи там знизу
      </label>
      <input onKeyPress={keyPressHandle}
    //   ref={ref}
            // onChange={changeHandle}
            // value={title}
            className="appearance-none block w-[430px] mx-auto bg-gray-200 text-gray-700 border border-b-red-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
            type="text"
            placeholder="Введеш чи нє..."/>
      <p className="text-red-500 text-xs italic w-[520px] flex items-center justify-center mx-auto mb-6">Please fill out this field.</p>
        </div>
    )
}