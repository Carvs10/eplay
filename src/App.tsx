import Banner from './components/Banner'
import Header from './components/Header'

import ProductsList from './components/ProductsList'
import { GlobalStyles } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="grey" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
