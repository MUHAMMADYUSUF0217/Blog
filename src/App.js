import './App.css';
import React from 'react';
import Home from './pages/Home';
import Academy from './pages/Academy'
import Projects from './pages/Projects'
import Channel from './pages/Channel'
import Blog from './pages/Blog';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';


const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/academy" element={<Academy/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/channel" element={<Channel/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
};

App.propTypes = {};

export default App;
