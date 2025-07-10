import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/HoemPage'
import AboutPage from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {

  return (
    <>
      <Header />
      <main style={{height: '90vh'}}>
        <Routes>
          <Route path='/' element={ <Homepage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
