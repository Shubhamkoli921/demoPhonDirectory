
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/navbar';
import Home from './components/Home';
// import Card from './components/card';
// import Login from './components/login';
// import Signup from './components/Signup';
// import Cards from './components/card';
import DrawerBanner from './components/drawerbanner';
// import Banner from './components/banner';
// import Club from './components/club';
// import Events from './components/events';
// import Committee from './components/committee';
import { useEffect, useState } from 'react';
import Club from './components/club';
// import Test from './components/test';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    const ShowPending = async () => {
      await fetch('https://rslsolution.com/Rotary_directory/admin/api/getMenuList', {
        method: 'GET',
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(resData => {
          console.log('resData______data of app.js routes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>', resData);
          setData(resData.results);
        })
        .catch(error => console.log('error', error));
    };

    ShowPending();
  }, [])
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {console.log("app.js file data", data)}
          {data.map((item) => (
            <>
              {console.log("app.js function", item)}
              {item.subMenu.map((index) => (
                <>
                  {console.log("app.js route id", index.id)}
                  
                  <Route key={index.menu_id} path={`/${index.id}`} element={<DrawerBanner id={index.menu_id} />} />
                  <Route key={index.menu_id} path={`/${index.id}`} element={<Club id={index.menu_id} />} />
                </>
              ))}
            </>
          ))}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
