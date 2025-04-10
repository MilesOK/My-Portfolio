
// import { Link, Route, Routes } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Contacts from './Contacts.jsx';
import About from './About.jsx';
import Button from './Components/Button.jsx'

const App = () => {
  return (
      <Routes>
       <Route exact path='/' element={<Header/>}>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='button' element={<Button/>}/>
       </Route>
      </Routes> 
  )
}

export default App;