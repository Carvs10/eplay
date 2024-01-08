import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
