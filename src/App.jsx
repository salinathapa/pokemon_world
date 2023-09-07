import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, PokemonGenerationsPage, KantoPage, JohtoPage, PokemonPage, NotFoundPage, SearchPokemonPage } from './pages'
import { PageWrapper } from './components'

const App = () => {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonGenerationsPage />} />
          <Route path="/kanto" element={<KantoPage />} />
          <Route path="/johto" element={<JohtoPage />} />
          {/* <Route path="/hoenn" element={<HoennPage />} />
          <Route path="/sinnoh" element={<SinnohPage />} />
          <Route path="/unova" element={<UnovaPage />} />
          <Route path="/kalos" element={<KalosPage />} />
          <Route path="/alola" element={<AlolaPage />} />
          <Route path="/galar" element={<GalarPage />} />
          <Route path="/paldea" element={<PaldeaPage />} /> */}
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/search" element={<SearchPokemonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </PageWrapper>
    </>
  )
}

export default App
