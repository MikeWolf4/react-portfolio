import './App.scss';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/index"
import Home from "./components/Home/index"
import About from "./components/About/index"
import Contact from "./components/Contact/index"
import {Helmet} from "react-helmet";

function App() {
  

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Wolford</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
