import {BrowserRouter,Routes, Route} from 'react-router-dom'

import './App.css'
import Register from './Register'
import Login from './Login'
import Prueba from './Prueba'
import Navbar from './Navbar'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/prueba' element={<Prueba></Prueba>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
