import Categories from './pages/Categories'

import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default RoutesPages
