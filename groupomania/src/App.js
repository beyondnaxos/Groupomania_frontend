import './App.css';
import { Routes , Route } from 'react-router-dom'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login';
import Signin from './Containers/Signin/Signin';



function App() {
  return (
    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/signin' element={<Signin />}/>
    <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
