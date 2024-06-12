import React, { useRef, useEffect } from 'react';
import './App.css';
import NavBar from './Components/Navbar.js';
import Home from './Components/Home.js';
import SearchCars from './Components/SearchCars.js';
import FeaturedCars from './Components/FeaturedCars.js';
import PopularLocations from './Components/PopularLocations.js';
import Stats from './Components/Stats.js';
import InstaPost from './Components/InstaPost.js';
import Footer from './Components/Footer.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import Search from './Pages/Search.js';
import Login from './Pages/Login.js';





function App() {

  const location = useLocation();
  const isRootPath = location.pathname === '/';




  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchcars" element={<SearchCars />} />
        <Route path="/featuredcars" element={<FeaturedCars />} />
        <Route path="/popularlocations" element={<PopularLocations />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/feed" element={<InstaPost />} />
        <Route path="/search" element={<Search />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/adminlogin" element={<Login />} />

      </Routes>
      {isRootPath && (
        <>
          <SearchCars />

          <PopularLocations />
          <FeaturedCars />
          <Stats />
          <InstaPost />
          <Footer />

        </>

      )}
    </>

  );
}

export default App;


