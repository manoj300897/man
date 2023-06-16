import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Insert from './components/Insert';
import Update from './components/Update';
import View from './components/View'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Details/>} />
          <Route path='/Insert' element={<Insert/>} />
          <Route path='/View' element={<View/>} />
          <Route path='/Update/:Id' element={<Update/>} /> 
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;
