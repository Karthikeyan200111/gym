
import {  Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Layout from "./Layout"
import ExerciseDetails from './Pages/ExerciseDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='w-screen h-screen overflow-x-hidden scroll-smooth'>
    
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/' index element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Route>
   
    </Routes>
    <Footer />
    
    
    
    </div>
  );
}

export default App;
