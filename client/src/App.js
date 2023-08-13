import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from "./contexts/AuthContext";
import Accommodations from './components/Accommodations';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Calculator from "./components/Calculator"
import Operators from './components/Operators';
import Tips from "./components/Tips"
import Posts from "./components/Posts"
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import PrivateRoute from "./components/PrivateRoute"
function App() {
  return (
    <>
      <Navbar />
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/accommodations' element={<Accommodations />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/operators' element={<Operators />} ></Route>
        <Route path='/tips' element={<Tips />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/posts/:id' element={<Post />}></Route>
        <Route
            path="/createpost"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
