import React from 'react'
import { NavLink } from 'react-router-dom'

const PageWrapper = ({children}) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemon">Pokemon Generations</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>

      <div>
        {children}
      </div>

      <footer>
        Pokemon World
      </footer>
    </>
  )
}

export default PageWrapper