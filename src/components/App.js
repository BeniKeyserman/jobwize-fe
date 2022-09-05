import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import '../styles/App.css';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import Footer from './Footer';
import Login from '../pages/Login';
import Employer from '../pages/Employer';
import Employee from '../pages/Employee';

const App = () => {
  const cookies = new Cookies();
  const [isLoggedIn, setLoginState] = useState(cookies.get('accessToken') ? true : false);
  const [role, setRole] = useState();  

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/login' element={ <Login setLoginState={ setLoginState } setRole={ setRole } /> } />
          <Route path='/employer'
            element={ 
              <ProtectedRoute isLoggedIn={ isLoggedIn }>
                <Employer /> 
              </ProtectedRoute>              
            } 
          />
          <Route path='/employee'
            element={ 
              <ProtectedRoute isLoggedIn={ isLoggedIn }>
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
