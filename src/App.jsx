import { useState } from 'react'
import './App.scss'
import RouterComponent from './browserRouter/router/router'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Images } from './shared/utils/images';
function App() {

  return (
    <>
      <Router>
        <div className="body">
          <Header />
          <div className='outlet'>
            <RouterComponent />
          </div>
          <img src={Images.plogo} className='plogo' />
        </div>
      </Router>
    </>
  )
}

export default App
