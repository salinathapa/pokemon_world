import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, PokemonGenerationsPage, KantoPage, JohtoPage, HoennPage, SinnohPage, UnovaPage, KalosPage, AlolaPage, GalarPage, PaldeaPage, PokemonPage, NotFoundPage, SearchPokemonPage } from './pages'
import { PageWrapper } from './components'

import './assets/App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
            <Route index element={<HomePage />}/>
            <Route path="/pokemon" element={<PokemonGenerationsPage />} />
            <Route path="/kanto" element={<KantoPage />} />
            <Route path="/johto" element={<JohtoPage />} />
            <Route path="/hoenn" element={<HoennPage />} />
            <Route path="/sinnoh" element={<SinnohPage />} />
            <Route path="/unova" element={<UnovaPage />} />
            <Route path="/kalos" element={<KalosPage />} />
            <Route path="/alola" element={<AlolaPage />} />
            <Route path="/galar" element={<GalarPage />} />
            <Route path="/paldea" element={<PaldeaPage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path="/search" element={<SearchPokemonPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
