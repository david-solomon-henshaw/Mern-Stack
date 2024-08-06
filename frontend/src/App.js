import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App