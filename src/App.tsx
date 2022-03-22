import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header'
import Home from './component/body/home'
import Project from './component/body/project'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>{/* need fix, send param project/1, project/2 ... */}
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
    </div>
  );
}

export default App;
