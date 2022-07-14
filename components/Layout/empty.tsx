import React from 'react'
import Header from '../Header'

type LayoutProps = {
    children: React.ReactNode
}

const LayoutEmpty = ({children}: LayoutProps) => {
  return (
    <div className='grid grid-cols-[200px,auot]'>
        <div>
            {children}
        </div>
    </div>
  )
}

export default LayoutEmpty