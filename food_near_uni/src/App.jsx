import React from 'react';
import { Navbar, Footer } from './components';
import Restaurants from './Pages/Restaurants';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='start'>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Restaurants" exact element={<Restaurants/>} />
            <Route path="/" exact element={<About/>} />
            <Route path="/Contacts" exact element={<Contact/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
