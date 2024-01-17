import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyles } from './styles'

import RoutesPages from './routes'
import Footer from './components/Footer'
import { store } from './store'

import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="container">
          <Header />
        </div>
        <RoutesPages />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
