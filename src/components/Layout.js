import React from 'react'

const Layout = ({children,clasName=""}) => {
  return (
    <div
    className={`${clasName} w-full h-full inline-block z-0 bg-light p-32`}
    >
        {children}
    </div>
  )
}

export default Layout