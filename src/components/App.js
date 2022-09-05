import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import '../styles/App.css';
import { LoginRoute, ProtectedRoute } from './ProtectedRoute';
import Header from './Header';
import Footer from './Footer';
import Login from '../pages/Login';
import Employer from '../pages/Employer';
import Employee from '../pages/Employee';

const App = () => {
  const cookies = new Cookies();
  const [isLoggedIn, setLoginState] = useState(cookies.get('accessToken') ? true : false);
  const [role, setRole] = useState(cookies.get('userRole'));  

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={
              <LoginRoute isLoggedIn={ isLoggedIn } role={ role }>
                <Login setLoginState={ setLoginState } setRole={ setRole } /> 
              </LoginRoute>
            }
          />
          <Route path='/login' 
            element={ 
              <LoginRoute isLoggedIn={ isLoggedIn } role={ role }>
                <Login setLoginState={ setLoginState } setRole={ setRole } /> 
              </LoginRoute>
              }
            />
          <Route path='/employer'
            element={ 
              <ProtectedRoute isLoggedIn={ isLoggedIn } role='employer'>
                <Employer /> 
              </ProtectedRoute>              
            } 
          />
          <Route path='/employee'
            element={ 
              <ProtectedRoute isLoggedIn={ isLoggedIn } role='employee'>
                <Employee /> 
              </ProtectedRoute>              
            } 
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
