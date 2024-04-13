  import './App.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect, useState } from 'react'; 
  import 'typeface-poppins';
  import HeaderSec from './Components/UpperSec/UpperSec';
  import CustomRoute from './Components/Router/CustomRoutes';
  import FooterSec from './Components/Footer/Footer';
  import CompetitonContext from "./context/CompetitonContext"

  function App() {
    const [getUser, setGetUser] = useState(() => {
      // Retrieve getUser state from localStorage if available, otherwise default to false
      return localStorage.getItem('getUser') === 'true';
    });
    const [user, setUser] = useState(() => {
      // Retrieve user state from localStorage if available, otherwise default to an empty object
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : {};
    });

    useEffect(() => {
      AOS.init({
        // AOS configurations (optional)
      });
    }, []);

    // Save getUser state to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('getUser', getUser);
    }, [getUser]);

    // Save user state to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
      <CompetitonContext.Provider value={[getUser, setGetUser, user, setUser]}>
        <div className='CenterUpperSecTheme'>
          <HeaderSec/>
        </div>
        <CustomRoute/>
        <FooterSec/>
      </CompetitonContext.Provider>
    );
  }

  export default App;
