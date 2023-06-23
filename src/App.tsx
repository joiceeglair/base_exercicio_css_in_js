import React from 'react'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { EstiloGlobal, Container } from './styles'

function App() {
  return (
    <React.Fragment>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </React.Fragment>
  )
}

export default App
