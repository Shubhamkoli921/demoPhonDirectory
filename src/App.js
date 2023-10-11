
import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import Navbar from './components/navbar';
import Home from './components/Home';
// import Card from './components/card';
import Login from './components/login';
import Signup from './components/Signup';
import Cards from './components/card';
import DrawerBanner from './components/drawerbanner';
import Banner from './components/banner';
import Club from './components/club';
import Events from './components/events';
import Committee from './components/committee';
import OtpAuth from './components/otpAuth';
// import Test from './components/test';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Cards />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/drawerbanner' element={<DrawerBanner/>} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/club' element={<Club/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/committee' element={<Committee />} />
        <Route path='/otpAuth' element={<OtpAuth/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;