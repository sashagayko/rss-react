import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/header/header';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Header page={<Home />} title={'Home'} />} />
          <Route path="/about" element={<Header page={<About />} title={'About'} />} />
          <Route path="/404" element={<Header page={<NotFound />} title={'Not Found'} />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </>
    );
  }
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
