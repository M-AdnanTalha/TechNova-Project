import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

function App() {
  return (
   <>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Services' element={<Services />}/>
      <Route path='/AboutUs' element={<AboutUs />}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   </>
  )
}

export default App
