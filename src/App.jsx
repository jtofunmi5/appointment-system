import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';



function App() {
return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='about' element={ <About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
      </Routes>
     
     
      
    </div>
  )
}

  


export default App;
