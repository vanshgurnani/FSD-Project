import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from '../src/components/home';
import Navbar from '../src/components/navbar';
import Issue from '../src/components/issue';
import Return from '../src/components/return';


function App(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/issue' element={<Issue />}/>
        <Route exact path='/return' element={<Return />}/>
      </Routes>
    </Router>
  );
}

export default App;
  


