import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: JSX.Element | JSX.Element[]
}
function Layout({ children }: Props) {
  return (
    <div>
      <div className="container mx-auto max-w-max">
        <div className="mt-28 flex justify-center">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
