import React, { ReactNode } from 'react'

type ContentViewLayoutProps = {
  children: ReactNode
}

export const ContentViewLayout = ({children}: ContentViewLayoutProps) => {
  return (
    <div className='content-view-outer'>
        {children}
    </div>
  )
}
