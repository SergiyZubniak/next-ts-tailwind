import React from "react"

export const useInput =(initialValue: any) => {
 const [value, setValue] = React.useState(initialValue)

 const onChange = (e: any) => {
    setValue(e.target.value)
 }

return {
    value, onChange
}

}