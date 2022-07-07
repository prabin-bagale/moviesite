import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbars from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = React.lazy(()=>import('./components/Homepage'))
const SingleMovie = React.lazy(()=>import('./components/SinglePage'))
const App = () => {
  return (
    <>
      <Router>
        <Navbars />
        <React.Suspense fallback={'Loading....'}>
        <Routes>
          <Route path='/'element={<HomePage />}></Route>
          <Route path='/movies/:id'element={<SingleMovie />}></Route>
        </Routes>
        </React.Suspense>
      </Router>
     
    </>
  )
}

export default App