import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, Generation1Page, PokemonGenerationsPage, PokemonPage, NotFoundPage, SearchPokemonPage } from './pages'
import { PageWrapper } from './components'

const App = () => {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonGenerationsPage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/generation1" element={<Generation1Page />} />
          <Route path="/search" element={<SearchPokemonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </PageWrapper>
    </>
  )
}

export default App
