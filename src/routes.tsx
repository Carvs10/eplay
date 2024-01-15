import Categories from './pages/Categories'
import Home from './pages/Home'
import Product from './pages/Product'

import { Routes, Route } from 'react-router-dom'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default RoutesPages
