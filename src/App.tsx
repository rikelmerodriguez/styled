<<<<<<< HEAD
import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import themeOrigin from './containers/theme/origin'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
=======
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
  )
}

export default App
