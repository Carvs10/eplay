import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyles } from './styles'

import RoutesPages from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RoutesPages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
