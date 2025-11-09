import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <br/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
