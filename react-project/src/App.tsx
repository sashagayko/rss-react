import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="*" element={<Header page={<NotFound />} title={'Not Found'} />} />
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
