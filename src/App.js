
import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import Navbar from './components/navbar';
import Home from './components/Home';
// import Card from './components/card';
import Login from './components/login';
import Signup from './components/Signup';
import Cards from './components/card';
import DrawerBanner from './components/drawerbanner';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Cards />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signin' element={<Signup />} />
        <Route path='/drawerbanner' element={<DrawerBanner/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
