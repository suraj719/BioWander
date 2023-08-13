import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accommodations from './components/Accommodations';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Calculator from "./components/Calculator"
import Operators from './components/Operators';
import Tips from "./components/Tips"
import Posts from "./components/Posts"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/accommodations' element={<Accommodations />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/operators' element={<Operators />} ></Route>
        <Route path='/tips' element={<Tips />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
      </Routes>
    </>
  );
}

export default App;
