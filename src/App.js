/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Count from './components/Count';
import Update from './components/Update';
import Props from './components/Props';
import Showhide from './components/Showhide';
import SignupForm from './components/SignupForm';
import Registern from './components/Registern';
import Class_props from './components/class/Class_props';
import Class_State from './components/class/Class_State';
import Component_DidMount from './components/class/life cycle mathod/Component_DidMount';
import Navbar from './components/Question_Answer.jsx/Navbar';
import Html5 from './components/Question_Answer.jsx/Html5';

function App() {
  // const [title, settitle] = useState('ram')
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/html5' element={<Html5 />}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
