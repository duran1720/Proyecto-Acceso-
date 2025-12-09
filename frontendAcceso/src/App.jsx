import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import Register from './Register'
import Login from './Login'
import Prueba from './Prueba'
import Navbar from './Navbar'
import { AuthPro, useAuth } from './context/AuthContext'


function App() {
  

  return (
    <div>
      
      <BrowserRouter>
        <AuthPro>
           <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/prueba' element={<RequireAuth><Prueba></Prueba></RequireAuth>}></Route>
          </Routes>
        </AuthPro>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
//compopnente interno 
function RequireAuth({children}) {
  const { token } = useAuth();
  if(!token){
    return <Navigate to="/login"></Navigate>
  }else{
    return children;
  }
}