import React from 'react'
import Navbar from '../pages/components/Navbar'

interface childrenProps {
children: any
}

export const Layout: React.FC<childrenProps> = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
