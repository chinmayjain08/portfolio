import './App.css'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Home from './components/Content/Home/Home';
import Contact from './components/Contact/Contact';


function App() {

  return (

    <Router>
      
      <div className='portfolio'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
      
    </div>
    </Router>

    
  )
}

export default App
