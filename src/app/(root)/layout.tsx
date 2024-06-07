import React from 'react'

// layouts always need to export children
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth'>
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
