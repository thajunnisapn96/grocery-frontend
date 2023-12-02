import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';  // Remove the duplicate import

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Auth from './components/Auth';
import Dashboard from './Pages/Dashboard'
import Shop from './Pages/Shop';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart'
import { useContext } from 'react';
import { tokenAuthContext } from './contexts/AuthToken';

function App() {
 
  const {isAuth} = useContext(tokenAuthContext)
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/login'} element={<Auth login />} />
        <Route path={'/dashboard'} element={isAuth? <Dashboard />:<Home/>} />
        <Route path={'/shop'} element={<Shop />} />
        <Route path={'/wishlist'} element={<Wishlist />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/*'} element={<Navigate to={<Home />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
