import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyles } from './styles'

import RoutesPages from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RoutesPages />
    </BrowserRouter>
  )
}

export default App
