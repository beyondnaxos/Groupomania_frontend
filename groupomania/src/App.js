// import './App.css';
// import { Routes , Route } from 'react-router-dom'
// import Home from './Containers/Home/Home'
// import Login from './Containers/Login/Login';
// import SignUp from './Containers/Signup/SignUp';
// import React, {useState} from 'react'



// function App() {

//   const [user, setUser ] = useState()


//   return (
//     <Routes>
//     <Route path='/login' element={<Login />}/>
//     <Route path='/signup' element={<SignUp signup={setUser}/>}/>
//     <Route path='/' element={<Home />}/>
//     </Routes>
//   );
// }

// export default App;
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loader from 'shareComponent/Loader';
import ProtectedRoutes from 'routes/ProtectedRoutes'; //Authenticated routes
import PublicRoute from 'routes/PublicRoute'; 
import PrivateRoute from 'routes/PrivateRoute'; 

const LoginPage = lazy(() => import('components/LoginPage'));
const Register = lazy(() => import('components/Register'));
const ForgotPassword = lazy(() => import('components/ForgotPassword'));
const NoFoundComponent = lazy(() => import('components/NoFoundComponent'));

const App = () => {
  const isAuthenticated = getToken();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
          >
            <LoginPage />
          </PublicRoute>
          <PublicRoute
            path="/register"
            isAuthenticated={isAuthenticated}
          >
            <Register />
          </PublicRoute>
          <PublicRoute
            path="/forgot-password"
            isAuthenticated={isAuthenticated}
          >
            <ForgotPassword />
          </PublicRoute>
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;