import './App.css';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>



      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/login" element={<Login/>}/>
        
          
        

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
