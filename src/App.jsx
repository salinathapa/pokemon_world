import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, SuperherosPage, SuperheroPage, NotFoundPage } from './pages'
import { PageWrapper } from './components'

const App = () => {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/superheros" element={<SuperherosPage />} />
          <Route path="/superheros/:id" element={<SuperheroPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageWrapper>
    </>
  )
}

export default App
