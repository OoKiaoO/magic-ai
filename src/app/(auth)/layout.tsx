import React from 'react'

// layouts always need to export children
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout
