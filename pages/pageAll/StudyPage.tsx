import React, { useState } from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Films} from './componentsStudy/Films';
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function StudyPage() {
    const [isOpen,setIsOpen] = useState(false)
        
  return (
      <QueryClientProvider client={queryClient}>
          <>
          <div className='w-full flex justify-center'>
            <button className='border-4 p-5 ' onClick={() => {setIsOpen(!isOpen)}}>Film</button>
          </div>
           <div className='text-3xl bg-gray-300'>
               {isOpen ? <Films queryKey={'films'} /> : null}
        </div>
        </>
        <ReactQueryDevtools />
      </QueryClientProvider>
    
  )
}

export default StudyPage