import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const PageWrapper = ({children}) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/superheros">Superheros</NavLink>
        </nav>
      </header>

      <div>
        {children}
      </div>

      <footer>
        Superhero App
      </footer>
    </>
  )
}

export default PageWrapper