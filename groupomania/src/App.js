import './App.css';
import { Routes , Route } from 'react-router-dom'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login';
import SignUp from './Containers/Signup/SignUp';
import React, {useState} from 'react'



function App() {

  const [user, setUser ] = useState()


  return (
    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUp signup={setUser}/>}/>
    <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
