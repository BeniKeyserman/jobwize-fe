import { useState, useEffect } from 'react';
import { CookiesProvider, Cookies } from 'react-cookie';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Login from '../pages/Login';
import Employee from '../pages/Employee';
import Employer from '../pages/Employer';

const App = () => {
  const [isLoggedIn, setLoginState] = useState();
  const [role, setRole] = useState();  

  useEffect(() => {
    const cookies = new Cookies();
    let token = cookies.get('accessToken')
    console.log(token);
    setLoginState(token ? true : false)
  }, []);

  return (
    <CookiesProvider>
      <div className="App">
        <Header />
          {
            isLoggedIn
              ? <Employer />
              : <Login setLoginState={ setLoginState } setRole={ setRole } />
          }
        <Footer />
      </div>
    </CookiesProvider>
  );
}

export default App;
