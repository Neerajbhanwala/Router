import React from 'react';
import './App.css';
import Header from './Component/Header';
import About from './Component/About';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Services from './Component/Services';
import Contact from './Component/Contact';
import{BrowserRouter,Routes, Route} from 'react-router-dom';

function App(){
  return (
   <div className='App'>
    <BrowserRouter>
    <Header />
    <Routes> 
    <Route path='/' element={<Home />}></Route>
    <Route path='/About' element={<About />}></Route>
    <Route path='/Services' element={<Services />}></Route>
    <Route path='/Contact' element={<Contact />}></Route>
   </Routes>
   <Footer />
   </BrowserRouter>
   </div>
  );
}

export default App;
