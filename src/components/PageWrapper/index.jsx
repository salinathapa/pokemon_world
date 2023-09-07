import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PageWrapper = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemon">Pokemon Generations</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer>
        Pokemon World
      </footer>
    </>
  )
}

export default PageWrapper