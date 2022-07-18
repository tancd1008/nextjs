import React from 'react'
import Header from '../Header'

type LayoutProps = {
    children: React.ReactNode
}

const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div className='grid grid-cols-[200px,auto]'>
        <div>
            Slidebar
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default LayoutAdmin