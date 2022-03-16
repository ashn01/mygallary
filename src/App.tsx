import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header'
import Project1 from './component/body/project1/project1'
import Project2 from './component/body/project2/project2'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>{/* need fix, send param project/1, project/2 ... */}
          <Route path="/" element={<Project1/>}/>
          <Route path="/project2" element={<Project2/>}/>
        </Routes>
    </div>
  );
}

export default App;
